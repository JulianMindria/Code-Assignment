import React from 'react'
import Navbar from '../../component/navbar'
import Homepage from '../../component/homepage'
import About from '../../component/about'
import Pricing from '../../component/pricing'
import Contacts from '../../component/contactus'
import Footer from '../../component/footer'

function index() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Homepage />
        <About />
        <Pricing />
        <Contacts />
        <Footer />
      </div>
    </>
  )
}

export default index