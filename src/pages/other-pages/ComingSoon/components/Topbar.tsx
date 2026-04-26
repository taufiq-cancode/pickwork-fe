import LogoBox from '@/components/LogoBox'
import StickyHeader from '@/components/topbar/StickyHeader'
import { Container } from 'react-bootstrap'
import { socialMediaLinks } from '@/assets/data/footer-items'


const Topbar = () => {
  return (
    <StickyHeader>
      <nav className="navbar navbar-expand-xl">
        <Container>

          <LogoBox />

          <ul className="list-inline mb-0 ms-2">
            {socialMediaLinks.map((item, idx) => {
              const Icon = item.icon
              return (
                <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                  <a className="btn btn-xs btn-icon btn-light mb-0" href={item.link || '#'} target='_blank' rel='noreferrer'>
                    {Icon && <Icon />}
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </nav>
    </StickyHeader>
  )
}

export default Topbar