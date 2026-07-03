export interface Division {
  id: string
  title: string
  description: string
  image: string
  cta: string
}

export const divisions: Division[] = [
  {
    id: 'energy',
    title: 'Renewable Energy & Clean Gas',
    description:
      'Solar power, battery storage, biodigesters, and clean gas plants engineered to cut costs and emissions for homes, businesses, and communities.',
    image: '/images/projects/utility-scale-solar-farm.jpg',
    cta: 'Explore Energy Solutions',
  },
  {
    id: 'agribusiness',
    title: 'Sustainable Agribusiness',
    description:
      'Mushroom cultivation, snail farming, honey production, and modern greenhouse agribusiness — building food security through sustainable practice.',
    image: '/images/placeholders/greenhouse-farm.jpg',
    cta: 'Explore Agribusiness',
  },
]
