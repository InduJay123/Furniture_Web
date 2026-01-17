import { useState } from "react";
import authBg from "../assets/auth.jfif";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#faf9f7]">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-10 md:px-20">
        
        {/* Logo */}
        <h1 className="text-3xl font-serif mb-8">HAUS</h1>

        {/* Toggle */}
        <div className="flex bg-[#e9e7e3] rounded-md overflow-hidden mb-10">
          <button
            onClick={() => setIsSignup(false)}
            className={`flex-1 py-3 text-sm font-medium ${
              !isSignup ? "bg-white" : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`flex-1 py-3 text-sm font-medium ${
              isSignup ? "bg-white" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-serif mb-2">
          {isSignup ? "Create account" : "Welcome back"}
        </h2>
        <p className="text-gray-500 mb-8">
          {isSignup
            ? "Join us and discover curated furniture"
            : "Sign in to continue"}
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full border px-4 py-3 rounded-md"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-3 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md"
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border px-4 py-3 rounded-md"
            />
          )}

          {isSignup && (
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              I agree to the{" "}
              <span className="text-green-600 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-green-600 cursor-pointer">
                Privacy Policy
              </span>
            </label>
          )}

          <button className="w-full bg-[#2b2723] text-white py-3 rounded-md mt-4 flex items-center justify-center gap-2">
            {isSignup ? "Create Account" : "Sign In"}
            <span>→</span>
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block relative">
        <img
          src={authBg}
          alt="Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-16 text-white max-w-md">
          <h2 className="text-4xl font-serif mb-4">
            Curated for<br />Modern Living
          </h2>
          <p className="text-gray-200">
            Discover timeless furniture pieces that transform your space into a
            sanctuary of style and comfort.
          </p>
        </div>
      </div>
    </div>
  );
}
