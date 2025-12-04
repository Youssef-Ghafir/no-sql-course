import { Server, Shield, RefreshCw, HardDrive } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StudyBlur } from "./study-blur"

export function ReplicationSection() {
  return (
    <section id="replication" className="scroll-mt-24">
      <SectionHeader
        icon={Server}
        iconColor="text-rose-400"
        bgColor="bg-rose-900/30"
        title="Replication & Sharding"
        subtitle="Scaling and high availability concepts"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Replica Sets */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-rose-400" />
            <h3 className="text-xl font-bold text-rose-300">Replica Sets</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              A group of mongod instances that maintain the same data set. Provides redundancy and high availability.
            </StudyBlur>
          </p>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-rose-300 text-sm mb-2">Components</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>
                  <strong>Primary:</strong> <StudyBlur>Receives all write operations</StudyBlur>
                </li>
                <li>
                  <strong>Secondary:</strong> <StudyBlur>Replicates data from primary</StudyBlur>
                </li>
                <li>
                  <strong>Arbiter:</strong> <StudyBlur>Votes in elections, no data</StudyBlur>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-rose-300 text-sm mb-2">Failover</h4>
              <p className="text-xs text-muted-foreground">
                <StudyBlur>
                  When primary fails, secondaries elect a new primary automatically. Requires majority vote.
                </StudyBlur>
              </p>
            </div>
          </div>
        </div>

        {/* Sharding */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-4">
            <HardDrive className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-amber-300">Sharding</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            <StudyBlur>
              Distributes data across multiple machines. Used for horizontal scaling when data exceeds single server
              capacity.
            </StudyBlur>
          </p>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-300 text-sm mb-2">Components</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>
                  <strong>Shard:</strong> <StudyBlur>Stores subset of data</StudyBlur>
                </li>
                <li>
                  <strong>Config Server:</strong> <StudyBlur>Stores cluster metadata</StudyBlur>
                </li>
                <li>
                  <strong>mongos:</strong> <StudyBlur>Query router</StudyBlur>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-300 text-sm mb-2">Shard Key</h4>
              <p className="text-xs text-muted-foreground">
                <StudyBlur>
                  Field(s) used to distribute documents across shards. Choose wisely - cannot be changed after sharding!
                </StudyBlur>
              </p>
            </div>
          </div>
        </div>

        {/* Write Concern & Read Preference - NEW */}
        <div className="bg-card p-6 rounded-xl border border-border md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-rose-400">Write Concern & Read Preference</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-rose-300 mb-3 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Write Concern
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <code className="text-rose-400 font-mono">w: 1</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Ack from primary only</StudyBlur>
                  </span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <code className="text-rose-400 font-mono">w: majority</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Ack from majority</StudyBlur>
                  </span>
                </div>
                <div className="flex justify-between">
                  <code className="text-rose-400 font-mono">j: true</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Write to journal</StudyBlur>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
                <Server className="w-4 h-4" />
                Read Preference
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <code className="text-amber-400 font-mono">primary</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Read from primary</StudyBlur>
                  </span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <code className="text-amber-400 font-mono">secondary</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Read from secondary</StudyBlur>
                  </span>
                </div>
                <div className="flex justify-between">
                  <code className="text-amber-400 font-mono">nearest</code>
                  <span className="text-muted-foreground">
                    <StudyBlur>Lowest latency</StudyBlur>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
