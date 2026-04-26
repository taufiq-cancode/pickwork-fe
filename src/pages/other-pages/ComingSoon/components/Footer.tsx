import { currentYear, developedBy, developedByLink } from '@/states/constants'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container className="mb-4 mb-md-2">
        <div className="d-md-flex justify-content-center align-items-center text-center">
          <div className="mb-3 mb-md-0"> Copyrights ©{currentYear} Pickwork. All rights reserved. </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer