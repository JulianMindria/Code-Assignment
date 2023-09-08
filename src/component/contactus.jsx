import React from 'react'
import Logo from '../../src/assets/zyro-image.svg';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function contactus() {
  return (
    <>
        <div id='contactpage' className="py-5 max-w-7xl mx-auto my-5 items-center flex flex-col gap-y-12">
            <div className="text-center">
            <h1 className="text-gray-600 text-2xl">Have a question?</h1>
            <h2 className="text-5xl font-bold text-gray-700">CONTACT US</h2>
            </div>
            <div className="flex md:flex-row flex-col gap-y-5 gap-x-5">
            <form>
                <input
                className="px-5 h-12 w-96 rounded border border-gray-200"
                type="text"
                name="question"
                id="question"
                placeholder="Type your question"
                />
            </form>
            <button
                className="h-12 md:w-32 w-96 bg-sky-400 hover:bg-white border font-bold  hover:border-sky-400 hover:text-sky-400 mx-auto items-center flex justify-center text-white rounded"
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