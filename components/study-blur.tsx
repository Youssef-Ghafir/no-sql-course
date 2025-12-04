"use client"

import type React from "react"

import { useState } from "react"
import { useStudyMode } from "./study-mode-context"
import { cn } from "@/lib/utils"

interface StudyBlurProps {
  children: React.ReactNode
  className?: string
}

export function StudyBlur({ children, className }: StudyBlurProps) {
  const { studyMode } = useStudyMode()
  const [revealed, setRevealed] = useState(false)

  if (!studyMode) {
    return <span className={className}>{children}</span>
  }

  return (
    <span
      onClick={() => setRevealed(!revealed)}
      className={cn(
        "cursor-pointer transition-all duration-300 select-none",
        !revealed && "blur-sm bg-muted text-transparent rounded px-1",
        revealed && "blur-0 bg-transparent",
        className,
      )}
    >
      {children}
    </span>
  )
}
