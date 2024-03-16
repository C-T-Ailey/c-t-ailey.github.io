"use client"

import Image from "next/image";
import './home.css'

import { sectionScroll } from "@/components/Navbar";

const sectionSpace = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bspace"

const sectionGrad = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bgrad"

const sectionTitleContainer = "h-full w-full flex flex-col justify-start items-center pb-12"

const sectionTitle = "w-[90%] h-auto py-12 mb-6 border-b-2 text-center font-[200] text-5xl"

const skillContainer = "w-fit flex flex-col items-center justify-center my-10 p-3"

const skillSubHeader = "text-4xl mb-2"

const skillIcons = "text-[5.75rem] flex flex-row flex-wrap justify-center"

const skillGlow = "drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"

const projectWindow = "w-full h-[25rem] bg-center bg-cover m-auto border-2 rounded-md shadow-[0_5px_5px_rgba(0,0,0,0.6)]"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      
      <div className={sectionSpace} id="home" onClick={(e) => e.preventDefault()}>
        {/* <div className="h-full w-[80%] flex flex-col justify-center items-end"> */}
        <div className="h-fit w-[90%] top-[40vh] pr-14 absolute text-right">
          <h1 className="text-5xl font-[200] m-4 relative title">C&nbsp;H&nbsp;R&nbsp;I&nbsp;S &nbsp; A&nbsp;I&nbsp;L&nbsp;E&nbsp;Y</h1>
          <h1 className="text-2xl font-[200] m-4 relative job">F&nbsp;U&nbsp;L&nbsp;L - S&nbsp;T&nbsp;A&nbsp;C&nbsp;K &nbsp; S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E &nbsp;E&nbsp;N&nbsp;G&nbsp;I&nbsp;N&nbsp;E&nbsp;E&nbsp;R</h1>
          <a href="#about" className="bg-[#363636] w-fit p-2 m-4 rounded hover:bg-[#111] duration-300 relative learnmore" onClick={(e) => sectionScroll(e)}>A B O U T &nbsp; M E</a>
        </div>
      </div>

      <div className={sectionGrad} id="about">
        <div className={sectionTitleContainer}>
          <div className={sectionTitle}>
            <h1>
              A B O U T &nbsp; M E
            </h1>
          </div>
          
          <div className="w-[12.5rem] h-[12.5rem] border-2 border-white rounded-full my-8 overflow-hidden">
            <img src="/images/chrisbw.png" alt="A circular-bordered photo of me."/>
          </div>

          <div className="w-[50%] h-full flex flex-col m-auto p-3 text-xl">
            <p>
              {"Hi! I'm Chris, freelance Web Developer and Software Engineer based in Kent, England."}
            </p>
            <br/>
            <p>
              {"It was a particularly long night shift in late 2019 when I began teaching myself Python through Codecademy and putting the principles into practice by writing chatbots for Discord with Discord.py."}
            </p>
            <br/>
            <p>
              {"By the time the COVID-19 pandemic had run its course, the limited opportunities of my then-current profession had sunk in. In early 2022, unchallenged and unfulfilled by my ten years in Private Security, I enrolled in General Assembly's twelve-week Software Engineering Immersive course where I gained further skills in Python, JavaScript, Django, Express, and React, among others."}
            </p>
            <br/>
            <p>
              {"In the time since, I've continued my voyage in software development with gusto, learning new technologies and continuing to hone my existing skills. At present, I'm providing services to the likes of small business owners and artists seeking to strengthen their web presence, and continuing to exercise my own interests with various personal passion projects."}
            </p>
          </div>
        </div>
      </div>

      <div className={sectionSpace} id="skills">
        <div className={`${sectionTitleContainer} pb-0`}>
          <div className={sectionTitle}>
            <h1>S K I L L S</h1>
          </div>
        </div>

        <div className=" w-fit h-fit m-auto flex flex-col items-center">
          <div className={skillContainer}>
            <h1 className={skillSubHeader}>F R O N T E N D</h1>
            <div className={skillIcons}>
              <i className="devicon-html5-plain-wordmark icon"></i>
              <i className="devicon-css3-plain-wordmark icon"></i>
              <div className="w-fit h-auto flex flex-col items-center mt-[-15px] icon">
                <i className="devicon-tailwindcss-original"></i>
                <i className="devicon-tailwindcss-plain-wordmark my-[-35px]"></i>
              </div>
              <i className="devicon-javascript-plain icon"></i>
              <i className="devicon-typescript-plain icon"></i>
              <i className="devicon-jquery-plain-wordmark icon"></i>
              <i className="devicon-python-plain-wordmark icon"></i>
              <i className="devicon-react-original-wordmark icon"></i>
              <i className="devicon-nextjs-original-wordmark icon"></i>
            </div>
          </div>
          
          <div className={skillContainer}>
            <h1 className={skillSubHeader}>B A C K E N D</h1>
              <div className={skillIcons}>
                <i className="devicon-express-original-wordmark icon"></i>
                <i className="devicon-nodejs-plain-wordmark icon"></i>
                <i className="devicon-mongodb-plain-wordmark icon"></i>
                <i className="devicon-django-plain-wordmark icon"></i>
                <i className="devicon-postgresql-plain-wordmark icon"></i>
              </div>
          </div>
          
          <div className={skillContainer}>
            <h1 className={skillSubHeader}>T O O L S</h1>
              <div className={skillIcons}>
                <i className="devicon-git-plain-wordmark icon"></i>
                <i className="devicon-github-original-wordmark icon"></i>
                <i className="devicon-heroku-original-wordmark icon"></i>
                <i className="devicon-vercel-original-wordmark icon"></i>
                <i className="devicon-npm-original-wordmark icon"></i>
                <i className="devicon-vscode-plain-wordmark icon"></i>
                <div className="w-fit h-auto flex flex-col items-center mt-[-15px] icon">
                  <i className="devicon-pycharm-plain"></i>
                  <i className="devicon-pycharm-plain-wordmark my-[-35px]"></i>
                </div>
                <i className="devicon-trello-plain-wordmark icon"></i>
              </div>
        </div>
        </div>
      </div>

      <div className={sectionGrad} id="projects">
        <div className={sectionTitleContainer}>
          <div className={sectionTitle}>
            <h1>P R O J E C T S</h1>
          </div>
        </div>

        <div className="w-full h-full grid gap-x-10 gap-y-5 grid-cols-2 grid-rows-3 p-10">
          <div className={`${projectWindow} col-start-1 row-start-1`}>
            <div className="description"></div>
          </div>

          <div className={`${projectWindow} col-start-2 row-start-1`}>
            <div className="description"></div>
          </div>

          <div className={`${projectWindow} bg-[url('/images/bills_current.gif')] col-start-1 row-start-2`}>
            <div className="description"></div>
          </div>

          <div className={`${projectWindow} bg-[url('/images/cake.gif')] col-start-2 row-start-2`}>
            <div className="description"></div>
          </div>

          <div className={`${projectWindow} bg-[url('/images/nomad.gif')] col-start-1 row-start-3`}>
            <div className="description"></div>
          </div>

          <div className={`${projectWindow} bg-[url('/images/burger.gif')] col-start-2 row-start-3`}>
            <div className="description"></div>
          </div>
        </div>
      </div>

      <div className={`${sectionSpace} mb-16`} id="contact">
        <div className={sectionTitleContainer}>
          <div className={sectionTitle}>
            <h1>C O N T A C T</h1>
          </div>
        </div>
      
        <div className="flex flex-col h-52 items-center justify-around text-xl font-normal whitespace-pre text-center m-auto">
          
          <p>
            Thank you for stopping by!  
          </p>
          
          <p>
            If you'd like to discuss my previous work, upcoming opportunities, or just wanted to drop in and say hi, please feel free to email me at:
          </p>

          <a href="mailto:chris.ailey90@gmail.com" className="bg-[#363636] w-fit p-2 m-2 rounded hover:bg-[#111] duration-300">C H R I S . A I L E Y 9 0 @ G M A I L . C O M</a>
        </div>
      
      </div>

    </main>
  );
}
