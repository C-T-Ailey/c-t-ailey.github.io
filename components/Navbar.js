import React from 'react'

export default function Navbar() {
  return (
    <div className="nav fixed w-full h-14 flex flex-row justify-between bg-[#333] text-white">
          
            <div className="flex w-fit flex-row items-center">
              <div className="w-fit h-full px-4 hover:bg-[#111] flex items-center"><a className="" href="#home">T O P</a></div>
            </div>
            
            <div className="flex w-fit flex-row items-center">
              <div className="w-fit h-full px-4 hover:bg-[#111] flex items-center"><a className="" href="#about-me">A B O U T</a></div>
              <div className="w-fit h-full px-4 hover:bg-[#111] flex items-center"><a className="" href="#skills">S K I L L S</a></div>
              <div className="w-fit h-full px-4 hover:bg-[#111] flex items-center"><a className="" href="#portfolio">P R O J E C T S</a></div>
              <div className="w-fit h-full px-4 hover:bg-[#111] flex items-center"><a className="" href="#contact">C O N T A C T</a></div>
            </div>     
    </div>
  )
}
