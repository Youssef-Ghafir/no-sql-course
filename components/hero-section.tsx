import { Code, Layers, BookOpen, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <header className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Zap className="h-4 w-4" />
        Updated for 2024 Exams
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance">
        Ace Your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">NoSQL Exam</span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
        A comprehensive, interactive cheat sheet for Document-Oriented Databases. Toggle{" "}
        <strong className="text-foreground">Study Mode</strong> to quiz yourself on key definitions.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#crud"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          <Code className="w-5 h-5 mr-2" /> Cheat Sheet
        </a>
        <a
          href="#aggregation"
          className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition"
        >
          <Layers className="w-5 h-5 mr-2" /> Pipelines
        </a>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
        {[
          { icon: BookOpen, label: "Topics", value: "7+" },
          { icon: Code, label: "Code Examples", value: "50+" },
          { icon: Layers, label: "Pipeline Stages", value: "8" },
          { icon: Zap, label: "Quiz Questions", value: "30+" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
            <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </header>
  )
}
