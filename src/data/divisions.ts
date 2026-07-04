export interface Division {
  id: string
  title: string
  description: string
  image: string
  cta: string
}

export const divisions: Division[] = [
  {
    id: 'biogas',
    title: 'Biodigesters & Biogas Power',
    description:
      'Our flagship offering, converting organic waste into biogas that fuels power plants for clean, dependable electricity for homes, farms, and industry.',
    image: '/images/projects/biodigester-construction-1.jpg',
    cta: 'Explore Biogas Power',
  },
  {
    id: 'agribusiness',
    title: 'Sustainable Agribusiness',
    description:
      'Snail farming, mushroom cultivation, natural honey production, and modern greenhouse agribusiness, building food security through sustainable practice.',
    image: '/images/placeholders/greenhouse-farm.jpg',
    cta: 'Explore Agribusiness',
  },
]
