import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/MobileApp/components/Hero"
import About from "@/pages/demos/MobileApp/components/About"
import Steps from "@/pages/demos/MobileApp/components/Steps"
import Features from "@/pages/demos/MobileApp/components/Features"
import CTA from "@/pages/demos/MobileApp/components/CTA"
import Footer7 from '@/components/footer/Footer7'
import PageTitle from '@/components/PageTitle'

const MobileApp = () => {
  return (
    <>
      <PageTitle title='Pickwork | Connecting you with trusted workers.' />

      <TopNavigationBar
        showSignUp
      />
      <main>
        <Hero />
        <About />
        <Steps />
        <Features />
        <CTA />
      </main>
      <Footer7 />
    </>
  )
}

export default MobileApp