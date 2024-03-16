import React from 'react'

const navLinkDiv = "w-fit h-full flex items-center transition ease hover:bg-[#111] duration-300"

const navLinkAnchor = "h-full w-full flex items-center px-4"

const navButtonContainer = "flex w-fit flex-row items-center"

export default function Navbar() {
  return (
    <div className="nav fixed w-full h-14 flex flex-row justify-between bg-[#333]">
          
            <div className={navButtonContainer}>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#home">T O P</a></div>
            </div>
            
            <div className={navButtonContainer}>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#about">A B O U T</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#skills">S K I L L S</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#projects">P R O J E C T S</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#contact">C O N T A C T</a></div>
            </div>     
    </div>
  )
}
