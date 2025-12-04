"use client"

import { useState } from "react"
import { Terminal } from "lucide-react"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "create", label: "Create (Insert)" },
  { id: "read", label: "Read (Find)" },
  { id: "update", label: "Update" },
  { id: "delete", label: "Delete" },
]

export function CrudSection() {
  const [activeTab, setActiveTab] = useState("create")

  return (
    <section id="crud" className="scroll-mt-24">
      <SectionHeader
        icon={Terminal}
        iconColor="text-purple-400"
        bgColor="bg-purple-900/30"
        title="CRUD Commands"
        subtitle="Create, Read, Update, Delete operations in MongoDB"
      />

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-2xl">
        {/* Tab Headers */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 sm:px-6 py-4 text-sm font-medium whitespace-nowrap focus:outline-none transition-colors",
                activeTab === tab.id
                  ? "text-blue-400 border-b-2 border-blue-400 bg-muted/50"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="p-4 sm:p-6 md:p-8 bg-muted/30 min-h-[350px]">
          {activeTab === "create" && <CreateTab />}
          {activeTab === "read" && <ReadTab />}
          {activeTab === "update" && <UpdateTab />}
          {activeTab === "delete" && <DeleteTab />}
        </div>
      </div>
    </section>
  )
}

function CreateTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Inserting Documents</h3>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Insert a single document:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-emerald-400">{'db.users.insertOne({ name: "Ali", age: 20, city: "Paris" })'}</code>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Insert multiple documents (Array):</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-blue-300">db.users.insertMany([</code>
          <br />
          <code className="text-emerald-400 pl-4 block">{'  { name: "Sara", age: 22 },'}</code>
          <code className="text-emerald-400 pl-4 block">{'  { name: "Omar", age: 25 }'}</code>
          <code className="text-blue-300">])</code>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Insert with custom _id:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-emerald-400">
            {'db.users.insertOne({ _id: "user123", name: "Fatima", role: "admin" })'}
          </code>
        </div>
      </div>
    </div>
  )
}

function ReadTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Finding Data</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-muted-foreground text-sm mb-2">Find All:</p>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
            <code className="text-yellow-300">db.users.find()</code>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-2">Find One (First match):</p>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
            <code className="text-yellow-300">{"db.users.findOne({ age: 20 })"}</code>
          </div>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground text-sm mb-2 flex items-center gap-2">
          <span className="bg-muted px-2 py-0.5 rounded text-xs">Projection</span>
          Select specific fields (0 = hide, 1 = show)
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-muted-foreground">{"// Show name, hide _id"}</code>
          <br />
          <code className="text-yellow-300">{"db.users.find({}, { name: 1, _id: 0 })"}</code>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground text-sm mb-2 flex items-center gap-2">
          <span className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded text-xs">Cursors</span>
          Sorting, Limits & Skipping
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-muted-foreground">{"// Sort by age DESC (-1), skip first 5, take next 10"}</code>
          <br />
          <code className="text-yellow-300">{"db.users.find().sort({ age: -1 }).skip(5).limit(10)"}</code>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground text-sm mb-2">Count documents:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-yellow-300">{'db.users.countDocuments({ status: "active" })'}</code>
        </div>
      </div>
    </div>
  )
}

function UpdateTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Updating Documents</h3>

      <div>
        <p className="text-muted-foreground text-sm mb-2">Update Operators ($set, $inc, $unset):</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-purple-400">db.users.updateOne(</code>
          <div className="pl-4">
            <code className="text-muted-foreground">{'{ name: "Ali" }, '}</code>
            <span className="text-muted-foreground text-xs">{"// Filter"}</span>
            <br />
            <code className="text-blue-300">{"{ "}</code>
            <br />
            <code className="text-emerald-400 pl-4">{'$set: { city: "Lyon" },'}</code>
            <span className="text-muted-foreground text-xs">{" // Change value"}</span>
            <br />
            <code className="text-emerald-400 pl-4">{"$inc: { age: 1 },"}</code>
            <span className="text-muted-foreground text-xs">{" // Increment number"}</span>
            <br />
            <code className="text-red-400 pl-4">{'$unset: { temp_field: "" }'}</code>
            <span className="text-muted-foreground text-xs">{" // Remove field"}</span>
            <br />
            <code className="text-blue-300">{"}"}</code>
          </div>
          <code className="text-purple-400">)</code>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground text-sm mb-2">Array Modifications ($push, $pull, $addToSet):</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-purple-400">db.users.updateOne(</code>
          <div className="pl-4">
            <code className="text-muted-foreground">{'{ name: "Ali" },'}</code>
            <br />
            <code className="text-blue-300">{"{ "}</code>
            <br />
            <code className="text-emerald-400 pl-4">{'$push: { hobbies: "Tennis" },'}</code>
            <span className="text-muted-foreground text-xs">{" // Add to array"}</span>
            <br />
            <code className="text-red-400 pl-4">{'$pull: { hobbies: "Golf" },'}</code>
            <span className="text-muted-foreground text-xs">{" // Remove from array"}</span>
            <br />
            <code className="text-yellow-400 pl-4">{'$addToSet: { skills: "JS" }'}</code>
            <span className="text-muted-foreground text-xs">{" // Add if not exists"}</span>
            <br />
            <code className="text-blue-300">{"}"}</code>
          </div>
          <code className="text-purple-400">)</code>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
        <h4 className="text-yellow-400 text-sm font-bold mb-1 flex items-center gap-2">⚠️ Caution</h4>
        <p className="text-xs text-muted-foreground">
          Always use update operators like <span className="font-mono text-red-400">$set</span>. If you pass a document
          without an operator, it might replace the entire document content!
        </p>
      </div>
    </div>
  )
}

function DeleteTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Deleting Documents</h3>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Delete specific document:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-red-400">{'db.users.deleteOne({ _id: ObjectId("...") })'}</code>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Delete multiple (based on condition):</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-red-400">{"db.users.deleteMany({ age: { $lt: 18 } })"}</code>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Delete all documents in collection:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-red-400">{"db.users.deleteMany({})"}</code>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-2">Drop entire collection:</p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code className="text-red-400">{"db.users.drop()"}</code>
        </div>
      </div>
    </div>
  )
}
