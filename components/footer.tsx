import { Database, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-blue-400" />
              <span className="font-bold text-lg">
                NoSQL<span className="text-blue-400">Mastery</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive study guide for mastering NoSQL databases and acing your exams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#concepts" className="hover:text-blue-400 transition">
                  Core Concepts
                </a>
              </li>
              <li>
                <a href="#crud" className="hover:text-blue-400 transition">
                  CRUD Operations
                </a>
              </li>
              <li>
                <a href="#aggregation" className="hover:text-blue-400 transition">
                  Aggregation
                </a>
              </li>
              <li>
                <a href="#indexing" className="hover:text-blue-400 transition">
                  Indexing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Advanced Topics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#schema" className="hover:text-blue-400 transition">
                  Schema Design
                </a>
              </li>
              <li>
                <a href="#replication" className="hover:text-blue-400 transition">
                  Replication
                </a>
              </li>
              <li>
                <a href="#operators" className="hover:text-blue-400 transition">
                  Query Operators
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://docs.mongodb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  MongoDB Docs
                </a>
              </li>
              <li>
                <a
                  href="https://university.mongodb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  MongoDB University
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Good luck on your exam! 🍀</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
