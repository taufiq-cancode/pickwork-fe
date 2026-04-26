import { quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import LogoBox from '@/components/LogoBox'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LinksAround = () => {
  return (
    <Row className="g-4 justify-content-between">
      <Col lg={5}>

        <LogoBox imageClassName='h-40px' />

        <ul className="list-inline mb-0 mt-4">

          {socialMediaLinks.map((item, idx) => {
            const Icon = item.icon
            return (
              <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                <Link className="btn btn-xs btn-icon btn-light" to="">
                  <Icon />
                </Link>
              </li>
            )
          })}

        </ul>
      </Col>
      <Col lg={6} xxl={4}>
        <Row className="g-4">
          <Col xs={6}>
            <ul className="nav flex-column">

              {quickLinks.map((item, idx) => (
                <li key={(item.link ?? '') + idx} className="nav-item">
                  <Link className="nav-link" to={item.link ?? ''}>
                    {item.name}
                    {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                  </Link>
                </li>
              ))}

            </ul>
          </Col>
          <Col xs={6}>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default LinksAround