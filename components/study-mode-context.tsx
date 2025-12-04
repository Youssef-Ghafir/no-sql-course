"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface StudyModeContextType {
  studyMode: boolean
  toggleStudyMode: () => void
}

const StudyModeContext = createContext<StudyModeContextType | undefined>(undefined)

export function StudyModeProvider({ children }: { children: ReactNode }) {
  const [studyMode, setStudyMode] = useState(false)

  const toggleStudyMode = () => setStudyMode((prev) => !prev)

  return <StudyModeContext.Provider value={{ studyMode, toggleStudyMode }}>{children}</StudyModeContext.Provider>
}

export function useStudyMode() {
  const context = useContext(StudyModeContext)
  if (!context) {
    throw new Error("useStudyMode must be used within a StudyModeProvider")
  }
  return context
}
