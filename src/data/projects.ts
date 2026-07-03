export interface Project {
  title: string
  category: string
  image: string
}

export const projects: Project[] = [
  { title: 'Rooftop Solar Array', category: 'Solar Installation', image: '/images/projects/rooftop-solar-array.jpg' },
  { title: 'Commercial Biodigester Plant', category: 'Biodigester', image: '/images/projects/biodigester-construction-1.jpg' },
  { title: 'Twin 40m³ Anaerobic Digester Build', category: 'Biodigester', image: '/images/projects/biodigester-construction-2.jpg' },
  { title: 'Industrial LPG Gas Plant', category: 'Gas Plant', image: '/images/projects/lpg-gas-plant.jpg' },
  { title: 'Hybrid Solar & Storage System', category: 'Renewable Energy', image: '/images/projects/hybrid-solar-storage.jpg' },
  { title: 'Biogas Plant Engineering Design', category: 'Biodigester', image: '/images/projects/biodigester-engineering-plan.jpg' },
  { title: 'Utility-Scale Solar Farm', category: 'Solar Installation', image: '/images/projects/utility-scale-solar-farm.jpg' },
]
