import React from 'react'

export default function Contact() {
  return (
    <div className='min-h-screen w-full flex gap-10 flex-col justify-center items-center bg-gray-900'>
        <p className='text-white font-semibold text-4xl font-rubik uppercase'>Contact</p>
        <div className="flex justify-center md:w-3/4">
            <form action="mailto:aprimregmi24@gmail.com" method="post" enctype="text/plain" className='flex flex-col gap-5'>
                <Input text='Name' />
                <Input text='Email' />
                <TextArea />
                <SendBtn />
            </form>
        </div>
    </div>
  )
}

function Input ({text}){
    return(
        <input type="text" placeholder={text} className='w-72 h-12 px-4 outline-none rounded border-2 border-green-400 md:w-96' />
    )
}

function TextArea (){
    return(
        <textarea placeholder='Message' className='w-72 min-h-32 max-h-56 px-4 pt-3 outline-none rounded border-2 border-green-400 md:w-96'></textarea>
    )
}

function SendBtn(){
    return(
        <button className='mx-8 px-5 py-2 font-semibold font-rubik text-xl bg-green-400 border-2 border-green-400 outline-none uppercase rounded hover:bg-gray-900 hover:text-green-400'>Send Message</button>
    )
}

