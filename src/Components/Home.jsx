import React from 'react'
import HeroImg from '../assets/aprim.png'
import Sun from '../assets/ThemeBtn/sun.svg'
import Moon from '../assets/ThemeBtn/moon.svg'
import { useTheme } from '../Context/ThemeContext';

export default function Home() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme==='dark'?Moon:Sun;
  return (
   <div className='h-screen w-full flex justify-center items-center flex-wrap'>
      <div className='h-full w-full flex gap-5 flex-col justify-center items-center mx-10 py-20 md:flex-row md:mx-32 md:gap-16'>
        <div className='w-3/4 h-auto flex justify-center md:w-1/3 '>
          <img src={HeroImg} alt="Pic" className='img border-4 rounded-full md:w-2/3'/>
        </div>
        <div className='h-full w-full flex flex-col gap-6 justify-center items-center md:w-1/2'>
          <p className='name text-4xl font-semibold uppercase font-rubik'>Aprim Regmi</p>
          <p className='title px-8 py-1 text-2xl uppercase font-rubik font-bold'>Web Developer</p>
          <div className="social flex gap-6">
            <SocialIcons icon='facebook' to='https://facebook.com/aprimregmi0/' />
            <SocialIcons icon='instagram' to='https://instagram.com/_a_regmi/' />
            <SocialIcons icon='linkedin' to='https://linkedin.com/in/aprimregmi0/' />
            <SocialIcons icon='github' to='https://github.com/aprimr/' />
          </div>
          <p className='about text-center px-8 font-roboto lg:text-lg lg:mx-24'>I am based in <b>Nepal</b> and have been working as a <strong>Web Developer</strong> since 2022. </p>
          <Button />
        </div>
      </div>
      <button className='absolute text-3xl top-[12%] right-[12%]  md:top-[20%] xl:right-[20%]' onClick={toggleTheme}><img src={themeIcon}/></button>
      <Overlay link="mailto:aprimregmi24@gmail.com" />
   </div>
  )
}


function SocialIcons({icon, to}){
  const link = "fa-brands fa-";
  const iconName = link+icon;
  return(
    <a href={to} target='_blank' className='text-2xl hover:opacity-80'><i className={iconName}></i></a>
  );
}

function Button (){
  return(
    <button className="resume px-10 py-2 text-xl font-bold rounded shadow-md uppercase font-rubik">Resume</button>
  )
}

function Overlay({link}){
  return(
    <a href={link} className='contact vertical fixed font-rubik font-bold px-2 py-5 top-[20%] right-0 rounded-br-lg rounded-tr-lg uppercase md:top-[40%]'>Contact me</a>
  )
}
