import React from 'react'

export default function Footer() {
  return (
    <div className="flex w-full h-fit justify-center bg-[#333] py-2">
            <div className="flex flex-row justify-between items-center">
                <a href="https://github.com/c-t-ailey"  target="_blank">
                    <i className="devicon-github-plain"></i>
                </a>
                <span className="copyright">&copy; Chris Ailey 2022</span>
                <a href="https://www.linkedin.com/in/c-t-ailey/" target="_blank">
                    <img src="/images/linkedin.png"/>
                </a>
            </div>
    </div>
  )
}
