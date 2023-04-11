import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import HeaderContainer from './components/HeaderContainer'
import MainSection from './components/MainSection'
import EventDescription from './components/EventDescription'
import BagageItens from './components/BagageItens'
import Contact from './components/Contact'

function App() {

  return (
    <div className="home">
      <HeaderContainer />
      <MainSection />
      <EventDescription />
      <BagageItens />
      <Contact />
    </div>
  )
}

export default App
