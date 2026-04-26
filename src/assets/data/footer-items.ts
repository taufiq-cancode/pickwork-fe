import type { IconType } from 'react-icons'
import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: IconType
}

type SocialMediaLink = {
  icon: IconType
  iconClassName: string
  link?: string
}

type ContactType = {
  title: string
  icon: IconType
  description: string
}

export const quickLinks: FooterLinkType[] = [
  {
    name: "About us",
    link: "/#about",
  },
  {
    name: "Contact us",
    link: "/#how-it-works",
  },
  {
    name: "Sign in",
    link: "/auth/sign-in",
  },
  {
    name: "Sign up",
    link: "/auth/sign-up",
  }
]

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: FaInstagram, iconClassName: "bg-instagram", link: "https://www.instagram.com/pickwork.co" },
  // { icon: FaFacebookF, iconClassName: "bg-facebook", link: "https://www.facebook.com/pickwork.ng" },
  { icon: FaTiktok, iconClassName: "bg-tiktok", link: "https://www.tiktok.com/@pickwork.co" },
  { icon: FaXTwitter, iconClassName: "bg-twitter", link: "https://x.com/pickworkdotco" },
  // { icon: FaWhatsapp, iconClassName: "bg-whatsapp", link: "https://wa.me/2348144211111" }
]

export const contactDetail = {
  address: "55/123 Norman street, Banking road.",
  contact: "(251) 854-6308",
  email: "help@example.com",
  weekDays: "Mon - Fri: 09:00 - 21:00",
  weekEnds: "Sat - Sun: Closed"
}

export const contactDetails2: ContactType[] = [
  {
    title: 'Give us a call',
    icon: BsTelephone,
    description: contactDetail.contact
  },
  {
    title: 'Send us an email',
    icon: BsEnvelope,
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: BsGeoAlt,
    description: contactDetail.address
  }
]

// Dummy exports to fix broken components
export const communityLinks: any[] = []
export const communityLinks2: any[] = []
export const quickLinks2: any[] = []
export const quickLinks4: any[] = []
export const translationLanguages: any[] = [
  {
    name: 'English',
    flag: '',
  }
]