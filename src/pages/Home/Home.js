
import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Banner } from '../../Components/Banner/Banner'
import { Skills } from '../../Components/Skills/Skills'
import { Projects } from '../../Components/Projects/Projects'
import { Contact } from '../../Components/Contacts/Contact'
import { Footer } from '../../Components/Footer'
function Home() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default Home;