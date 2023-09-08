import React from 'react'

function contactus() {
  return (
    <>
        <div id='contactpage' className="relative md:top-0 top-96 py-5 px-6 max-w-7xl mx-auto justify-center h-screen relative items-center flex flex-col gap-y-12">
            <div className="text-center">
            <h1 className="text-gray-600 text-2xl">Have a question?</h1>
            <h2 className="text-5xl font-bold mt-2 text-gray-700">CONTACT US</h2>
            </div>
            <div className="flex flex-col gap-y-5 gap-x-5">
            <form>
                <input
                className="px-5 h-12 md:w-96 w-72 rounded border border-gray-200"
                type="text"
                name="question"
                id="question"
                placeholder="Type your question"
                />
            </form>
            <button
                className="h-12 md:w-96 w-44 bg-sky-400 hover:bg-white border font-bold  hover:border-sky-400 hover:text-sky-400 mx-auto items-center flex justify-center text-white rounded"
                href="#"
            >
                Send
            </button>
            </div>
            <div className="flex flex-col text-center">
            <h3 className="text-sm text-gray-400">
                By joining you as a KedaTech member, <br />
                we will always send you the latest updates via email
            </h3>
            </div>
        </div>
    </>

  )
}

export default contactus