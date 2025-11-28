import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  linkWithPopup,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const githubProvider = new GithubAuthProvider();
githubProvider.addScope("read:user");

const providerIdToName = providerId => {
  switch (providerId) {
    case "google.com":
      return "Google";
    case "github.com":
      return "GitHub";
    case "password":
      return "email/password";
    default:
      return providerId;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [linkingInfo, setLinkingInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setInitializing(false);
    });
    return unsubscribe;
  }, []);

  const signInWithProvider = useCallback(async provider => {
    setAuthError(null);
    setLinkingInfo(null);
    try {
      const credentials = await signInWithPopup(auth, provider);
      setUser(credentials.user);
      return credentials.user;
    } catch (error) {
      let message = error.message;

      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData?.email;
        let pendingCredential = error.customData?.credential ?? null;
        const attemptedProviderId = provider.providerId;
        const attemptedProvider = attemptedProviderId === "google.com" ? googleProvider : githubProvider;

        if (!pendingCredential) {
          if (provider.providerId === "google.com") {
            pendingCredential = GoogleAuthProvider.credentialFromError(error);
          } else if (provider.providerId === "github.com") {
            pendingCredential = GithubAuthProvider.credentialFromError(error);
          }
        }

        if (email) {
          try {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            const supportedProviders = methods.filter(method => method === "google.com" || method === "github.com");
            const existingProviderId = supportedProviders[0];

            if (existingProviderId) {
              const existingProvider = existingProviderId === "google.com" ? googleProvider : githubProvider;

              try {
                const signInResult = await signInWithPopup(auth, existingProvider);
                if (pendingCredential) {
                  try {
                    const linkResult = await linkWithCredential(signInResult.user, pendingCredential);
                    setUser(linkResult.user);
                    setAuthError(null);
                    return linkResult.user;
                  } catch (linkError) {
                    if (linkError.code === "auth/provider-already-linked") {
                      setUser(signInResult.user);
                      setAuthError(null);
                      return signInResult.user;
                    }
                    if (linkError.code === "auth/credential-already-in-use") {
                      setUser(signInResult.user);
                      setAuthError(null);
                      return signInResult.user;
                    }
                    message = linkError.message;
                    setAuthError(message);
                    throw { ...linkError, message };
                  }
                }
                try {
                  const linkResult = await linkWithPopup(signInResult.user, attemptedProvider);
                  setUser(linkResult.user);
                  setAuthError(null);
                  return linkResult.user;
                } catch (linkError) {
                  if (linkError.code === "auth/provider-already-linked" || linkError.code === "auth/credential-already-in-use") {
                    setUser(signInResult.user);
                    setAuthError(null);
                    return signInResult.user;
                  }
                  message = linkError.message;
                  setAuthError(message);
                  throw { ...linkError, message };
                }
              } catch (linkError) {
                message = linkError.message;
                setAuthError(message);
                throw { ...linkError, message };
              }
            }

            if (supportedProviders.length > 0) {
              setLinkingInfo({
                email,
                pendingCredential,
                attemptedProviderId,
                providers: supportedProviders
              });
              const friendlyProviders = supportedProviders.map(providerIdToName).join(" or ");
              message = `We found an existing ${friendlyProviders} account for ${email}. Continue with ${friendlyProviders} to link your ${providerIdToName(provider.providerId)} access.`;
            } else {
              const friendlyProviders = methods.map(providerIdToName).join(" or ");
              message = friendlyProviders
                ? `An account for ${email} already exists via ${friendlyProviders}. Sign in with that provider first, then start the new sign-in again to link them.`
                : `An account for ${email} already exists via a different sign-in method. Sign in with the original provider first, then retry.`;
            }
          } catch (fetchError) {
            message = `An account with that email already exists using a different sign-in method. Sign in with the original provider first, then try linking again.`;
          }
        } else {
          message = `An account already exists using a different sign-in method. Sign in with the original provider first, then retry.`;
        }
      }

      setAuthError(message);
      throw { ...error, message };
    }
  }, []);

  const signInWithGoogle = useCallback(() => signInWithProvider(googleProvider), [signInWithProvider]);

  const signInWithGithub = useCallback(() => signInWithProvider(githubProvider), [signInWithProvider]);

  const completeLinkWithProvider = useCallback(async providerId => {
    if (!linkingInfo) {
      throw new Error("No link pending for completion");
    }

    if (!linkingInfo.providers.includes(providerId)) {
      throw new Error("Requested provider is not part of the pending link flow");
    }

    const providerToUse = providerId === "google.com" ? googleProvider : githubProvider;
    const attemptedProvider = linkingInfo.attemptedProviderId === "google.com" ? googleProvider : githubProvider;
    setAuthError(null);

    try {
      const signInResult = await signInWithPopup(auth, providerToUse);
      if (linkingInfo.pendingCredential) {
        try {
          const linkResult = await linkWithCredential(signInResult.user, linkingInfo.pendingCredential);
          setUser(linkResult.user);
          setLinkingInfo(null);
          return linkResult.user;
        } catch (error) {
          if (error.code === "auth/provider-already-linked") {
            setUser(signInResult.user);
            setLinkingInfo(null);
            return signInResult.user;
          }
          if (error.code === "auth/credential-already-in-use") {
            setUser(signInResult.user);
            setLinkingInfo(null);
            return signInResult.user;
          }
          const message = error.message;
          setAuthError(message);
          throw { ...error, message };
        }
      }
      try {
        const linkResult = await linkWithPopup(signInResult.user, attemptedProvider);
        setUser(linkResult.user);
        setLinkingInfo(null);
        return linkResult.user;
      } catch (error) {
        if (error.code === "auth/provider-already-linked" || error.code === "auth/credential-already-in-use") {
          setUser(signInResult.user);
          setLinkingInfo(null);
          return signInResult.user;
        }
        const message =
          error.code === "auth/popup-closed-by-user"
            ? "The sign-in popup was closed before completing the flow. Please try again."
            : error.message;
        setAuthError(message);
        throw { ...error, message };
      }
    } catch (error) {
      const message =
        error.code === "auth/popup-closed-by-user"
          ? "The sign-in popup was closed before completing the flow. Please try again."
          : error.message;
      setAuthError(message);
      throw { ...error, message };
    }
  }, [linkingInfo]);

  const logout = useCallback(async () => {
    setAuthError(null);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setAuthError(error.message);
      throw error;
    }
  }, [setAuthError]);

  const value = useMemo(
    () => ({
      user,
      initializing,
      authError,
      setAuthError,
      linkingInfo,
      completeLinkWithProvider,
      signInWithGoogle,
      signInWithGithub,
      logout
    }),
    [user, initializing, authError, linkingInfo, completeLinkWithProvider, signInWithGoogle, signInWithGithub, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
