"use client"

import { Database, Menu, X } from "lucide-react"
import { useStudyMode } from "./study-mode-context"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#concepts", label: "Concepts" },
  { href: "#crud", label: "CRUD" },
  { href: "#operators", label: "Operators" },
  { href: "#aggregation", label: "Aggregation" },
  { href: "#indexing", label: "Indexing" },
  { href: "#schema", label: "Schema" },
  { href: "#replication", label: "Replication" },
]

export function Navbar() {
  const { studyMode, toggleStudyMode } = useStudyMode()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Database className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl tracking-tight">
              NoSQL<span className="text-blue-400">Mastery</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Study Mode Toggle */}
            <div className="hidden sm:flex items-center space-x-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Study Mode</span>
              <button
                onClick={toggleStudyMode}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background",
                  studyMode ? "bg-blue-600" : "bg-muted",
                )}
                role="switch"
                aria-checked={studyMode}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    studyMode ? "translate-x-6" : "translate-x-1",
                  )}
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-blue-400 transition py-2"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Study Mode Toggle */}
            <div className="sm:hidden flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Study Mode</span>
              <button
                onClick={toggleStudyMode}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  studyMode ? "bg-blue-600" : "bg-muted",
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    studyMode ? "translate-x-6" : "translate-x-1",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
