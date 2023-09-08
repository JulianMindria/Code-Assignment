import React from "react";
import image from '../../src/assets/7053246.jpg'

const About = () => {
  return (
    <>
        <section id='aboutpage'  className="h-screen mt-16 pt-44 w-full px-12 mx-2 flex mx-auto items-center pt-12 lg:justify-around justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold md:text-8xl text-6xl text-sky-400 text-center w-full">ABOUT US</h1>
            <p className="w-96 text-gray-400 h-auto mt-12 text-lg text-center px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quam, at amet veniam voluptates iste facere dicta libero possimus molestiae aspernatur reiciendis modi pariatur commodi nemo! Fugit aspernatur error impedit!
            Doloremque incidunt cupiditate, aliquam alias optio tenetur eos quod vitae, doloribus repellat omnis ea numquam, veniam recusandae!</p>
            <button className="text-white mt-24 items-center hover:text-indigo-400 hover:bg-white hover:border-indigo-400 rounded-lg font-bold text-lg bg-indigo-400 border border-white w-72 h-24">MORE ABOUT COMPANY</button>
          </div>
          <div>
            <img className="md:flex hidden w-[700px]" src={image} alt="" />
          </div>
        </section>
    </>
  );
};

export default About;