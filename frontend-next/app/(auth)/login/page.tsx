"use client"

import { useState } from "react"
import { TypeOfLoginButton } from "./typeOfLoginButton/typeOfLoginButton"
import { LoginInvidual } from "./loginInvidual/loginInvidual"
import { LoginEnteprenur } from "./loginEnteprenur/loginEnteprenur"

export default function LoginPage() {
  const [activeType, setActiveType] = useState<"Individual" | "Entrepreneur">("Individual")

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background p-4">
      <TypeOfLoginButton activeType={activeType} onTypeChange={setActiveType} />

      <div className="w-full flex justify-center transition-all duration-500 ease-in-out">
        {activeType === "Individual" ? (
          <LoginInvidual />
        ) : (
          <LoginEnteprenur />
        )}
      </div>
      
      <p className="text-center text-foreground text-sm mt-6">
        Don't have an account? <span className="text-blue-500 font-medium cursor-pointer hover:underline">Sign Up</span>
      </p>
    </div>
  )
}
