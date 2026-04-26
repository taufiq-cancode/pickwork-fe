import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'

// Demo Pages
const MobileApp = lazy(() => import('@/pages/demos/MobileApp'))

// Account Pages
const AccountProfile = lazy(() => import('@/pages/account/Profile'))
const AccountSecurity = lazy(() => import('@/pages/account/Security'))
const AccountNotifications = lazy(() => import('@/pages/account/Notifications'))
const AccountDeleteProfile = lazy(() => import('@/pages/account/DeleteProfile'))

// Auth Pages
const AuthSignIn = lazy(() => import('@/pages/auth/SignIn'))
const AuthSignUp = lazy(() => import('@/pages/auth/SignUp'))
const AuthForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))

// Other Pages
const ComingSoon = lazy(() => import('@/pages/other-pages/ComingSoon'))
const NotFound = lazy(() => import('@/pages/other-pages/NotFound'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}


export const accountRoutes: RoutesProps[] = [
  {
    path: '/account/profile',
    name: 'account.profile',
    element: <AccountProfile />
  },
  {
    name: 'account-security',
    path: '/account/security',
    element: <AccountSecurity />,
  },
  {
    name: 'account-notifications',
    path: '/account/notifications',
    element: <AccountNotifications />,
  },
  {
    name: 'account-delete-profile',
    path: '/account/delete-profile',
    element: <AccountDeleteProfile />,
  },
]

export const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    element: <AuthSignIn />
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    element: <AuthSignUp />
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    element: <AuthForgotPassword />
  },
]

const initialRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <ComingSoon />,
  },

  {
    path: '*',
    name: 'all-routes',
    element: <NotFound />,
  },
]

const demoRoutes: RoutesProps[] = [
  {
    path: '/demos/mobile-app',
    name: 'demo-mobile-app',
    element: <MobileApp />,
  },
]

export const appRoutes = [
  ...initialRoutes,
  ...demoRoutes,
]
