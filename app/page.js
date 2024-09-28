"use client"

import Image from "next/image";
import './home.css'
import { sectionScroll } from "@/components/Navbar";
import { useEffect, useState } from "react";


export default function Home() {
  
  const [visibleVal, setVisibleVal] = useState(false)
  const [visibleSloane, setVisibleSloane] = useState(false)
  const [visibleBill, setVisibleBill] = useState(false)
  const [visibleCake, setVisibleCake] = useState(false)
  const [visibleNomad, setVisibleNomad] = useState(false)
  const [visibleBurger, setVisibleBurger] = useState(false)

  const toggleVisible = (e) => {
    if ((e.target.id || e.target.parentNode.id) === "val") {
      visibleVal === false ? setVisibleVal(true) : setVisibleVal(false) 
    }
    else if ((e.target.id || e.target.parentNode.id) === "sloane") {
      visibleSloane === false ? setVisibleSloane(true) : setVisibleSloane(false) 
    }
    else if ((e.target.id || e.target.parentNode.id) === "bill") {
      visibleBill === false ? setVisibleBill(true) : setVisibleBill(false) 
    }
    else if ((e.target.id || e.target.parentNode.id) === "cake") {
      visibleCake === false ? setVisibleCake(true) : setVisibleCake(false) 
    }
    else if ((e.target.id || e.target.parentNode.id) === "nomad") {
      visibleNomad === false ? setVisibleNomad(true) : setVisibleNomad(false) 
    }
    else if ((e.target.id || e.target.parentNode.id) === "burger") {
      visibleBurger === false ? setVisibleBurger(true) : setVisibleBurger(false) 
    }
  }

  const buttonStyle = "bg-[#363636] w-fit p-2 m-4 rounded hover:bg-[#111] duration-300 relative learnmore select-none"
  
  
  const sectionSpace = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bspace"
  
  const sectionGrad = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bgrad"
  
  const sectionTitleContainer = "h-full w-full flex flex-col justify-start items-center pb-12"
  
  const sectionTitle = "w-[90%] h-auto py-12 mb-6 border-b-2 text-center font-[200] text-4xl md:text-5xl"
  
  const skillContainer = "w-fit flex flex-col items-center justify-center my-10 p-3"
  
  const skillSubHeader = "text-2xl md:text-4xl mb-2"
  
  const skillIcons = "text-7xl md:text-[5.75rem] flex flex-row flex-wrap justify-center"
  
  const skillGlow = "drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
  
  const projectWindow = "max-w-[890px] w-full h-48 md:h-80 lg:h-[25rem] bg-center bg-cover my-3 lg:m-auto border-2 rounded-md shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
  
  const projectButtonStyle = "bg-[#363636] w-fit p-2 m-2 lg:m-4 rounded hover:bg-[#111] duration-300 relative select-none pointer-events-auto"
  
  const revealedDesc = "h-full w-full px-5 backdrop-blur-sm backdrop-brightness-[.15] overflow-y-scroll flex flex-col items-center select-none"

  return (
    <main className="flex flex-col items-center w-full">
      
      <div className={sectionSpace} id="home" onClick={(e) => e.preventDefault()}>
        {/* <div className="h-full w-[80%] flex flex-col justify-center items-end"> */}
        <div className="h-fit w-full md:pr-6 lg:pr-14 absolute text-right">
          <h1 className="text-3xl font-[200] m-4 relative title select-none">C&nbsp;H&nbsp;R&nbsp;I&nbsp;S &nbsp; A&nbsp;I&nbsp;L&nbsp;E&nbsp;Y</h1>
          <h1 className="text-xl font-[200] m-4 relative job select-none">F&nbsp;U&nbsp;L&nbsp;L - S&nbsp;T&nbsp;A&nbsp;C&nbsp;K &nbsp; S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E &nbsp; E&nbsp;N&nbsp;G&nbsp;I&nbsp;N&nbsp;E&nbsp;E&nbsp;R</h1>
          <a href="#about" className={buttonStyle} onClick={(e) => sectionScroll(e)}>A B O U T &nbsp; M E</a>
        </div>
      </div>

      <div className={sectionGrad} id="about">
        <div className={sectionTitleContainer}>
          <div className={sectionTitle}>
            <h1>
              A B O U T &nbsp; M E
            </h1>
          </div>
          
          <div className="w-32 h-32 md:w-[12.5rem] md:h-[12.5rem] border-2 border-white rounded-full my-1 md:my-6 overflow-hidden">
            <img src="/images/chrisbw.png" alt="A circular-bordered photo of me."/>
          </div>

          <div className="w-full lg:w-[50rem] xl:w-[75rem] h-full flex flex-col m-auto p-3 text-base lg:text-xl select-none">
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
              <div className="w-fit h-auto flex flex-col items-center mt-[-10px] md:mt-[-15px] icon">
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
                <div className="w-fit h-auto flex flex-col items-center mt-[-10px] md:mt-[-15px] icon">
                  <i className="devicon-pycharm-plain"></i>
                  <i className="devicon-pycharm-plain-wordmark my-[-30px] md:my-[-35px]"></i>
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
          <div className="text-center text-wrap text-lg md:text-2xl">
            CLICK A PREVIEW TO LEARN MORE
          </div>
        </div>

        <div className="max-w-[1800px] w-full h-full flex flex-col lg:grid lg:gap-x-10 lg:gap-y-5 lg:grid-cols-2 lg:grid-rows-3 px-5 pb-5 md:px-10 md:pb-10 lg:p-10">

          {/* Valen LaRae */}

          <div className={`${projectWindow} bg-[url('/images/val.jpg')] hover:bg-[url('/images/valen.gif')] lg:col-start-1 lg:row-start-1`} id="val" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleVal ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"ART BY VALEN LARAE"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, Next.js, Tailwind CSS"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none whitespace-pre text-wrap">
                {"A full-stack portfolio site built to specification for American-based artist Valen LaRae, showcasing a selection of work available for purchase during her tours of the comic book and video game convention circuit in the American South.\n\nIn line with the client's requirements, the site also includes a hidden, authentication-gated dashboard to facilitate her freedom to update the galleries and event schedule at her leisure."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/ValenLaraeArt" target="_blank" className={projectButtonStyle}>View on GitHub</a>
                <a href="https://www.valenlaraeart.com/" target="_blank" className={projectButtonStyle}>Visit Art by Valen LaRae</a>
              </div>
            </div>
          </div>

          {/* Seven Card Sloane */}

          <div className={`${projectWindow} bg-[url('/images/sloane.jpg')] hover:bg-[url('/images/sloane.gif')] lg:col-start-2 lg:row-start-1`} id="sloane" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleSloane ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"SEVEN CARD SLOANE"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, JavaScript, React"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none whitespace-pre text-wrap">
                {"A single-player card game based on the Texas Hold 'Em variant of Poker, where the player places bets on the appearance of a specific winning hand before seven hands of seven cards are dealt.\n\nWhile the game is in a presentable and playable state, several features are planned for future updates, including:\n• A points shop for spending won chips on features such as new card backs and outcome-adjusting bonuses;\n• Achievements for meeting specific criteria in rounds, which unlock new items in the points shop;\n• Placement animations so the planned purchaseable card backs will be visible."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/Card-Game-App" target="_blank" className={projectButtonStyle}>View on GitHub</a>
                <a href="https://sevencardsloane.vercel.app/" target="_blank" className={projectButtonStyle}>Play Seven Card Sloane</a>
              </div>
            </div>
          </div>

          {/* Bootleg Bill's */}

          <div className={`${projectWindow} bg-[url('/images/bills.jpg')] hover:bg-[url('/images/bills_current.gif')] lg:col-start-1 lg:row-start-2`} id="bill" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleBill ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"BOOTLEG BILL'S UNOFFICIAL AUDIO RARITIES"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, React, React-Bootstrap, Node.js, Express.js, MongoDB"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none whitespace-pre text-wrap">
                {"A full-stack application presented as a functional e-commerce application for the sale of custom-designed bootleg cassettes, records and apparel. Users can freely browse the site's products, listen to a selection of music as they shop, and register as either a customer to purchase items or as site staff to create and modify inventory and orders.\n\nOriginally developed as part of a three-person team for the final project of General Assembly's Software Engineering Immersive course, I now independently maintain and develop the application as an extended portfolio for my own graphic and audio design work."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/Bootleg-Bills-Frontend/" target="_blank" className={projectButtonStyle}>View active codebase on GitHub</a>
                <a href="https://github.com/C-T-Ailey/Bootleg-Bills-Frontend/tree/legacy" target="_blank" className={projectButtonStyle}>View legacy codebase on GitHub</a>
                <a href="https://bootleg-bills.herokuapp.com/" target="_blank" className={projectButtonStyle}>{"Visit Bootleg Bill's"}</a>
              </div>
              <div className="text-center text-xs md:text-base pointer-events-none">
                {"Please be aware that this project is hosted using Heroku's \"Eco\" dynos, and may take a few moments to wake up before loading."}
              </div>
            </div>
          </div>

          {/* Cake Sera Sera */}

          <div className={`${projectWindow} bg-[url('/images/cake.jpg')] hover:bg-[url('/images/cake.gif')] lg:col-start-2 lg:row-start-2`} id="cake" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleCake ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"CAKE SERA, SERA"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, Bulma, Python, Django, PostGreSQL"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none">
                {"A full-stack Django app, constructed as part of a three-person team, where users can view and submit entries for various baked goods and variant recipes for each. Serving as the Team Lead for this project, I managed planning, preparation and deployment, defining the database models, implementing pagination and styling."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/Project-3-Cake-Recipe-Site-Fixed" target="_blank" className={projectButtonStyle}>View on GitHub</a>
                <a href="https://cakeprojectapp.herokuapp.com/" target="_blank" className={projectButtonStyle}>Visit Cake Sera, Sera</a>
              </div>
              <div className="text-center text-xs md:text-base pointer-events-none">
                {"Please be aware that this project is hosted using Heroku's \"Eco\" dynos, and may take a few moments to wake up before loading."}
              </div>
            </div>
          </div>

          {/* Nomad Bookshelf */}

          <div className={`${projectWindow} bg-[url('/images/nomad.jpg')] hover:bg-[url('/images/nomad.gif')] lg:col-start-1 lg:row-start-3`} id="nomad" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleNomad ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"THE NOMAD BOOKSHELF"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, Express.js, Embedded JavaScript, MongoDB"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none">
                {"A full-stack Express.js app where users can register to view, submit and review books and their authors."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/Project02GroupGit" target="_blank" className={projectButtonStyle}>View on GitHub</a>
                <a href="https://nomadbooks.herokuapp.com/" target="_blank" className={projectButtonStyle}>Visit The Nomad Bookshelf</a>
              </div>
              <div className="text-center text-xs md:text-base pointer-events-none">
                {"Please be aware that this project is hosted using Heroku's \"Eco\" dynos, and may take a few moments to wake up before loading."}
              </div>
            </div>
          </div>

          {/* Burger Monarch */}

          <div className={`${projectWindow} bg-[url('/images/burger.jpg')] hover:bg-[url('/images/burger.gif')] lg:col-start-2 lg:row-start-3`} id="burger" onClick={(e) => toggleVisible(e)}>
            <div className={!visibleBurger ? "hidden" : revealedDesc}>
              <div className="text-white text-xl md:text-3xl font-bold my-3 pointer-events-none text-center">
                {"WELCOME TO HAMBURGER MONARCH"}
              </div>
              <div className="text-base text-center md:text-xl pointer-events-none mb-3">
                {"Build: HTML, CSS, JavaScript"}
              </div>
              <div className="text-sm md:text-xl pointer-events-none">
                {"A browser-based game built with HTML, CSS and JavaScript where the player must construct a burger according to a preview image of their target from random falling ingredients."}
              </div>
              <div className="w-full text-sm md:text-base text-center flex flex-wrap justify-center px-12 pointer-events-none">
                <a href="https://github.com/C-T-Ailey/Project-1-Burger-Game" target="_blank" className={projectButtonStyle}>View on GitHub</a>
                <a href="https://c-t-ailey.github.io/Project-1-Burger-Game/" target="_blank" className={projectButtonStyle}>Play Welcome to Hamburger Monarch</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* If the footer looks broken on any devices, this is the first place to fix */}

      <div className={`${sectionSpace} pb-20 md:pb-16 md:mb-2`} id="contact">
        <div className={`${sectionTitleContainer} mb-[-3rem]`}>
          <div className={sectionTitle}>
            <h1>C O N T A C T</h1>
          </div>
        </div>
      
        <div className="h-fit w-full text-base lg:text-xl font-normal whitespace-pre text-center text-wrap m-auto pb-20 px-8 select-none">
          
          <p>
            {"Thank you for stopping by!"}  
          </p>
          
          <p className="my-5">
            {"If you'd like to discuss my previous work, upcoming opportunities, or just wanted to drop in and say hi, feel free to email me at:"}
          </p>

          <a href="mailto:chris.ailey90@gmail.com" className="bg-[#363636] w-fit p-2 mt-5 text-sm lg:text-lg rounded hover:bg-[#111] duration-300 select-none">C H R I S . A I L E Y 9 0 @ G M A I L . C O M</a>
        </div>
      
      </div>

    </main>
  );
}
