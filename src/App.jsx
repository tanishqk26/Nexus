import React from 'react'
import Navbar from './compnents/navbar'
import Hero from './compnents/Hero'
import Trustedby from './compnents/Trustedby'
import Services from './compnents/Services'
import OurWork from './compnents/OurWork'
import Teams from './compnents/Teams'
import ContactUs from './compnents/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './compnents/footer'

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Trustedby/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
