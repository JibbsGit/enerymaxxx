import { MessageSquare, Search, PenTool, HardHat, ClipboardCheck, Wrench, LifeBuoy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Consultation', description: 'We learn about your energy needs and goals.', icon: MessageSquare },
  { step: 2, title: 'Site Inspection', description: 'Our engineers assess your site for the best solution.', icon: Search },
  { step: 3, title: 'Design', description: 'We design a system tailored to your requirements.', icon: PenTool },
  { step: 4, title: 'Installation', description: 'Certified technicians install with precision and care.', icon: HardHat },
  { step: 5, title: 'Testing', description: 'Every system is rigorously tested before handover.', icon: ClipboardCheck },
  { step: 6, title: 'Maintenance', description: 'Scheduled servicing and proactive checks keep your system running at peak performance.', icon: Wrench },
  { step: 7, title: 'Support', description: 'Ongoing customer support and warranty coverage for lasting peace of mind.', icon: LifeBuoy },
]
