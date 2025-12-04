"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const codeText = typeof children === "string" ? children : ""
    await navigator.clipboard.writeText(codeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group bg-card border border-border rounded-lg overflow-hidden", className)}>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-muted hover:bg-muted/80 text-xs text-muted-foreground px-2 py-1 rounded flex items-center gap-1"
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="p-4 font-mono text-sm overflow-x-auto">{children}</div>
    </div>
  )
}
