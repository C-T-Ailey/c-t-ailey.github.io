"use client"

import React from 'react'


export const sectionScroll = (e) => {
  const targetHash = e.target.hash;
  const navBar = document.getElementById('nav')
  const navHeight = parseInt(navBar.offsetHeight)
  let target = document.getElementById(targetHash.slice(1, targetHash.length))
  const targetTop = target.getBoundingClientRect().top
  
  let viewPortOffset = document.body.getBoundingClientRect();
  let viewTop = viewPortOffset.top;
  
  window.scrollTo({left: 0, top: (targetTop - navHeight)-viewTop, behavior: "smooth"})
}

export default function Navbar() {
  
  const navLinkDiv = "w-fit h-full flex items-center px-[0.4rem] md:px-4 transition ease hover:bg-[#111] duration-300"
  
  const navLinkAnchor = "h-full w-full flex items-center select-none"
  
  const navButtonContainer = "flex w-fit flex-row items-center"

  return (

    <div className="nav fixed w-full h-14 flex flex-row justify-between bg-[#333] text-xs md:text-base lg:text-lg z-40" id='nav' onClick={(e)=>e.preventDefault()}>
          
            <div className={navButtonContainer}>
              <div className={navLinkDiv} onClick={(e) => sectionScroll(e)}><a className={`${navLinkAnchor} pb-6 md:pb-0`} href="#home">T O P</a></div>
            </div>
            
            <div className={navButtonContainer}>
              <div className={navLinkDiv} onClick={(e) => sectionScroll(e)}><a className={`${navLinkAnchor} pt-6 md:pt-0`} href="#about">A B O U T</a></div>
              <div className={navLinkDiv} onClick={(e) => sectionScroll(e)}><a className={`${navLinkAnchor} pb-6 md:pb-0`} href="#skills">S K I L L S</a></div>
              <div className={navLinkDiv} onClick={(e) => sectionScroll(e)}><a className={`${navLinkAnchor} pt-6 md:pt-0`} href="#projects">P R O J E C T S</a></div>
              <div className={navLinkDiv} onClick={(e) => sectionScroll(e)}><a className={`${navLinkAnchor} pb-6 md:pb-0`} href="#contact">C O N T A C T</a></div>
            </div>   

    </div>

  )
}
