import React from 'react'

export default function Footer() {
  return (
    <div className="flex w-full h-16 justify-center bg-[#333] py-2">
            <div className="w-[50%] flex flex-row justify-around items-center">
                <a href="https://github.com/c-t-ailey" className='text-5xl mt-1' target="_blank">
                    <i className="devicon-github-plain icon"></i>
                </a>
                <span className="copyright">&copy; Chris Ailey 2024</span>
                <a href="https://www.linkedin.com/in/c-t-ailey/" target="_blank">
                    <img src="/images/linkedin.png" className='w-12 h-auto'/>
                </a>
            </div>
    </div>
  )
}
