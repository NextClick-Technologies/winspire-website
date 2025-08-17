"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/gradient-background.jpg)",
        }}
      />

      {/* Glassmorphic 404 Container */}
      <div className="relative z-10 max-w-md mx-auto p-8 text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* 404 Number */}
          <div className="text-8xl font-bold text-blue-950/95 mb-4 tracking-tight">404</div>

          {/* Error Message */}
          <h1 className="text-2xl font-semibold text-blue-950/95 mb-2">Page Not Found</h1>
          <p className="text-blue-950/95/80 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl text-blue-950/95 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Home size={18} />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 border border-white/20 rounded-xl text-blue-950/95 font-medium transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
