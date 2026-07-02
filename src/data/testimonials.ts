export interface Testimonial {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Facility Manager, Lagos',
    quote:
      'EnergyMaxx transformed our energy costs with a hybrid solar system. Installation was fast, professional, and the support since has been outstanding.',
  },
  {
    name: 'Chinedu Umeh',
    role: 'Farm Owner, Ogun State',
    quote:
      'Our commercial biodigester now powers the entire farm while turning waste into a genuine asset. Best investment we have made in years.',
  },
  {
    name: 'Grace Adeyemi',
    role: 'Operations Director, Abuja',
    quote:
      'The clean gas plant EnergyMaxx installed for our facility is efficient, safe, and has drastically cut our operating expenses.',
  },
  {
    name: 'Tunde Bakare',
    role: 'Estate Developer, Port Harcourt',
    quote:
      'From consultation to support, the EnergyMaxx team was professional at every step. Our residents now enjoy reliable, sustainable power.',
  },
]
