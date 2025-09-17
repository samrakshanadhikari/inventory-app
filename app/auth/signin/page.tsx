"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("admin@example.com");
  const [role, setRole] = useState("ADMIN");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await signIn("credentials", { 
        email, 
        role, 
        callbackUrl: "/dashboard",
        redirect: false 
      });
      
      if (result?.ok) {
        router.push("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen theme-auth flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center animate-slideInUp">
          <div className="mx-auto w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 shadow-beautiful hover-glow animate-float">
            <span className="text-white text-4xl font-bold">I</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-3 gradient-text text-glow">
            Welcome Back
          </h2>
          <p className="text-white/70 text-lg">
            Sign in to access your inventory dashboard
          </p>
        </div>

        {/* Sign In Form */}
        <div className="card-premium p-10 animate-fadeInScale" style={{animationDelay: '0.2s'}}>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-premium focus-ring"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="input-premium focus-ring"
              >
                <option value="ADMIN">Admin</option>
                <option value="STAFF">Staff</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-premium btn-primary text-lg hover-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Signing In...
                </div>
              ) : (
                <>
                  <span className="mr-2">🚀</span>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-center text-sm text-white/60 mb-6 font-semibold">🎯 Demo Accounts</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 glass rounded-xl hover-lift animate-slideInLeft" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-beautiful hover-glow">
                    <span className="text-white text-xl">👑</span>
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold">Admin</p>
                    <p className="text-white/60 text-sm">admin@example.com</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEmail("admin@example.com");
                    setRole("ADMIN");
                  }}
                  className="btn-premium btn-secondary text-sm hover-glow"
                >
                  Use
                </button>
              </div>

              <div className="flex items-center justify-between p-5 glass rounded-xl hover-lift animate-slideInRight" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-beautiful hover-glow">
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold">Staff</p>
                    <p className="text-white/60 text-sm">staff1@example.com</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEmail("staff1@example.com");
                    setRole("STAFF");
                  }}
                  className="btn-premium btn-secondary text-sm hover-glow"
                >
                  Use
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center animate-fadeInScale" style={{animationDelay: '0.6s'}}>
          <a
            href="/"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors hover-glow"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}