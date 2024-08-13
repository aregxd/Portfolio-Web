import React from 'react'

export default function Projects() {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 justify-center items-center bg-gray-900'>
        <p className='text-white font-semibold text-4xl font-rubik uppercase'>Projects</p>
        <div className="w-full flex gap-7 justify-center flex-wrap md:w-4/5">
          <Cards title="Gamer Store"
            link="https://www.gamerstore.kesug.com"
            github=""
            desc="Gamerstore is an online store for purchasing ingame items."
            langs={['HTML','CSS','JS','php']}
          />
          <Cards title="FotoVista"
            link="https://www.fotovista.great-site.net"
            github="https://github.com/aprimr/fotovista"
            desc="FotoVista is a social media app where you can post photos."
            langs={['HTML','CSS','JS','php']}
          />
          <Cards title="Chattly"
            link=""
            github="https://github.com/aprimr/chattly"
            desc="Chattly is a chat room where we can connect with many people."
            langs={['HTML','CSS','JS','php']}
          />
        </div>
    </div>
  )
}

function Cards({title, link, github,desc,langs}){
  let languages = langs;
  const list = languages.map( lang => 
      <li className='w-auto bg-green-400 px-4 py-0.5 text-gray-900 text-xs font-bold list-none rounded-sm uppercase'>{lang}</li>
  );
  return(
    <>
      <div className="py-4 w-[300px] h-auto bg-gray-900 text-white border-2 border-green-400 rounded-sm">
        <div className='flex flex-col gap-3'>
          <div className="pt-4 w-full flex justify-around">
            <p className='font-rubik text-2xl font-semibold uppercase'>{title}</p>
            <div className="flex gap-4 items-center">
              <a href={link} target='_blank'><i className={link?'fa-solid fa-link':''}></i></a>
              <a href={github} target='_blank'><i className={github?'fa-solid fa-code-branch':''}></i></a>
            </div>
          </div>
          <div className='px-4 text-base font-normal font-poppins'>{desc}</div>
          <div className=' flex gap-2 mx-4 flex-wrap'>{list}</div>
        </div>
      </div>
    </>
  )
}