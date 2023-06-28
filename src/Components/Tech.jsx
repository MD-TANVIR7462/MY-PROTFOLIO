import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,

} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss3
} from "react-icons/si";




const Tech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='grid md:grid-cols-5 gap-5 pt-14'>
      {/* <div className='w-52  h-44 text-white border text-[70px] shadow-lg  flex items-center flex-col justify-center  shadow-purple-800 border-[#cd5df3]' style={}> */}
      <div className='w-52 h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3] hover:scale-105 transition-shadow' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
        transition: 'transform 0.3s ease',
      }}>
        <SiHtml5></SiHtml5> <p className='text-xl pt-4'>HTML</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiCss3></SiCss3> <p className='text-xl pt-4'>CSS</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <DiJavascript1></DiJavascript1> <p className='text-xl pt-4'>Javascript</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <DiReact></DiReact> <p className='text-xl pt-4'>React</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <DiNodejs></DiNodejs> <p className='text-xl pt-4'>Node js</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiTailwindcss></SiTailwindcss> <p className='text-xl pt-4'>Tailwindcss</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiMongodb></SiMongodb> <p className='text-xl pt-4'>SiMongodb</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiExpress></SiExpress> <p className='text-xl pt-4'>Express</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiFirebase></SiFirebase> <p className='text-xl pt-4'>SiFirebase</p>

      </div>
      <div className='w-52  h-44 text-white border text-[70px] shadow-lg flex items-center flex-col justify-center shadow-purple-800 border-[#cd5df3]' style={{
        border: '1.7px solid rgb(89, 0, 190)',
        borderRadius: '5px',
        boxShadow: '4px 5px 4px 3px rgba(117, 0, 250, 0.37)',
      }}>
        <SiBootstrap></SiBootstrap> <p className='text-xl pt-4'>SiBootstrap</p>

      </div>
    </div>
  );
};

export default Tech;