import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/other-pages/FAQs/components/Hero"
import FAQs from "@/pages/other-pages/FAQs/components/FAQs"
import ActionBox from "@/pages/other-pages/FAQs/components/ActionBox"
import Footer7 from '@/components/footer/Footer7'
import PageTitle from '@/components/PageTitle'

const FAQPage = () => {
  return (
    <>
      <PageTitle title='FAQs' />

      <TopNavigationBar
        showSignUp
      />
      <main>
        <Hero />
        <FAQs />
        <ActionBox />
      </main>

      <Footer7 />
    </>
  )
}

export default FAQPage