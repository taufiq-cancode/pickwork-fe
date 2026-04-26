import Footer7 from '@/components/footer/Footer7'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import TeamMembers from './components/TeamMembers'
import Achievements from './components/Achievements'
import PageTitle from '@/components/PageTitle'

const Team = () => {
  return (
    <>
      <PageTitle title='Team' />

      <TopNavigationBar
        showSignUp
      />
      <main>
        <Hero />

        <TeamMembers />

        <Achievements />
      </main>

      <Footer7 />
    </>
  )
}

export default Team