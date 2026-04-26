import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/other-pages/Pricing/components/Hero"
import Features from "@/pages/other-pages/Pricing/components/Features"
import CTA from "@/pages/other-pages/Pricing/components/CTA"
import FAQs from "@/pages/other-pages/Pricing/components/FAQs"
import Footer7 from '@/components/footer/Footer7'
import PageTitle from '@/components/PageTitle'

const Pricing = () => {
  return (
    <>
      <PageTitle title='Pricing' />

      <TopNavigationBar
        showSignUp
      />

      <main className="price-wrap">
        <Hero />
        <Features />
        <CTA />
        <FAQs />
      </main>

      <Footer7 />
    </>
  )
}

export default Pricing