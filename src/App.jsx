import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Myservices from './components/Myservices'
import Mywork from './components/Mywork'
import Contact from './components/contact'

const Technologies={FullStack:'Python/Django',Backend:'Backend'}

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Myservices />
      <Mywork />
      <Contact/>
      hello
    </div>
  )
}

export default App
