import { Rocket, Leaf, HardHat, Cpu, Headset, PiggyBank } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Stat {
  label: string
  value: number
  suffix: string
  icon: LucideIcon
}

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: 100, suffix: '+', icon: Rocket },
  { label: 'Clean Energy Solutions', value: 25, suffix: '+', icon: Leaf },
  { label: 'Professional Engineers', value: 40, suffix: '+', icon: HardHat },
  { label: 'Sustainable Technologies', value: 15, suffix: '+', icon: Cpu },
  { label: 'Customer Support', value: 24, suffix: '/7', icon: Headset },
  { label: 'Average Cost Saving', value: 60, suffix: '%', icon: PiggyBank },
]
