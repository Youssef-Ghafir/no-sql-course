import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "NoSQL Exam Essentials - Interactive Study Guide & Cheat Sheet",
  description:
    "Master your NoSQL exam with this interactive study guide. Covers MongoDB CRUD operations, Aggregation Pipelines, Indexing strategies, Schema Design, and Query Operators with a built-in study mode quiz.",
  keywords: [
    "NoSQL",
    "MongoDB",
    "Exam Preparation",
    "Cheat Sheet",
    "Database",
    "CRUD",
    "Aggregation Pipeline",
    "JSON vs BSON",
    "Indexing",
    "Computer Science",
  ],
  authors: [{ name: "NoSQL Mastery" }],
  openGraph: {
    title: "NoSQL Exam Essentials - Interactive Study Guide",
    description:
      "Ace your NoSQL exam with this interactive cheat sheet. Features CRUD tabs, Aggregation visualizers, and a study mode to test your knowledge.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoSQL Exam Essentials - Interactive Study Guide",
    description:
      "Ace your NoSQL exam with this interactive cheat sheet. Features CRUD tabs, Aggregation visualizers, and a study mode.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
