import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Type from '../Components/Type';
import logo from "../assets/projects/home-main.svg"
import Particle from '../Components/Particle';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-[850px] z-10 flex flex-col  pt-8 md:pt-32   items-start md:items-baseline md:ps-20" id='home'>
    
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8">
          <div className="md:w-1/2">
            <motion.img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              src={logo}
       
              className="max-w-lg w-full transition-transform"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            /> 
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl text-center md:text-start md:text-3xl text-white font-bold mb-4">
              Hi There!{" "}
              <span className="animate-pulse" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-2xl md:text-3xl text-center md:text-start text-white font-bold mb-8">
              I'M
              <span className="text-2xl md:text-4xl text-[#cd5df3]"> Md TAJUL ISLAM TANVIR</span>
            </h1>
            <div className="text-white  ">
              <p className='text-xl text-center md:text-start md:text-4xl font-semibold text-[#cd5df3]'><Type /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
