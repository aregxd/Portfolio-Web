import React from 'react'
import { useTheme } from '../Context/ThemeContext';

// light icons
import Html from '../assets/Skillls/Html.svg'
import Css from '../assets/Skillls/Css.svg'
import JavaScript from '../assets/Skillls/JavaScript.svg'
import Tailwind from '../assets/Skillls/Tailwind.svg'
import Php from '../assets/Skillls/Php.svg'
import ReactJs from '../assets/Skillls/React.svg'
import Java from '../assets/Skillls/Java.svg'
import Git from '../assets/Skillls/Git.svg'
import Redux from '../assets/Skillls/Redux.svg'

// Dark icons
import HtmlDark from '../assets/SkilllsDark/Html.svg'
import CssDark from '../assets/SkilllsDark/Css.svg'
import JavaScriptDark from '../assets/SkilllsDark/JavaScript.svg'
import TailwindDark from '../assets/SkilllsDark/Tailwind.svg'
import PhpDark from '../assets/SkilllsDark/Php.svg'
import ReactJsDark from '../assets/SkilllsDark/React.svg'
import JavaDark from '../assets/SkilllsDark/Java.svg'
import GitDark from '../assets/SkilllsDark/Git.svg'
import ReduxDark from '../assets/SkilllsDark/Redux.svg'


export default function Skills() {
    const {theme} = useTheme();
    const HtmlIcon = theme==='dark'?Html:HtmlDark;
    const CssIcon = theme==='dark'?Css:CssDark;
    const JavaScriptIcon = theme==='dark'?JavaScript:JavaScriptDark;
    const TailwindIcon = theme==='dark'?Tailwind:TailwindDark;
    const PhpIcon = theme==='dark'?Php:PhpDark;
    const ReactJsIcon = theme==='dark'?ReactJs:ReactJsDark;
    const JavaIcon = theme==='dark'?Java:JavaDark;
    const GitIcon = theme==='dark'?Git:GitDark;
    const ReduxIcon = theme==='dark'?Redux:ReduxDark;
  return (
    <div className='min-h-screen w-full px-12 flex gap-10 flex-col justify-center items-center'>
        <p className='name font-semibold text-4xl font-rubik uppercase'>Tech</p>
        <div className="w-full flex gap-5 flex-wrap justify-center md:gap-14 md:px-44">
            <Card source={HtmlIcon} name='HTML' />
            <Card source={CssIcon} name='CSS' />
            <Card source={JavaScriptIcon} name='JavaScript' />
            <Card source={PhpIcon} name='PHP' />
            <Card source={TailwindIcon} name='Tailwind' />
            <Card source={GitIcon} name='Git' />
            <Card source={ReactJsIcon} name='React' />
            {/* <Card source={ReduxIcon} name='Redux' /> */}
            <Card source={JavaIcon} name='Java' />
        </div>
    </div>
  )
}


function Card({source, name}){
    return(
        <div className='card h-32 w-32 flex gap-4 flex-col justify-center items-center border-2 rounded-lg md:w-44 md:h-44 cursor-pointer'>
            <img src={source} alt="Skill" className='skills-img w-12 h-12 md:h-16 md:w-16'/>
            <p className='font-rubik text-lg font-semibold'>{name}</p>
        </div>
    )
}