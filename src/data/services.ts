import { Sun, Battery, Zap, Users2, Sprout, Building2, Recycle, Factory, Flame, UtensilsCrossed, Warehouse, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  label: string
  icon: LucideIcon
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  accent: string
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Harnessing solar and hybrid technology to power homes, businesses, and communities.',
    accent: 'from-emerald to-deep-green',
    items: [
      { label: 'Solar Energy Systems', icon: Sun },
      { label: 'Energy Storage', icon: Battery },
      { label: 'Hybrid Energy Systems', icon: Zap },
      { label: 'Energy Consultation', icon: Users2 },
    ],
  },
  {
    id: 'biodigesters',
    title: 'Biodigesters',
    description: 'Converting organic waste into clean, renewable energy for homes and industry.',
    accent: 'from-deep-green to-emerald',
    items: [
      { label: 'Domestic Biodigesters', icon: Sprout },
      { label: 'Commercial Biodigesters', icon: Building2 },
      { label: 'Organic Waste Conversion', icon: Recycle },
      { label: 'Waste-to-Energy Systems', icon: Factory },
    ],
  },
  {
    id: 'clean-gas-plants',
    title: 'Clean Gas Plants',
    description: 'Reliable, efficient gas infrastructure built for safety and sustainability.',
    accent: 'from-gold to-emerald',
    items: [
      { label: 'LPG Gas Plants', icon: Flame },
      { label: 'Clean Cooking Solutions', icon: UtensilsCrossed },
      { label: 'Gas Storage Systems', icon: Warehouse },
      { label: 'Installation & Maintenance', icon: Wrench },
    ],
  },
]
