import React from 'react';
import Tech from '../Components/Tech';

const Skills = () => {
  return (
    <div className='text-white text-3xl text-center font-bold w-9/12  mx-auto'>
      <h2>MY <span className='text-[#cd5df3]'>SKILLS</span></h2>
      <div className=' gap-5 pt-14'>
        <Tech></Tech>
      </div>
      <h2> <span className='text-[#cd5df3]'>TOOLS</span> I USE</h2>
    </div>
  );
};

export default Skills;
