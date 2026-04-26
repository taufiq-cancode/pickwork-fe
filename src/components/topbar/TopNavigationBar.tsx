import { Suspense, type ReactNode } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button, Container, type ButtonProps } from 'react-bootstrap'

import LogoBox from '@/components/LogoBox'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import StickyHeader from '@/components/topbar/StickyHeader'
import useToggle from '@/hooks/useToggle'
import { buyLink } from '@/states/constants'

type TopNavigationBarProps = {
  containerFluid?: boolean
  showSignUp?: boolean
  showBuyNow?: boolean
  hideThemeToggler?: boolean
  darkButton?: { text: string, size?: ButtonProps['size'] }
  navClassName?: string
  children?: ReactNode,
}

const TopNavigationBar = ({ showSignUp, showBuyNow, navClassName, darkButton, containerFluid, children, ...props }: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200)

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>

          <LogoBox className='me-0' />

          <Suspense>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#how-it-works">How it works</a></li>
                <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              </ul>
            </div>
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">

            {showSignUp && <li className="nav-item me-2 d-none d-sm-block">
              <Link to="/auth/sign-up" className="btn btn-sm btn-light mb-0">
                <BsPersonCircle className="me-1" />
                Sign up
              </Link>
            </li>}

            {showBuyNow && <li className="nav-item d-none d-sm-block">
              <a href={buyLink} target='_blank' className="btn btn-sm btn-primary mb-0">Buy now!</a>
            </li>}

            {darkButton &&
              <li className="nav-item d-none d-sm-block ms-2">
                <Button variant='dark' size={darkButton.size} className="btn mb-0">{darkButton.text}</Button>
              </li>
            }

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>

          </ul>
        </Container>
      </nav>

    </StickyHeader>
  )
}

export default TopNavigationBar