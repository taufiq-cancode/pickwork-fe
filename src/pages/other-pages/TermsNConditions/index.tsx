import Footer7 from '@/components/footer/Footer7'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const TermsNConditions = () => {
  return (
    <>
      <PageTitle title='Terms & Conditions' />

      <TopNavigationBar
        showSignUp
      />
      <main>
        <Details />

        <CTA />
      </main>

      <Footer7 />
    </>
  )
}

export default TermsNConditions