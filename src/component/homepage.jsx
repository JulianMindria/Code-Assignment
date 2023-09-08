import React from 'react'
import images from '../../src/assets/undraw_metrics_gtu7.png'
import zyro_image from '../../src/assets/Screenshot from 2023-09-07 21-36-08.png'
import images2 from '../../src/assets/new1.png'

function homepage() {
  return (
    <>
        <section className='h-screen'>
            <div className='flex justify-between items-center'>
                <div className='absolute lg:flex hidden top-96 right-0'>
                    <img className='xl:w-[900px] w-[600px]' src={images2} alt="" />
                </div>
                <img src={zyro_image} className='absolute top-0' alt="" />
            </div>
            <div className='flex relative xl:flex-row flex-col md:top-96 top-56 justify-around'>
                <div className='flex relative flex-col mx-16 gap-y-4'>
                        <h2 className='text-lg flex xl:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem rerum, <br />dolorem laborum veniam inventore exercitationem repellendus nihil tempore harum.</h2>
                        <h2 className='text-2xl'><i>"Lorem ipsum, dolor sit amet consectetur adipisicing elit"</i></h2>
                        <img src={images} className='bottom-16 lg:w-96 w-[500px] h-auto xl:mt-24 mt-16' alt="" />
                </div>
                <h2 className='text-center text-lg relative bottom-44 right-32 xl:flex hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem rerum, <br />dolorem laborum veniam inventore exercitationem repellendus nihil tempore harum.</h2>
            </div>
        </section>
    </>
  )
}

export default homepage