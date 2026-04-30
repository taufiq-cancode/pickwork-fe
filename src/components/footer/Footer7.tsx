import { socialMediaLinks } from '@/assets/data/footer-items'
import LogoBox from '../LogoBox'
import { currentYear } from '@/states/constants'
import { Col, Container, Row } from 'react-bootstrap'

const Footer7 = () => {
  return (
    <footer>
      <Container>
        <div className="bg-dark rounded position-relative p-4 p-sm-6 mb-3 mb-sm-5" data-bs-theme="dark">
          <Row className="mx-auto">
            <Col lg={8} className="mx-auto text-center px-0">

              <LogoBox className='h-50px' useWhite smallIcon />

              <ul className="list-inline mb-0 mt-4">
                {socialMediaLinks.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                      <a className="btn btn-xs btn-icon btn-light" href={item.link || '#'} target='_blank' rel='noreferrer'>
                        <Icon />
                      </a>
                    </li>
                  )
                })}
              </ul>

              <div className="text-body mt-4"> Copyrights ©{currentYear} Pickwork. All rights reserved. </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer7