import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  iconColor: string
  bgColor: string
  title: string
  subtitle?: string
}

export function SectionHeader({ icon: Icon, iconColor, bgColor, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`p-2 ${bgColor} rounded-lg shrink-0`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  )
}
