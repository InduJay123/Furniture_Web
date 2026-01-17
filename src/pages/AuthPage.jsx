import { useState } from "react";
import authBg from "../assets/auth.jfif";
import { ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#faf9f7]">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-24 md:px-40">
        
        <button className="w-fit px-4 py-1 rounded-md border border-[#5A3E2B]/10 bg-[#e9e7e3]/50 mb-6">
          <a href="/" className="text-black/50 inline-block">Back</a>
        </button>
        
        {/* Logo */}
        <h1 className="text-3xl font-serif mb-8">HAUS</h1>

        {/* Toggle */}
        <div className="p-1 bg-[#e9e7e3]  mb-10">
          <div className="flex rounded-md overflow-hidden">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 text-sm ${
                !isSignup ? "bg-white" : "text-gray-500"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 text-sm ${
                isSignup ? "bg-white" : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-serif mb-2">
          {isSignup ? "Create account" : "Welcome back"}
        </h2>
        <p className="text-gray-500 mb-8">
          {isSignup
            ? "Join us and discover curated furniture"
            : "Enter your credentials to access your account"}
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-[#5A3E2B]/20 bg-[#e9e7e3]/30  px-4 py-3"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-[#5A3E2B]/20 bg-[#e9e7e3]/30  px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-[#5A3E2B]/20 bg-[#e9e7e3]/30  px-4 py-3"
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-[#5A3E2B]/20 bg-[#e9e7e3]/30  px-4 py-3"
            />
          )}

          {isSignup ? (
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
          ) : (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}


          <button className="w-full bg-[#2b2723] text-white py-3 mt-4 flex items-center justify-center gap-2">
            {isSignup ? "Create Account" : "Sign In"}
            <span><ArrowRight size={18}/></span>
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-16 left-16 text-white max-w-md">
          <h2 className="text-5xl font-serif mb-4">
            Curated for<br />Modern Living
          </h2>
          <p className="text-gray-200 text-lg">
            Discover timeless furniture pieces that transform your space into a
            sanctuary of style and comfort.
          </p>
        </div>
      </div>
    </div>
  );
}
