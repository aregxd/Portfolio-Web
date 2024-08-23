import React from 'react'
import Html from '../assets/Skillls/Html.svg'
import Css from '../assets/Skillls/Css.svg'
import JavaScript from '../assets/Skillls/JavaScript.svg'
import Tailwind from '../assets/Skillls/Tailwind.svg'
import Php from '../assets/Skillls/Php.svg'
import ReactJs from '../assets/Skillls/React.svg'
import Java from '../assets/Skillls/Java.svg'
import Git from '../assets/Skillls/Git.svg'
import Redux from '../assets/Skillls/Redux.svg'



export default function Skills() {
  return (
    <div className='min-h-screen w-full flex gap-10 flex-col justify-center items-center bg-gray-900'>
        <p className='text-white font-semibold text-4xl font-rubik uppercase'>Skills</p>
        <div className="w-full flex gap-5 flex-wrap justify-center md:gap-14 md:px-44">
            <Card source={Html} name='HTML' />
            <Card source={Css} name='CSS' />
            <Card source={JavaScript} name='JavaScript' />
            <Card source={Php} name='PHP' />
            <Card source={Tailwind} name='Tailwind' />
            <Card source={Git} name='Git' />
            <Card source={ReactJs} name='React' />
            {/* <Card source={Redux} name='Redux' /> */}
            <Card source={Java} name='Java' />
        </div>
    </div>
  )
}


function Card({source, name}){
    return(
        <div className='h-32 w-32 flex gap-4 flex-col justify-center items-center border-2 border-green-400 rounded-lg md:w-44 md:h-44 cursor-pointer'>
            <img src={source} alt="Skill" className='w-12 h-12 md:h-16 md:w-16'/>
            <p className='font-rubik text-lg font-semibold text-white'>{name}</p>
        </div>
    )
}