import React from 'react';
import Fiersa from '../../Assets/Fiersa.jpg'
import {Button} from '@mui/material'
const Content = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Fiersa} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#2FA4FF] font-bold '>Enjoy Your Traveling</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>To Everywhere</h1>
          <p className='pb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <Button variant='contained' className=' w-[200px]  md:mx-0'>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
