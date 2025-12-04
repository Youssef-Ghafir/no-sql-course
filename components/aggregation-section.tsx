import { Layers } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StudyBlur } from "./study-blur"

const pipelineStages = [
  {
    stage: 1,
    name: "$match",
    badge: "Filter",
    description:
      "Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.",
    example: '{ status: "A" }',
  },
  {
    stage: 2,
    name: "$unwind",
    badge: "Deconstruct",
    description: "Deconstructs an array field from the input documents to output a document for each element.",
    example: '$unwind: "$items"',
  },
  {
    stage: 3,
    name: "$group",
    badge: "Aggregate",
    description: "Groups input documents by the specified _id expression and applies the accumulator expressions.",
    example: '{ _id: "$custId", total: { $sum: "$amount" } }',
  },
  {
    stage: 4,
    name: "$project",
    badge: "Shape",
    description: "Passes along the documents with the requested fields to the next stage.",
    example: "{ total: 1, _id: 0 }",
  },
  {
    stage: 5,
    name: "$lookup",
    badge: "Left Outer Join",
    badgeColor: "bg-purple-900/50 text-purple-300 border border-purple-800",
    description: "Performs a join with another collection.",
    example: `{
  from: "inventory",
  localField: "item",
  foreignField: "sku",
  as: "inventory_docs"
}`,
  },
  {
    stage: 6,
    name: "$sort",
    badge: "Order",
    description: "Sorts all input documents and returns them in the specified order.",
    example: "{ total: -1 }",
  },
  {
    stage: 7,
    name: "$limit / $skip",
    badge: "Paginate",
    description: "Limits the number of documents or skips a specified number of documents.",
    example: "{ $limit: 10 }, { $skip: 20 }",
  },
  {
    stage: 8,
    name: "$out / $merge",
    badge: "Output",
    badgeColor: "bg-emerald-900/50 text-emerald-300 border border-emerald-800",
    description: "Writes the resulting documents to a collection. $merge can update existing documents.",
    example: '{ $out: "results" }',
  },
]

export function AggregationSection() {
  return (
    <section id="aggregation" className="scroll-mt-24">
      <SectionHeader
        icon={Layers}
        iconColor="text-orange-400"
        bgColor="bg-orange-900/30"
        title="Aggregation Pipeline"
        subtitle="Think of it as a conveyor belt: Data enters, gets processed stage by stage."
      />

      {/* Accumulators Quick Reference - NEW */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h3 className="font-bold text-lg mb-4 text-orange-300">Common Accumulators</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "$sum", desc: "Add values" },
            { name: "$avg", desc: "Average" },
            { name: "$min", desc: "Minimum" },
            { name: "$max", desc: "Maximum" },
            { name: "$first", desc: "First doc" },
            { name: "$last", desc: "Last doc" },
          ].map((acc) => (
            <div key={acc.name} className="text-center p-3 bg-muted/50 rounded-lg">
              <code className="text-orange-400 font-mono text-sm block">{acc.name}</code>
              <span className="text-xs text-muted-foreground">
                <StudyBlur>{acc.desc}</StudyBlur>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Steps */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-border z-0" />

        {pipelineStages.map((item) => (
          <div key={item.stage} className="relative z-10 flex items-start mb-6 sm:mb-8 group">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-card border-2 border-orange-500 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-orange-400 shadow-lg group-hover:scale-110 transition">
              {item.stage}
            </div>
            <div className="ml-4 sm:ml-6 bg-card p-4 sm:p-5 rounded-lg border border-border flex-1 hover:border-orange-500/50 transition">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h4 className="font-bold text-orange-300 font-mono">{item.name}</h4>
                <span className={`text-xs px-2 py-1 rounded ${item.badgeColor || "bg-muted text-muted-foreground"}`}>
                  {item.badge}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <StudyBlur>{item.description}</StudyBlur>
              </p>
              <code className="text-xs text-muted-foreground font-mono block bg-muted p-2 rounded overflow-x-auto whitespace-pre">
                {item.example}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* Full Example - NEW */}
      <div className="bg-card border border-border rounded-xl p-6 mt-8">
        <h3 className="font-bold text-lg mb-4 text-orange-300">Complete Pipeline Example</h3>
        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-emerald-300">{`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $unwind: "$items" },
  { $group: {
      _id: "$items.category",
      totalRevenue: { $sum: "$items.price" },
      count: { $sum: 1 }
  }},
  { $sort: { totalRevenue: -1 } },
  { $limit: 5 },
  { $project: {
      category: "$_id",
      totalRevenue: 1,
      count: 1,
      _id: 0
  }}
])`}</pre>
        </div>
      </div>
    </section>
  )
}
