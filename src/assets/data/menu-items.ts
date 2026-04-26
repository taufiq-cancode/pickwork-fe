import type { MenuItemType } from '@/types/menu'
import { BsBell, BsPerson, BsShieldLock, BsTrash } from 'react-icons/bs'

export const ACCOUNT_VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'account-profile',
    label: 'My Profile',
    url: '/account/profile',
    parentKey: 'pages-account',
    icon: BsPerson,
  },
  {
    key: 'account-security',
    label: 'Security',
    url: '/account/security',
    parentKey: 'pages-account',
    icon: BsShieldLock,
  },
  {
    key: 'account-notifications',
    label: 'Notifications',
    url: '/account/notifications',
    parentKey: 'pages-account',
    icon: BsBell,
  },
  {
    key: 'account-delete-profile',
    label: 'Delete Profile',
    url: '/account/delete-profile',
    parentKey: 'pages-account',
    icon: BsTrash,
  },
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/#home',
  },
  {
    key: 'about',
    label: 'About',
    url: '/#about',
  },
  {
    key: 'how-it-works',
    label: 'How it Works',
    url: '/#how-it-works',
  },
  {
    key: 'features',
    label: 'Features',
    url: '/#features',
  },
  {
    key: 'testimonials',
    label: 'Testimonials',
    url: '/#testimonials',
  },
]
