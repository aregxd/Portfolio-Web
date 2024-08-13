import React from 'react'
import HeroImg from '../assets/aprim.png'

export default function home() {
  return (
   <div className='h-screen w-full flex justify-center items-center flex-wrap bg-gray-900 text-white'>
      <div className='h-full w-full flex gap-5 flex-col justify-center items-center mx-10 py-20 md:flex-row md:mx-32 md:gap-16'>
        <div className='w-3/4 h-auto flex justify-center md:w-1/3 '>
          <img src={HeroImg} alt="Pic" className='border-4 border-green-400 rounded-full md:w-2/3'/>
        </div>
        <div className='h-full w-full flex flex-col gap-6 justify-center items-center md:w-1/2'>
          <p className='text-4xl text-white font-semibold uppercase font-rubik'>Aprim Regmi</p>
          <p className='px-8 py-1 text-2xl bg-green-400 text-gray-900 uppercase font-rubik font-bold'>Web Developer</p>
          <div className="flex gap-6 ">
            <SocialIcons icon='facebook' to='https://facebook.com/aprimregmi0/' />
            <SocialIcons icon='instagram' to='https://instagram.com/_a_regmi/' />
            <SocialIcons icon='linkedin' to='https://linkedin.com/in/aprimregmi0/' />
            <SocialIcons icon='github' to='https://github.com/aprimr/' />
          </div>
          <p className='text-center px-8 font-roboto lg:mx-22'>I have been working as a <strong>Web Developer</strong> since 2023. </p>
          <Button />
        </div>
      </div>
   </div>
  )
}


function SocialIcons({icon, to}){
  const link = "fa-brands fa-";
  const iconName = link+icon;
  return(
    <a href={to} target='_blank' className='text-2xl hover:text-gray-300'><i className={iconName}></i></a>
  );
}

function Button (){
  return(
    <button class="relative px-10 py-2 text-xl font-bold text-gray-800 bg-green-400 rounded shadow-md uppercase border-2 border-green-400 font-rubik hover:bg-gray-900 hover:text-green-400">Resume</button>
  )
}