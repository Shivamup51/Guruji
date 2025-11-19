import type { LucideIcon } from "lucide-react"

export interface HomeSectionProps {
  badgeText: string
  title: string
  descriptions: string[]
  primaryButtonText?: string
  primaryButtonAction?: () => void
  secondaryButtonText?: string
  secondaryButtonAction?: () => void
  secondaryButtonIcon?: LucideIcon
  imageSrc: string
  imageAlt: string
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface IntroSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  descriptions: string[]
  cardTitle?: string
  cardContent?: string
  imagePosition?: "left" | "right"
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface TypeItem {
  name: string
  description: string
  image: string
  icon?: string
}

export interface TypesSectionProps {
  title: string
  subtitle: string
  types: TypeItem[]
  footerText?: string
  autoRotateInterval?: number
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface Effect {
  icon: LucideIcon
  title: string
  items: string[]
}

export interface EffectsSectionProps {
  title: string
  subtitle: string
  effects: Effect[]
  footerCardText?: string
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface WhyChooseSectionProps {
  title: string
  subtitle: string
  description?: string
  items: WhyChooseItem[]
  bottomImageSrc?: string
  bottomImageAlt?: string
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export interface TestimonialsSectionProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export interface MarqueeSectionProps {
  items: string[]
  icon?: LucideIcon
  subtitle?: string
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

