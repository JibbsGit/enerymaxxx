export interface Project {
  title: string
  category: string
  location: string
  image: string
}

export const projects: Project[] = [
  { title: 'Commercial Biodigester Plant', category: 'Biodigester', location: 'Ogun State', image: '/images/projects/biodigester-construction-1.jpg' },
  { title: 'Twin 40m³ Anaerobic Digester Build', category: 'Biodigester', location: 'Ogun State', image: '/images/projects/biodigester-construction-2.jpg' },
  { title: 'Biogas Plant Engineering Design', category: 'Biodigester', location: 'Ogun State', image: '/images/projects/biodigester-engineering-plan.jpg' },
  { title: 'Biogas Powered Plant Setup', category: 'Biogas Power', location: 'Port Harcourt', image: '/images/projects/lpg-gas-plant.jpg' },
  { title: 'Commercial Snail Farm', category: 'Snail Farming', location: 'Benin City, Edo State', image: '/images/placeholders/snail-farm.jpg' },
  { title: 'Commercial Mushroom House', category: 'Mushroom Cultivation', location: 'Ibadan, Oyo State', image: '/images/placeholders/mushroom-cultivation.jpg' },
  { title: 'Modern Apiary & Honey Extraction', category: 'Natural Honey Production', location: 'Jos, Plateau State', image: '/images/placeholders/beekeeper-honey.jpg' },
  { title: 'Hybrid Solar & Storage System', category: 'Renewable Energy', location: 'Abuja', image: '/images/projects/hybrid-solar-storage.jpg' },
  { title: 'Rooftop Solar Array', category: 'Solar Installation', location: 'Lekki, Lagos', image: '/images/projects/rooftop-solar-array.jpg' },
  { title: 'Utility Scale Solar Farm', category: 'Solar Installation', location: 'Kaduna State', image: '/images/projects/utility-scale-solar-farm.jpg' },
]
