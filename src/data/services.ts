export interface ServiceItem {
  id: string
  title: string
  division: string
  description: string
  image: string
  images?: string[]
}

export const serviceDivisions = [
  'Biodigesters & Biogas Power',
  'Snail Farming',
  'Mushroom Cultivation',
  'Natural Honey Production',
  'Agribusiness',
  'Renewable Energy',
  'Training & Capacity Building',
]

export const services: ServiceItem[] = [
  {
    id: 'biodigesters',
    title: 'Biodigesters',
    division: 'Biodigesters & Biogas Power',
    description: 'Our flagship offering, converting organic waste into clean biogas for homes, farms, and industry.',
    image: '/images/projects/biodigester-construction-1.jpg',
  },
  {
    id: 'biogas-generators',
    title: 'Biogas Power Plants',
    division: 'Biodigesters & Biogas Power',
    description: 'Biogas fueled power plants that turn digester output into dependable, low cost electricity.',
    image: '/images/gallery/gas-cylinder-generator.jpg',
  },
  {
    id: 'snail-farming',
    title: 'Snail Farming',
    division: 'Snail Farming',
    description: 'Commercial heliciculture with modern breeding and growing enclosures for sustainable protein production.',
    image: '/images/placeholders/snail-farm.jpg',
  },
  {
    id: 'mushroom-cultivation',
    title: 'Mushroom Cultivation',
    division: 'Mushroom Cultivation',
    description: 'Controlled environment mushroom houses delivering high yield, sustainable harvests all year round.',
    image: '/images/placeholders/mushroom-cultivation.jpg',
  },
  {
    id: 'honey-production',
    title: 'Natural Honey Production',
    division: 'Natural Honey Production',
    description: 'Modern apiary management and honey extraction that supports pollinator health and pure yields.',
    image: '/images/placeholders/beekeeper-honey.jpg',
  },
  {
    id: 'agribusiness',
    title: 'Agribusiness',
    division: 'Agribusiness',
    description: 'Irrigation systems, greenhouses, and modern farming technology for small, medium, and large scale farms.',
    image: '/images/placeholders/greenhouse-farm.jpg',
  },
  {
    id: 'solar-systems',
    title: 'Solar Systems',
    division: 'Renewable Energy',
    description: 'Rooftop and utility scale solar installations engineered for maximum yield and long term reliability.',
    image: '/images/projects/rooftop-solar-array.jpg',
  },
  {
    id: 'battery-storage',
    title: 'Battery Storage',
    division: 'Renewable Energy',
    description: 'Hybrid battery systems that keep power flowing around the clock, even off the grid.',
    image: '/images/projects/hybrid-solar-storage.jpg',
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    division: 'Training & Capacity Building',
    description: 'Hands-on training in clean energy and modern agricultural technology, building lasting in-house expertise.',
    image: '/images/training/biodigester-training-session.jpg',
    images: [
      '/images/training/biodigester-training-session.jpg',
      '/images/training/snail-farming-training.jpg',
    ],
  },
]
