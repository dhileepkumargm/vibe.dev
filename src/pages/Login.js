import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { signIn, user, initializing, authError, setAuthError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Please fill in all fields");
      return;
    }

    try {
      setSubmitting(true);
      await signIn(email, password);
    } catch (error) {
      setLocalError(error.message || "Sign in failed");
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
          Sign in to access personalized components and save favorites.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {localError && (
            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              {localError}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white/90">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-white/40 focus:bg-white/10 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-white/90">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-white/40 focus:bg-white/10 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/70">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium text-white hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
