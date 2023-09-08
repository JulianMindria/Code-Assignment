import React, {useState} from 'react'
import logo from '../../src/assets/zyro-image.svg'
import { HiOutlineBars3 } from "react-icons/hi2";
import wavingIcon from '../../src/assets/waving-icon.png'
import google from '../../src/assets/google.png'
import facebook from '../../src/assets/fb.png'
import eyeOpen from '../../src/assets/eye-open.png'
import eyeClosed from '../../src/assets/eye-closed.png'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [form, setForm] = useState({})

    const inputChange = (e) =>{
        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <>
       <input type="checkbox" id="my_modal_7" className="modal-toggle" />
       <div className="modal">
        <div className="modal-box">
        <div className='w-full h-full bg-white rounded-md md:rounded-2xl'>
                    <div className='flex flex-col px-10 md:px-24'>
                        <div className='flex items-center mt-8 lg:mt-10'>
                            <h1 className='inline font-semibold text-2xl md:text-4xl mb-6'>Welcome Back</h1>
                            <img className='inline hidden md:block h-10 md:h-16 w-10 md:w-16' src={wavingIcon} alt="wave-icon" />
                        </div>
                        <div className='mb-6'>
                            <span className='text-xl text-slate-400 leading-4'>Sign in with your data that you entered during your registration</span>
                        </div>
                        <div className='relative flex flex-col mb-4'>
                            <span className='text-lg font-medium mb-3'>Email</span>
                            <input className='rounded-md border-2 border-slate-300 bg-gray-100 placeholder:text-slate-400 placeholder:px-4' type="text" placeholder='Enter your email' name='email_user' onChange={inputChange} />
                        </div>
                        <div className='relative flex flex-col mb-5'>
                            <span className='text-lg font-medium mb-3'>Password</span>
                            <div className='relative w-full'>
                                <input className='w-full rounded-md border-2 border-slate-300 bg-gray-100 placeholder:text-slate-400 placeholder:px-4' type={toggle == false ? "password" : "text"} name='password_user' onChange={inputChange} placeholder='Enter your password' />
                                {
                                    (toggle === false) ? <img className='cursor-pointer absolute top-3 right-4 w-6 text-slate-500' src={eyeClosed} alt="eye-closed" onClick={handleToggle}/>
                                    : <img className='cursor-pointer absolute top-3 right-4 w-5 text-slate-500' src={eyeOpen} alt="eye-closed" onClick={handleToggle}/>
                                }
                            </div>
                        </div>
                        <div className='flex justify-end mb-10 md:mb-4'>
                            <span className='text-blue-600 font-medium'>Forgot your password</span>
                        </div>
                        <div className='w-full mb-4'>
                            <button className='btn bg-blue-600 text-white w-full hover:text-blue-600 capitalize'>Login</button>
                        </div>
                        <div className='flex justify-center items-center mb-4'>
                            <span className='font-medium text-slate-400'>Or</span>
                        </div>
                        <div className='flex justify-between md:mb-12 lg:mb-16'>
                            <button className='btn drop-shadow-lg w-2/5'>
                                <img className='h-5' src={google} alt="google-logo" />
                                <span className='hidden md:block text-slate-500 capitalize'>Google</span>
                            </button>
                            <button className='btn drop-shadow-lg w-2/5'>
                                <img className='h-6' src={facebook} alt="fb-logo" />
                                <span className='hidden md:block text-slate-500 capitalize'>Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
      <header className='flex mx-auto justify-between px-10 relative top-12 z-10'>
        <div className='flex items-center gap-x-6'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="308.983"
            height="308.214"
            className="animate-spin w-12 h-12"
            version="1.1"
            viewBox="0 0 308.983 308.214"
            >
            <g transform="translate(-47.518 -76.375)">
                <path
                fill="#f9f9f9"
                d="M200.25 384.358c-3.083-1.295.422-7.756 6.119-11.277 1.833-1.133 8.65-3.44 15.15-5.128 42.456-11.023 66.801-26.984 91.696-60.117 7.39-9.834 15.552-30.269 19.969-49.992 3.323-14.839 3.299-39.712-.053-54.844-3.527-15.92-6.796-25.357-13.163-38-7.372-14.638-10.397-18.79-23.239-31.904l-10.472-10.693-.529 29.549c-.57 31.852-1.318 37.257-6.343 45.834-2.925 4.992-9.255 9.955-18.32 14.363-12.999 6.322-23.875 7.401-37.627 3.734-4.366-1.164-8.536-2.176-9.268-2.25-1.082-.108-1.297 5.176-1.157 28.367.174 28.622.235 30.178 1.534 39.647.63 4.584.48 5.268-1.374 6.26-2.963 1.586-13.112 2.48-18.68 1.644l-4.733-.71.682-6.033c.6-5.298.361-6.69-1.957-11.429-2.984-6.097-8.302-10.722-12.298-10.693-5.51.041-18.458 8.215-21.237 13.408-2.062 3.852.947 9.45 12.165 22.632 5.93 6.968 11.966 14.844 13.413 17.503 7.603 13.969 1.743 37.422-11.85 47.43-7.92 5.83-11.706 6.7-26.178 6.015-24.615-1.165-36.907-8.476-59.133-35.174-3.205-3.85-6.323-7.519-6.929-8.153-.606-.634-3.25-5.36-5.876-10.5-2.626-5.14-6.06-11.767-7.63-14.726-4.805-9.056-9.662-25.284-13.054-43.621-2.905-15.705-3.173-41.166-.552-52.5 2.572-11.125 12.087-38.626 15.743-45.5 9.486-17.84 35.054-44.158 58.431-60.146 13.377-9.149 32.033-16.53 48.5-19.19 11.907-1.924 26.253-2.389 28.983-.94 4.871 2.586 5.228 10.281.617 13.303-1.303.853-5.233 2.022-8.734 2.597-30.076 4.94-59.33 15.935-76.734 28.838C95.812 137.028 84.1 155.229 72.988 189c-5.017 15.249-6.326 23.978-6.374 42.5-.045 17.752.647 22.854 5.02 37 9.426 30.497 37.003 68.28 57.076 78.201 6.762 3.342 8.558 3.799 14.933 3.799 6.914 0 7.414-.16 10.92-3.5 9.453-9.003 8.535-19.103-3.026-33.295-16.828-20.659-20.266-34.053-12.486-48.65 5.543-10.4 14.362-18.086 24.42-21.285 1.666-.53 8.429-1.257 15.029-1.616l12-.654.126-3c.07-1.65.469-17.015.887-34.144l.761-31.144 3.613-.474c1.987-.26 6.538-.195 10.113.144l6.5.618.534 7.5c.408 5.725 1.087 8.247 2.868 10.655 4.54 6.138 18.812 11.73 27.1 10.618 5.63-.755 12.782-5.702 16.683-11.54 5.51-8.243 6.734-16.688 5.903-40.703-1.148-33.184-1.388-48.15-.874-54.385l.483-5.856 3.03.606c13.357 2.672 49.356 31.403 60.78 48.51 12.854 19.247 23.965 51.361 26.98 77.985 3.24 28.6-9.222 76.017-27.054 102.939-6.221 9.391-18.79 21.597-33.423 32.455-24.542 18.212-45.318 26.634-75.51 30.611-11.681 1.54-18.387 2.036-19.75 1.463z"
                ></path>
            </g>
        </svg>
            <button className='xl:text-4xl text-2xl text-white font-bold'>HOME</button>
        </div>
        <div className='lg:flex hidden gap-x-16 items-center xl:text-4xl text-2xl'>
          <a href='#aboutpage' className='font-bold'>ABOUT</a>
          <a href='#pricingpage' className='font-bold'>PRICING</a>
          <a href='#contactpage' className='font-bold'>CONTACT</a>
          <label htmlFor="my_modal_7" className='w-44 h-12 border text-lg flex justify-center items-center rounded border-sky-400 hover:bg-sky-400 text-sky-400 hover:text-white'>LOGIN</label>
        </div>
        <div className="dropdown dropdown-end lg:hidden ">
            <label tabIndex={0} className="btn m-1 text-4xl"><HiOutlineBars3 /></label>
            <ul tabIndex={0} className="absolute dropdown-content z-[1] menu p-2 shadow bg-base-100 items-center text-lg font-bold text-gray-600 rounded-lg w-64">
                <li><a href='#aboutpage'>ABOUT</a></li>
                <hr />
                <li><a href='#pricingpage'>PRICING</a></li>
                <hr />
                <li><a href='#contactpage'>CONTACT</a></li>
                <hr />
                <li><a><label htmlFor="my_modal_7">LOGIN</label></a></li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar