import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Nav/>  
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </>
  )
}

export default App