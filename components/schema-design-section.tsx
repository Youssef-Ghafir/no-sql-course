import { Database, Link, Unlink } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StudyBlur } from "./study-blur"

export function SchemaDesignSection() {
  return (
    <section id="schema" className="scroll-mt-24">
      <SectionHeader
        icon={Database}
        iconColor="text-violet-400"
        bgColor="bg-violet-900/30"
        title="Schema Design"
        subtitle="Best practices for structuring your data"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Embedding */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Link className="w-5 h-5 text-violet-400" />
            <h3 className="text-xl font-bold text-violet-300">Embedding (Denormalization)</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              Store related data in a single document. Best for data that is frequently accessed together.
            </StudyBlur>
          </p>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-violet-300">{`{
  _id: ObjectId("..."),
  name: "Ali",
  address: {
    street: "123 Main St",
    city: "Paris",
    country: "France"
  },
  orders: [
    { item: "Book", price: 15 },
    { item: "Pen", price: 2 }
  ]
}`}</pre>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-emerald-400">
              ✓ <StudyBlur>Fast reads (single query)</StudyBlur>
            </p>
            <p className="text-emerald-400">
              ✓ <StudyBlur>Atomic updates</StudyBlur>
            </p>
            <p className="text-red-400">
              ✗ <StudyBlur>Document size limit (16MB)</StudyBlur>
            </p>
            <p className="text-red-400">
              ✗ <StudyBlur>Data duplication</StudyBlur>
            </p>
          </div>
        </div>

        {/* Referencing */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Unlink className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-cyan-300">Referencing (Normalization)</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              Store relationships as references. Best for large, frequently changing, or shared data.
            </StudyBlur>
          </p>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-cyan-300">{`// users collection
{
  _id: ObjectId("user1"),
  name: "Ali",
  order_ids: [
    ObjectId("order1"),
    ObjectId("order2")
  ]
}

// orders collection
{
  _id: ObjectId("order1"),
  user_id: ObjectId("user1"),
  item: "Book",
  price: 15
}`}</pre>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-emerald-400">
              ✓ <StudyBlur>No data duplication</StudyBlur>
            </p>
            <p className="text-emerald-400">
              ✓ <StudyBlur>Smaller documents</StudyBlur>
            </p>
            <p className="text-red-400">
              ✗ <StudyBlur>Multiple queries needed</StudyBlur>
            </p>
            <p className="text-red-400">
              ✗ <StudyBlur>No joins (use $lookup)</StudyBlur>
            </p>
          </div>
        </div>

        {/* Design Patterns - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-violet-400">Common Design Patterns</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Bucket Pattern",
                desc: "Group time-series data into buckets",
                use: "IoT data, logs",
              },
              {
                name: "Polymorphic Pattern",
                desc: "Store different types in same collection",
                use: "Products, content types",
              },
              {
                name: "Subset Pattern",
                desc: "Store most-used data in main doc",
                use: "User profiles, reviews",
              },
              {
                name: "Computed Pattern",
                desc: "Pre-compute and store aggregations",
                use: "Analytics, dashboards",
              },
              {
                name: "Extended Reference",
                desc: "Include frequently-needed reference fields",
                use: "Avoid extra lookups",
              },
              {
                name: "Outlier Pattern",
                desc: "Handle documents that exceed typical size",
                use: "Popular items, viral content",
              },
            ].map((pattern) => (
              <div key={pattern.name} className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-violet-300 mb-1">{pattern.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  <StudyBlur>{pattern.desc}</StudyBlur>
                </p>
                <span className="text-xs bg-violet-900/30 text-violet-300 px-2 py-1 rounded">{pattern.use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
