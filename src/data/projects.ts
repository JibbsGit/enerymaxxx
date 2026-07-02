export interface Project {
  title: string
  category: string
  image: string
}

export const projects: Project[] = [
  { title: 'Rooftop Solar Array', category: 'Solar Installation', image: 'https://picsum.photos/seed/energymaxx-solar1/800/600' },
  { title: 'Commercial Biodigester Plant', category: 'Biodigester', image: 'https://picsum.photos/seed/energymaxx-biodigester1/800/600' },
  { title: 'Industrial LPG Gas Plant', category: 'Gas Plant', image: 'https://picsum.photos/seed/energymaxx-gasplant1/800/600' },
  { title: 'Hybrid Solar & Storage System', category: 'Renewable Energy', image: 'https://picsum.photos/seed/energymaxx-hybrid1/800/600' },
  { title: 'Community Waste-to-Energy Site', category: 'Biodigester', image: 'https://picsum.photos/seed/energymaxx-biodigester2/800/600' },
  { title: 'Utility-Scale Solar Farm', category: 'Solar Installation', image: 'https://picsum.photos/seed/energymaxx-solar2/800/600' },
]
