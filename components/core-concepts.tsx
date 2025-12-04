import { BookOpen, Database, Folder, FileText, Server, HardDrive } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StudyBlur } from "./study-blur"

export function CoreConcepts() {
  return (
    <section id="concepts" className="scroll-mt-24">
      <SectionHeader
        icon={BookOpen}
        iconColor="text-blue-400"
        bgColor="bg-blue-900/30"
        title="Core Concepts"
        subtitle="Fundamental building blocks of NoSQL databases"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Data Hierarchy Card */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Data Hierarchy</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-900/50 p-1 rounded mr-3 mt-1 shrink-0">
                <Database className="w-4 h-4 text-blue-400" />
              </span>
              <div>
                <span className="font-bold">Database</span>
                <p className="text-muted-foreground text-sm mt-1">
                  <StudyBlur>Container for collections. Equivalent to SQL Database.</StudyBlur>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-900/50 p-1 rounded mr-3 mt-1 shrink-0">
                <Folder className="w-4 h-4 text-blue-400" />
              </span>
              <div>
                <span className="font-bold">Collection</span>
                <p className="text-muted-foreground text-sm mt-1">
                  <StudyBlur>Group of documents. Equivalent to SQL Table.</StudyBlur>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-900/50 p-1 rounded mr-3 mt-1 shrink-0">
                <FileText className="w-4 h-4 text-blue-400" />
              </span>
              <div>
                <span className="font-bold">Document</span>
                <p className="text-muted-foreground text-sm mt-1">
                  <StudyBlur>Data record (BSON). Equivalent to SQL Row.</StudyBlur>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* JSON vs BSON Card */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-emerald-300">JSON vs. BSON</h3>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-yellow-400 font-bold">JSON</span>
                <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Human Friendly</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <StudyBlur>Text-based, lightweight, used for data exchange over the web.</StudyBlur>
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg border border-emerald-900/30">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-emerald-400 font-bold">BSON</span>
                <span className="text-xs bg-emerald-900/30 px-2 py-1 rounded text-emerald-300">Machine Efficient</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <StudyBlur>
                  Binary JSON. Used internally by MongoDB. Faster scanning, supports Dates & Binary data.
                </StudyBlur>
              </p>
            </div>
          </div>
        </div>

        {/* CAP Theorem Card - NEW */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-orange-300">CAP Theorem</h3>
          <p className="text-sm text-muted-foreground mb-4">
            <StudyBlur>
              Distributed systems can only guarantee 2 of 3 properties: Consistency, Availability, Partition Tolerance.
            </StudyBlur>
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              <span className="text-sm">
                <strong>C</strong> - <StudyBlur>Consistency: All nodes see same data</StudyBlur>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              <span className="text-sm">
                <strong>A</strong> - <StudyBlur>Availability: Every request gets a response</StudyBlur>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              <span className="text-sm">
                <strong>P</strong> - <StudyBlur>Partition Tolerance: Works despite network failures</StudyBlur>
              </span>
            </div>
          </div>
        </div>

        {/* ACID vs BASE Card - NEW */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-lg md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-pink-300">ACID vs BASE</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 p-3 rounded-lg">
              <span className="text-xs text-pink-400 font-bold block mb-2">ACID (SQL)</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>
                  <StudyBlur>Atomicity</StudyBlur>
                </li>
                <li>
                  <StudyBlur>Consistency</StudyBlur>
                </li>
                <li>
                  <StudyBlur>Isolation</StudyBlur>
                </li>
                <li>
                  <StudyBlur>Durability</StudyBlur>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <span className="text-xs text-emerald-400 font-bold block mb-2">BASE (NoSQL)</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>
                  <StudyBlur>Basically Available</StudyBlur>
                </li>
                <li>
                  <StudyBlur>Soft state</StudyBlur>
                </li>
                <li>
                  <StudyBlur>Eventually consistent</StudyBlur>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NoSQL Types Card - NEW */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">NoSQL Database Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <FileText className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <span className="text-sm font-medium block">Document</span>
              <span className="text-xs text-muted-foreground">
                <StudyBlur>MongoDB, CouchDB</StudyBlur>
              </span>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Server className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <span className="text-sm font-medium block">Key-Value</span>
              <span className="text-xs text-muted-foreground">
                <StudyBlur>Redis, DynamoDB</StudyBlur>
              </span>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <HardDrive className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <span className="text-sm font-medium block">Column</span>
              <span className="text-xs text-muted-foreground">
                <StudyBlur>Cassandra, HBase</StudyBlur>
              </span>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Database className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <span className="text-sm font-medium block">Graph</span>
              <span className="text-xs text-muted-foreground">
                <StudyBlur>Neo4j, ArangoDB</StudyBlur>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
