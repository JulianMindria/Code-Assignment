import React from 'react'

function pricing() {
  return (
    <>
        <section id='pricingpage' className='h-screen relative top-44'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center flex flex-col gap-y-4 text-lg text-gray-600 px-4'>
                    <h1 className='lg:text-4xl text-2xl font-bold text-sky-400'>Try Dunked free for 10 days<br /> Start your trial now, pick a plan later</h1>
                    <h2 className='text-gray-400'>No credit card required. No obligation. No risk</h2>
                </div>
                <button className='mt-8 w-56 h-12 border bg-black hover:bg-white hover:text-black border hover:border-black font-bold text-xl rounded-md items-center text-white'>GET STARTED</button>
            </div>
            <div className='gap-x-5 flex max-w-5xl items-center mx-auto overflow-x-auto px-5 py-5 mt-4'>
                <div className='w-[300px] h-[550px] p-6 border border-gray-400 rounded-lg flex-shrink-0'>
                    <div className='flex flex-col gap-y-2 items-center my-4'>
                        <h3 className='text-gray-600'>Tier 1</h3>
                        <h3 className='font-bold text-2xl'>Agency</h3>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h1 className='text-8xl'><span className='text-4xl relative bottom-12'>$</span>19<span className='text-4xl'>/mo</span></h1>
                        <h3 className='mt-2 text-gray-400 text-lg'>Billed as $228 per year</h3>
                    </div>
                    <hr />
                    <div className='my-4 flex flex-col gap-y-1'>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Incoming items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Outgoing items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Profit gains</span></h2>
                        <h2 className='text-black font-bold'>Sales Analysis</h2>
                        <h2 className='text-black font-bold'>24 Hour Support</h2>
                        <h2 className='text-black font-bold'>Export data to Excel</h2>
                        <h2 className='text-black font-bold'>AI Analysis</h2>
                    </div>
                </div>
                <div className='w-[300px] h-[550px] p-6 border border-gray-400 rounded-lg flex-shrink-0'>
                    <div className='flex flex-col gap-y-2 items-center my-4'>
                        <h3 className='text-gray-600'>Tier 2</h3>
                        <h3 className='font-bold text-2xl'>Professional</h3>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h1 className='text-8xl'><span className='text-4xl relative bottom-12'>$</span>8<span className='text-4xl'>/mo</span></h1>
                        <h3 className='mt-2 text-gray-400 text-lg'>Billed as $96 per year</h3>
                    </div>
                    <hr />
                    <div className='my-4 flex flex-col gap-y-1'>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Incoming items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Outgoing items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Profit gains</span></h2>
                        <h2 className='text-black font-bold'>Sales Analysis</h2>
                        <h2 className='text-black font-bold'>24 Hour Support</h2>
                    </div>
                </div>
                <div className='w-[300px] h-[550px] p-6 border border-gray-400 rounded-lg flex-shrink-0'>
                    <div className='flex flex-col gap-y-2 items-center my-4'>
                        <h3 className='text-gray-600'>Tier 3</h3>
                        <h3 className='font-bold text-2xl'>Basic</h3>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h1 className='text-8xl'><span className='text-4xl relative bottom-12'>$</span>7<span className='text-4xl'>/mo</span></h1>
                        <h3 className='mt-2 text-gray-400 text-lg'>Billed as $84 per year</h3>
                    </div>
                    <hr />
                    <div className='my-4 flex flex-col gap-y-1'>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Incoming items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Outgoing items</span></h2>
                        <h2 className='text-gray-400'>Looging <span className='text-black font-bold'>Profit gains</span></h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default pricing