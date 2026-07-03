export interface ServiceItem {
  id: string
  title: string
  division: string
  description: string
  image: string
}

export const serviceDivisions = [
  'Renewable Energy',
  'Biodigesters',
  'Clean Gas Plants',
  'Snail Farming',
  'Mushroom Cultivation',
  'Honey Production',
  'Agribusiness',
]

export const services: ServiceItem[] = [
  {
    id: 'solar-systems',
    title: 'Solar Systems',
    division: 'Renewable Energy',
    description: 'Rooftop and utility-scale solar installations engineered for maximum yield and long-term reliability.',
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
    id: 'biodigesters',
    title: 'Biodigesters',
    division: 'Biodigesters',
    description: 'Converting organic waste into clean, renewable biogas for homes, farms, and industry.',
    image: '/images/projects/biodigester-construction-1.jpg',
  },
  {
    id: 'clean-gas-plants',
    title: 'Clean Gas Plants',
    division: 'Clean Gas Plants',
    description: 'Safe, efficient LPG infrastructure and clean cooking solutions built for scale.',
    image: '/images/projects/lpg-gas-plant.jpg',
  },
  {
    id: 'snail-farming',
    title: 'Snail Farming',
    division: 'Snail Farming',
    description: 'Commercial heliciculture with modern breeding and grow-out enclosures for sustainable protein production.',
    image: '/images/placeholders/snail-farm.jpg',
  },
  {
    id: 'mushroom-cultivation',
    title: 'Mushroom Cultivation',
    division: 'Mushroom Cultivation',
    description: 'Controlled-environment mushroom houses delivering high-yield, sustainable harvests year-round.',
    image: '/images/placeholders/mushroom-cultivation.jpg',
  },
  {
    id: 'honey-production',
    title: 'Honey Production',
    division: 'Honey Production',
    description: 'Modern apiary management and honey extraction that supports pollinator health and pure yields.',
    image: '/images/placeholders/beekeeper-honey.jpg',
  },
  {
    id: 'agribusiness',
    title: 'Agribusiness',
    division: 'Agribusiness',
    description: 'Irrigation systems, greenhouses, and modern farming technology for smallholder and commercial farms.',
    image: '/images/placeholders/greenhouse-farm.jpg',
  },
]
