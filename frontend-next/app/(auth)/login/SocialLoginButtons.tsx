"use client"

import React from 'react'

export function SocialLoginButtons() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 mt-4">
      {/* Facebook */}
      <div className="group relative flex flex-col items-center">
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none z-20">
          <div className="bg-[#1877F2] text-white text-xs py-1 px-3 rounded shadow-lg relative font-medium">
            Facebook
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1877F2] rotate-45"></div>
          </div>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-card shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#1877F2] hover:text-white border border-border group-hover:border-[#1877F2]">
          <svg viewBox="0 0 320 512" className="w-5 h-5 fill-current">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </div>
      </div>

      {/* X (Twitter) */}
      <div className="group relative flex flex-col items-center">
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none z-20">
          <div className="bg-black text-white text-xs py-1 px-3 rounded shadow-lg relative font-medium">
            X
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-card shadow-sm cursor-pointer transition-all duration-300 hover:bg-black hover:text-white border border-border group-hover:border-black">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
          </svg>
        </div>
      </div>

      {/* Instagram */}
      <div className="group relative flex flex-col items-center">
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none z-20">
          <div className="bg-[#E4405F] text-white text-xs py-1 px-3 rounded shadow-lg relative font-medium">
            Instagram
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E4405F] rotate-45"></div>
          </div>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-card shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#E4405F] hover:text-white border border-border group-hover:border-[#E4405F]">
          <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </div>
      </div>

      {/* Google */}
      <div className="group relative flex flex-col items-center">
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none z-20 w-max">
          <div className="bg-gradient-to-r from-[#34A853] via-[#FBBC05] to-[#EA4335] text-white text-xs py-1 px-3 rounded shadow-lg relative font-medium">
            Google
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FBBC05] rotate-45"></div>
          </div>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-card shadow-sm cursor-pointer transition-all duration-300 border border-border group-hover:border-transparent overflow-hidden relative">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#34A853] via-[#FBBC05] to-[#EA4335]"></div>
          <svg viewBox="0 0 48 48" className="w-5 h-5 z-10 fill-current group-hover:text-white transition-colors">
            <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
