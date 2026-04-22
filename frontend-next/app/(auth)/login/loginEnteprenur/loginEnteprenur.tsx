"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SocialLoginButtons } from "../SocialLoginButtons"

export function LoginEnteprenur() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Testing credentials
    const TEST_EMAIL = "tester@enterprise.com"
    const TEST_PASSWORD = "12345"
    const TEST_COMPANY = "tester123"

    if (email === TEST_EMAIL && password === TEST_PASSWORD && (company === TEST_COMPANY || !TEST_COMPANY)) {
      localStorage.setItem("user", JSON.stringify({ email, company, type: "Entrepreneur" }))
      router.push("/")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <form className="flex flex-col gap-2.5 bg-card border border-border p-8 w-[450px] rounded-[20px] shadow-sm" onSubmit={handleLogin}>
      <div className="flex flex-col">
        <label className="text-foreground font-semibold">Email</label>
      </div>
      <div className="border-[1.5px] border-border rounded-lg h-[50px] flex items-center pl-2.5 transition-all focus-within:border-blue-500 bg-background">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 32 32" height={20} className="fill-foreground">
          <g data-name="Layer 3" id="Layer_3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
          </g>
        </svg>
        <input 
          placeholder="Enter your Email" 
          className="ml-2.5 rounded-lg border-none w-full h-full bg-transparent text-foreground focus:outline-none placeholder:font-sans" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-foreground font-semibold">Company Name</label>
      </div>
      <div className="border-[1.5px] border-border rounded-lg h-[50px] flex items-center pl-2.5 transition-all focus-within:border-blue-500 bg-background">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <input 
          placeholder="Enter your Company Name" 
          className="ml-2.5 rounded-lg border-none w-full h-full bg-transparent text-foreground focus:outline-none placeholder:font-sans" 
          type="text" 
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-foreground font-semibold">Password</label>
      </div>
      <div className="border-[1.5px] border-border rounded-lg h-[50px] flex items-center pl-2.5 transition-all focus-within:border-blue-500 bg-background">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="-64 0 512 512" height={20} className="fill-foreground">
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
        </svg>
        <input 
          placeholder="Enter your Password" 
          className="ml-2.5 rounded-lg border-none w-full h-full bg-transparent text-foreground focus:outline-none placeholder:font-sans" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <div className="text-red-500 bg-red-500/10 p-2 rounded-lg text-sm text-center border border-red-500/20">{error}</div>}

      <div className="flex flex-row items-center gap-2.5 justify-between">
        <div className="flex items-center gap-1.25">
          <input type="checkbox" id="remember" className="accent-blue-500" />
          <label htmlFor="remember" className="text-sm text-foreground">Remember me</label>
        </div>
        <span className="text-sm text-blue-500 font-medium cursor-pointer">Forgot password?</span>
      </div>
      
      <button className="my-5 bg-[#151717] dark:bg-blue-500 border-none text-white text-[15px] font-medium rounded-lg h-[50px] w-full cursor-pointer transition-colors hover:bg-neutral-800 dark:hover:bg-blue-600" type="submit">
        Sign In (Entrepreneur)
      </button>

      <SocialLoginButtons />
    </form>
  )
}
