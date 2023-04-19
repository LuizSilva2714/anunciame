import '../styles/App.css'
import HeaderContainer from '../components/HeaderContainer'
import MainSection from '../components/MainSection'
import EventDescription from '../components/EventDescription'
import BagageItens from '../components/BagageItens'
import Contact from '../components/Contact'

function Homepage(){
    return(
        <div className='home'>
            <HeaderContainer />
            <MainSection />
            <EventDescription />
            <BagageItens />
            <Contact />
        </div>
    )
}

export default Homepage;