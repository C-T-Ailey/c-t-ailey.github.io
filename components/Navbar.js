"use client"

import React from 'react'


export const sectionScroll = (e) => {
  const targetHash = e.target.hash;
  console.log(targetHash)
  const navBar = document.getElementById('nav')
  const navHeight = parseInt(navBar.offsetHeight)
  console.log(navHeight)
  let target = document.getElementById(targetHash.slice(1, targetHash.length))
  const targetTop = target.getBoundingClientRect().top
  console.log(targetTop)
  
  let viewPortOffset = document.body.getBoundingClientRect();
  let viewTop = viewPortOffset.top;
  console.log(viewTop)
  
  window.scrollTo({left: 0, top: (targetTop - navHeight)-viewTop, behavior: "smooth"})
}

export default function Navbar() {
  const navLinkDiv = "w-fit h-full flex items-center px-4 transition ease hover:bg-[#111] duration-300"
  
  const navLinkAnchor = "h-full w-full flex items-center select-none"
  
  const navButtonContainer = "flex w-fit flex-row items-center"
  return (
    <div className="nav fixed w-full h-14 flex flex-row justify-between bg-[#333] z-40" id='nav' onClick={(e)=>e.preventDefault()}>
          
            <div className={navButtonContainer}>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#home" onClick={(e) => sectionScroll(e)}>T O P</a></div>
            </div>
            
            <div className={navButtonContainer}>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#about" onClick={(e) => sectionScroll(e)}>A B O U T</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#skills" onClick={(e) => sectionScroll(e)}>S K I L L S</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#projects" onClick={(e) => sectionScroll(e)}>P R O J E C T S</a></div>
              <div className={navLinkDiv}><a className={navLinkAnchor} href="#contact" onClick={(e) => sectionScroll(e)}>C O N T A C T</a></div>
            </div>     
    </div>
  )
}
