import { Filter, GitMerge, List, Search, Calendar } from "lucide-react"
import { StudyBlur } from "./study-blur"

export function OperatorsSection() {
  return (
    <section id="operators" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-pink-900/30 rounded-lg">
          <Filter className="w-6 h-6 text-pink-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">Query Operators</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Comparison Operators */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-pink-400 mr-2" />
            <h3 className="font-bold text-lg">Comparison</h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-border pb-2">
              <code className="text-pink-400 font-mono">$eq / $ne</code>
              <span className="text-muted-foreground">
                <StudyBlur>Equal / Not Equal</StudyBlur>
              </span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <code className="text-pink-400 font-mono">$gt / $gte</code>
              <span className="text-muted-foreground">
                <StudyBlur>{"Greater / >="}</StudyBlur>
              </span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <code className="text-pink-400 font-mono">$lt / $lte</code>
              <span className="text-muted-foreground">
                <StudyBlur>{"Less / <="}</StudyBlur>
              </span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <code className="text-pink-400 font-mono">$in</code>
              <span className="text-muted-foreground">
                <StudyBlur>Value in list [a,b]</StudyBlur>
              </span>
            </li>
            <li className="flex justify-between">
              <code className="text-pink-400 font-mono">$nin</code>
              <span className="text-muted-foreground">
                <StudyBlur>Value not in list</StudyBlur>
              </span>
            </li>
          </ul>
        </div>

        {/* Logical Operators */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center mb-4">
            <GitMerge className="w-5 h-5 text-indigo-400 mr-2" />
            <h3 className="font-bold text-lg">Logical</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-indigo-400 font-mono">$and / $or</code>
              <span className="text-muted-foreground">
                <StudyBlur>Combine conditions</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-indigo-400 font-mono">$not</code>
              <span className="text-muted-foreground">
                <StudyBlur>Negates expression</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-indigo-400 font-mono">$nor</code>
              <span className="text-muted-foreground">
                <StudyBlur>None match</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between">
              <code className="text-indigo-400 font-mono">$exists</code>
              <span className="text-muted-foreground">
                <StudyBlur>Check field presence</StudyBlur>
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-1">Regex Example:</p>
              <code className="block bg-muted p-2 rounded text-xs text-indigo-300 overflow-x-auto">
                {'{ name: { $regex: "^Ali", $options: "i" } }'}
              </code>
            </div>
          </div>
        </div>

        {/* Array Operators */}
        <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden">
          <div className="absolute -right-4 -top-4 bg-red-500/10 w-24 h-24 rounded-full blur-2xl" />
          <div className="flex items-center mb-4 relative z-10">
            <List className="w-5 h-5 text-red-400 mr-2" />
            <h3 className="font-bold text-lg text-red-100">Arrays (Hard!)</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-muted rounded p-3 border border-red-900/30">
              <code className="text-red-400 font-mono text-sm block mb-1">$elemMatch</code>
              <p className="text-xs text-muted-foreground mb-2">
                <StudyBlur>Matches array item satisfying ALL inner criteria.</StudyBlur>
              </p>
              <code className="text-xs text-muted-foreground block border-t border-border pt-2 overflow-x-auto">
                {'{ orders: { $elemMatch: { price: 100, item: "book" } } }'}
              </code>
            </div>

            <div className="flex justify-between border-b border-border pb-2 text-sm">
              <code className="text-red-400 font-mono">$size</code>
              <span className="text-muted-foreground text-right">
                <StudyBlur>Array has X items</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <code className="text-red-400 font-mono">$all</code>
              <span className="text-muted-foreground text-right">
                <StudyBlur>Has all values [a,b]</StudyBlur>
              </span>
            </div>
          </div>
        </div>

        {/* Text Search - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center mb-4">
            <Search className="w-5 h-5 text-cyan-400 mr-2" />
            <h3 className="font-bold text-lg">Text Search</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-cyan-400 font-mono">$text</code>
              <span className="text-muted-foreground">
                <StudyBlur>Full-text search</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-cyan-400 font-mono">$search</code>
              <span className="text-muted-foreground">
                <StudyBlur>Search string</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between">
              <code className="text-cyan-400 font-mono">$language</code>
              <span className="text-muted-foreground">
                <StudyBlur>Set language</StudyBlur>
              </span>
            </div>
            <div className="mt-3">
              <code className="block bg-muted p-2 rounded text-xs text-cyan-300 overflow-x-auto">
                {'db.articles.find({ $text: { $search: "coffee" } })'}
              </code>
            </div>
          </div>
        </div>

        {/* Type Operators - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-amber-400 mr-2" />
            <h3 className="font-bold text-lg">Type & Date</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-amber-400 font-mono">$type</code>
              <span className="text-muted-foreground">
                <StudyBlur>Check field type</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-amber-400 font-mono">ISODate()</code>
              <span className="text-muted-foreground">
                <StudyBlur>Date object</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between">
              <code className="text-amber-400 font-mono">ObjectId()</code>
              <span className="text-muted-foreground">
                <StudyBlur>Unique ID</StudyBlur>
              </span>
            </div>
            <div className="mt-3">
              <code className="block bg-muted p-2 rounded text-xs text-amber-300 overflow-x-auto">
                {'{ createdAt: { $gte: ISODate("2024-01-01") } }'}
              </code>
            </div>
          </div>
        </div>

        {/* Evaluation Operators - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center mb-4">
            <GitMerge className="w-5 h-5 text-emerald-400 mr-2" />
            <h3 className="font-bold text-lg">Evaluation</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-emerald-400 font-mono">$expr</code>
              <span className="text-muted-foreground">
                <StudyBlur>Use aggregation expr</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <code className="text-emerald-400 font-mono">$mod</code>
              <span className="text-muted-foreground">
                <StudyBlur>Modulo operation</StudyBlur>
              </span>
            </div>
            <div className="flex justify-between">
              <code className="text-emerald-400 font-mono">$where</code>
              <span className="text-muted-foreground">
                <StudyBlur>JavaScript function</StudyBlur>
              </span>
            </div>
            <div className="mt-3">
              <code className="block bg-muted p-2 rounded text-xs text-emerald-300 overflow-x-auto">
                {'{ $expr: { $gt: ["$qty", "$minQty"] } }'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
