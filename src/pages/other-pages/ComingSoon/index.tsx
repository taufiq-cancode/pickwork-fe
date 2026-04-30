import { useState } from 'react'
import { Alert, Button, Col, Container, FormControl, Row, Spinner } from 'react-bootstrap'
import Footer from './components/Footer'
import Topbar from './components/Topbar'

import PageTitle from '@/components/PageTitle'
import httpClient from '@/helpers/httpClient'

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await httpClient.post('https://api.pickwork.co/api/public/waitlist', { email })
      setMessage(response.data.message || 'Successfully joined the waitlist.')
      setEmail('')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to join waitlist. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageTitle title="Pickwork | Connecting you with trusted workers." />

      <Topbar />

      <main className="d-flex flex-column justify-content-center" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <section className="py-5 p-lg-0">
          <Container>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xl={8}>
                <h5 className="fw-bold mb-3" style={{ color: '#c44d00' }}>Launching soon</h5>
                <h1 className="h2 position-relative lh-base mb-4">Pickwork: Connecting you with trusted workers.</h1>
                <form className="mt-5" onSubmit={handleJoinWaitlist}>
                  <b className="mb-3 d-block">Join our waitlist to get notified when we launch</b>
                  {message && <Alert variant="success" className="mx-auto" style={{ maxWidth: '500px' }}>{message}</Alert>}
                  {error && <Alert variant="danger" className="mx-auto" style={{ maxWidth: '500px' }}>{error}</Alert>}
                  <Col md={8} className="mx-auto bg-light border rounded-2 p-2 mt-3">
                    <div className="input-group">
                      <FormControl
                        className="focus-shadow-none bg-light border-0 me-1"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        required
                      />
                      <Button variant='primary' type="submit" className="rounded-2 mb-0" disabled={loading}>
                        {loading ? <Spinner size="sm" animation="border" /> : 'Join Waitlist'}
                      </Button>
                    </div>
                  </Col>
                </form>

              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ComingSoon