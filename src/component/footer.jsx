import React from 'react'
import fb from '../../src/assets/eva_facebook-outline.jpg'
import yt from '../../src/assets/feather_youtube.jpg'
import tw from '../../src/assets/eva_twitter-outline.jpg'
import ig from '../../src/assets/bx_bxl-instagram.jpg'

function footer() {
  return (
    <>
  <footer className="mx-auto flex flex-col md:flex-row max-w-7xl justify-between px-10 py-20 gap-y-16 md:gap-x-2">
    <div>
      <h1 className='font-bold text-gray-700 text-lg'>KEDA TECH</h1>
      <p className="font-medium text-gray-700 mt-2 leading-8 tracking-wider">
        Lorem ipsum dolor sit amet consectetur <br />
        Lorem ipsum dolor sit, amet.
      </p>
    </div>
    <div className="flex flex-col gap-y-6">
      <h1 className="text-base font-bold leading-5">Explore</h1>
      <div className="flex flex-row md:flex-col gap-x-12 gap-y-2">
        <h2 className="text-gray-800">Home</h2>
        <h2 className="text-gray-800">List Product</h2>
      </div>
    </div>
    <div className="flex flex-col gap-y-5">
      <h1 className="text-base font-bold leading-5">Our Sponsor</h1>
      <h2>Keda Tech</h2>
    </div>
    <div className="flex flex-col gap-y-7">
      <h1 className="text-base font-bold leading-5">Follow Us</h1>
      <div className="flex gap-x-6">
        <div className="flex flex-row md:flex-col gap-x-12 gap-y-4">
          <img
            className="w-8 md:w-6 h-auto"
            src={fb}
            alt=""
          />
          <img
            className="w-8 md:w-6 h-auto"
            src={ig}
            alt=""
          />
          <img
            className="w-8 md:w-6 h-auto"
            src={tw}
            alt=""
          />
          <img
            className="w-8 md:w-6 h-auto"
            src={yt}
            alt=""
          />
        </div>
        <div className="hidden md:flex flex-col gap-y-4">
          <p>KedaTech</p>
          <p>KedaTech.id</p>
          <p>Keda.id</p>
          <p>KD.id</p>
        </div>
      </div>
    </div>
  </footer>
  <p className="md:text-center font-sm text-gray-800 leading-8 tracking-wider px-5 py-10">
    © 2020 KedaTech. All Rights Reserved
  </p>
</>
  )
}

export default footer