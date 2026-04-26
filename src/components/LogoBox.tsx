import { NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/pickwork/logo.png'
import logoWhite from '@/assets/images/pickwork/logo-white.png'
import logoSmall from '@/assets/images/pickwork/logo-icon.png'
import logoIconWhite from '@/assets/images/pickwork/logo-icon-white.png'

type LogoBoxProps = {
    className?: string
    smallIcon?: boolean
    imageClassName?: string
    useWhite?: boolean
}

const LogoBox = ({ className, smallIcon, imageClassName, useWhite }: LogoBoxProps) => {
    return smallIcon ? (
        <img src={useWhite ? logoIconWhite : logoSmall} className={className ?? ''} alt="logo" />
    ) : (
        <NavbarBrand as={Link} className={className ?? ''} to="/">
            <img className={`navbar-brand-item ${imageClassName ?? ''} `} src={useWhite ? logoWhite : logo} alt="logo" />
        </NavbarBrand>
    )
}

export default LogoBox