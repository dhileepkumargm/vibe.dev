import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PROVIDER_LABEL = {
  "google.com": "Google",
  "github.com": "GitHub"
};

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.9 0 7.1 1.4 9.4 3.3l7-7C36.1 2 30.6 0 24 0 14 0 5.5 5.5 1.9 13.4l8.1 6.3C11.9 14 17.4 9.5 24 9.5z" />
      <path fill="#34A853" d="M46.5 24c0-1.6-.1-3.1-.4-4.6H24v8.7h12.7c-.6 3-2.4 5.6-5 7.2l7.7 6c4.5-4.2 7.1-10.2 7.1-17.3z" />
      <path fill="#4A90E2" d="M9.9 29.7A14.4 14.4 0 0 1 9 24c0-1.4.2-2.8.5-4.1L1.9 13.4C.7 16.7 0 20.3 0 24c0 3.7.7 7.2 1.9 10.5l8 5.2z" />
      <path fill="#FBBC05" d="M24 48c6.6 0 12.1-2.2 16.1-6l-7.7-6c-2 1.4-4.6 2.2-8.4 2.2-6.6 0-12.1-4.5-14.1-10.5l-8.1 6.3C5.5 42.5 14 48 24 48z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z"
      />
    </svg>
  );
}

export default function Login() {
  const {
    signInWithGoogle,
    signInWithGithub,
    completeLinkWithProvider,
    linkingInfo,
    user,
    initializing,
    authError,
    setAuthError
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState("");

  const attemptedProviderLabel = useMemo(
    () => (linkingInfo ? PROVIDER_LABEL[linkingInfo.attemptedProviderId] || "new" : ""),
    [linkingInfo]
  );

  useEffect(() => {
    if (!initializing && user) {
      const destination = location.state?.from?.pathname || "/";
      navigate(destination, { replace: true });
    }
  }, [initializing, user, location, navigate]);

  useEffect(() => () => setAuthError(null), [setAuthError]);

  useEffect(() => {
    if (authError) {
      setLocalError(authError);
    }
  }, [authError]);

  const handleOAuth = async provider => {
    if (linkingInfo) {
      setLocalError("Finish linking your existing provider to continue.");
      return;
    }

    setLocalError("");
    try {
      setSubmitting(true);
      if (provider === "google") await signInWithGoogle();
      if (provider === "github") await signInWithGithub();
    } catch (error) {
      setLocalError(error.message || "OAuth sign-in failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLinking = async providerId => {
    setLocalError("");
    try {
      setSubmitting(true);
      await completeLinkWithProvider(providerId);
    } catch (error) {
      setLocalError(error.message || "Linking failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (initializing) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white">
        <span className="animate-pulse text-lg">Loading authentication...</span>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-10 text-white backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        <h1 className="mb-6 text-3xl font-semibold">Welcome back</h1>
        <p className="mb-10 text-sm text-white/70">
          Sign in to access personalized components, save favorites, and sync with Firebase auth.
        </p>

        <div className="space-y-6">
          {localError && <p className="text-sm text-red-300">{localError}</p>}

          {linkingInfo ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-100">
                We found an existing account for {" "}
                <span className="font-semibold">{linkingInfo.email}</span>. Continue with the provider below to link it
                {" "}
                with your {attemptedProviderLabel} sign-in.
              </div>

              {linkingInfo.providers.includes("google.com") && (
                <button
                  type="button"
                  onClick={() => handleLinking("google.com")}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/6 px-4 py-3 text-sm font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={submitting}
                >
                  <GoogleIcon />
                  {submitting ? "Linking..." : "Continue with Google to link"}
                </button>
              )}

              {linkingInfo.providers.includes("github.com") && (
                <button
                  type="button"
                  onClick={() => handleLinking("github.com")}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-sm font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={submitting}
                >
                  <GitHubIcon />
                  {submitting ? "Linking..." : "Continue with GitHub to link"}
                </button>
              )}

              <p className="text-xs text-white/60">
                Once linked, you can use any connected provider for this email to sign in.
              </p>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleOAuth("google")}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/6 px-4 py-3 text-sm font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                <GoogleIcon />
                {submitting ? "Signing in..." : "Continue with Google"}
              </button>

              <button
                type="button"
                onClick={() => handleOAuth("github")}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-sm font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                <GitHubIcon />
                {submitting ? "Signing in..." : "Continue with GitHub"}
              </button>
            </>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-white/70">
          Use Google or GitHub to sign in. We’ll create your Vibe.dev profile automatically on first login.
        </p>
      </div>
    </div>
  );
}
