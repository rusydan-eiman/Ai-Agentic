"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: calc(100vh - 3.5rem);
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (!savedUser) {
      router.push("/login")
    } else {
      setUser(JSON.parse(savedUser))
    }
  }, [router])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          thread_id: user?.company || "default"
        }),
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Error: Could not connect to backend." }])
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (!user) return null

  return (
    <PageWrapper>
      <div className="mb-6 flex w-full max-w-4xl items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">UsTerprise</h1>
          <p className="text-sm text-muted-foreground">Welcome, {user.company}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <Card className="flex h-[70vh] w-full max-w-4xl flex-col shadow-lg border-muted">
        <CardHeader className="border-b bg-card">
          <CardTitle className="text-lg">Chat with AI Assistant</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto bg-muted/20 p-4 space-y-4 font-sans">
          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center text-muted-foreground italic">
              No messages yet. Ask something about your orders!
            </div>
          )}
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-foreground border border-muted"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl bg-card px-4 py-2 text-sm border border-muted animate-pulse text-muted-foreground">
                Thinking...
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t bg-card p-4">
          <form onSubmit={handleSendMessage} className="flex w-full gap-2">
            <Input 
              placeholder="How can I help with your order?" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 bg-background"
            />
            <Button type="submit" disabled={loading}>Send</Button>
          </form>
        </CardFooter>
      </Card>
    </PageWrapper>
  )
}
