import React from "react";
import image from '../../src/assets/7053246.jpg'

const About = () => {
  return (
    <>
        <section id='aboutpage'  className="h-screen px-12 flex mx-auto items-center my-24 justify-around">
          <div className="">
            <h1 className="font-bold text-8xl text-sky-400">ABOUT US</h1>
            <p className="w-96 text-gray-400 h-auto mt-12 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quam, at amet veniam voluptates iste facere dicta libero possimus molestiae aspernatur reiciendis modi pariatur commodi nemo! Fugit aspernatur error impedit!
            Doloremque incidunt cupiditate, aliquam alias optio tenetur eos quod vitae, doloribus repellat omnis ea numquam, veniam recusandae!</p>
            <button className="text-white mt-24 hover:text-indigo-400 hover:bg-white hover:border-indigo-400 rounded-lg font-bold text-lg bg-indigo-400 border border-white w-72 h-24">MORE ABOUT COMPANY</button>
          </div>
          <div>
            <img className="md:flex hidden w-[700px]" src={image} alt="" />
          </div>
        </section>
    </>
  );
};

export default About;