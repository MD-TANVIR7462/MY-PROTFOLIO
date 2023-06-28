import React from 'react';
import Tech from '../Components/Tech';

const SKills = () => {
   return (
      <div className='text-white text-3xl text-center font-bold px-[13%]'> 
      <h2>MY <span className='text-[#cd5df3]'>SKILLS</span></h2>
         <Tech></Tech>
         <h2> <span className='text-[#cd5df3]'>TOOLS</span> I USE</h2>
      </div>
   );
};

export default SKills;