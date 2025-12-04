import { Zap, CheckCircle, XCircle } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StudyBlur } from "./study-blur"

export function IndexingSection() {
  return (
    <section id="indexing" className="scroll-mt-24">
      <SectionHeader
        icon={Zap}
        iconColor="text-emerald-400"
        bgColor="bg-emerald-900/30"
        title="Performance & Indexing"
        subtitle="Optimize your queries for better performance"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4 text-emerald-400">Why Index?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              Without indexes, MongoDB must perform a <strong>collection scan</strong> (scan every document). Indexes
              store a small portion of data in an easy-to-traverse form.
            </StudyBlur>
          </p>

          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">Create an index (1=Asc, -1=Desc):</p>
              <code className="font-mono text-sm text-emerald-300">{"db.users.createIndex({ name: 1 })"}</code>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">Compound Index:</p>
              <code className="font-mono text-sm text-emerald-300">{"db.users.createIndex({ name: 1, age: -1 })"}</code>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">Unique Index:</p>
              <code className="font-mono text-sm text-emerald-300">
                {"db.users.createIndex({ email: 1 }, { unique: true })"}
              </code>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4 text-emerald-400">Analyzing Performance</h3>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              Use <code className="text-emerald-300">explain()</code> to check if your query is using an index or doing
              a full scan.
            </StudyBlur>
          </p>

          <div className="bg-muted rounded-lg p-4 mb-4">
            <code className="font-mono text-sm text-yellow-300 block overflow-x-auto">
              {'db.users.find({ name: "Ali" }).explain("executionStats")'}
            </code>
          </div>

          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                <strong>IXSCAN:</strong> <StudyBlur>Good! Used an index.</StudyBlur>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>
                <strong>COLLSCAN:</strong> <StudyBlur>Bad! Scanned entire collection.</StudyBlur>
              </span>
            </li>
          </ul>
        </div>

        {/* Index Types - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-emerald-400">Index Types</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Single Field",
                desc: "Index on one field",
                example: "{ name: 1 }",
              },
              {
                name: "Compound",
                desc: "Multiple fields",
                example: "{ name: 1, age: -1 }",
              },
              {
                name: "Text",
                desc: "Full-text search",
                example: '{ content: "text" }',
              },
              {
                name: "Geospatial",
                desc: "Location queries",
                example: '{ location: "2dsphere" }',
              },
            ].map((type) => (
              <div key={type.name} className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-300 mb-1">{type.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  <StudyBlur>{type.desc}</StudyBlur>
                </p>
                <code className="text-xs font-mono text-muted-foreground">{type.example}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
