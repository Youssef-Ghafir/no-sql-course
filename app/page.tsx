import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CoreConcepts } from "@/components/core-concepts"
import { CrudSection } from "@/components/crud-section"
import { OperatorsSection } from "@/components/operators-section"
import { AggregationSection } from "@/components/aggregation-section"
import { IndexingSection } from "@/components/indexing-section"
import { SchemaDesignSection } from "@/components/schema-design-section"
import { ReplicationSection } from "@/components/replication-section"
import { Footer } from "@/components/footer"
import { StudyModeProvider } from "@/components/study-mode-context"

export default function Home() {
  return (
    <StudyModeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500 selection:text-white">
        <Navbar />
        <HeroSection />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
          <CoreConcepts />
          <CrudSection />
          <OperatorsSection />
          <AggregationSection />
          <IndexingSection />
          <SchemaDesignSection />
          <ReplicationSection />
        </main>
        <Footer />
      </div>
    </StudyModeProvider>
  )
}
