import Image from "next/image";
import './home.css'

const sectionSpace = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bspace"

const sectionGrad = "section w-full flex flex-col justify-center items-center min-h-screen h-auto bgrad"

const sectionTitle = "w-[90%] h-auto py-12 mb-6 border-b-2 text-center text-5xl"

const skillContainer = "w-[80%] flex flex-col items-center justify-center mt-8 p-3"

const skillSubHeader = "text-4xl mb-2"

const skillIcons = "text-[5.75rem] flex flex-row justify-center"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      
      <div className={sectionSpace} id="home">
        <div className="h-full w-[80%] flex flex-col justify-center items-end ">
          <h1 className="text-5xl m-2">C&nbsp;H&nbsp;R&nbsp;I&nbsp;S &nbsp; A&nbsp;I&nbsp;L&nbsp;E&nbsp;Y</h1>
          <h1 className="text-3xl m-2">F&nbsp;U&nbsp;L&nbsp;L - S&nbsp;T&nbsp;A&nbsp;C&nbsp;K &nbsp; S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E &nbsp;E&nbsp;N&nbsp;G&nbsp;I&nbsp;N&nbsp;E&nbsp;E&nbsp;R</h1>
          <a href="#about" className="bg-[#363636] w-fit p-2 m-2 rounded hover:bg-[#111] duration-300">A B O U T &nbsp; M E</a>
        </div>
      </div>

      <div className={sectionGrad} id="about">
        <div className="h-full w-full flex flex-col justify-start items-center pb-12">
          <div className={sectionTitle}>
            <h1 className="">
              A B O U T &nbsp; M E
            </h1>
          </div>
          
          <div className="w-[12.5rem] h-[12.5rem] border-2 border-white rounded-full my-8">
            <img src="/images/chrisbw.png" alt="A circular-bordered photo of me." className="rounded-full"/>
          </div>

          <div className="w-[50%] h-full flex flex-col m-auto p-3 text-xl">
            <p>
              {"Hi! I'm Chris, freelance Web Developer and Software Engineer based in Kent, England."}
            </p>
            <br/>
            <p>
              {"It was a particularly long night shift in late 2019 when I began teaching myself Python through Codecademy, putting the principles into practice by writing chatbots for Discord using the Discord.py API wrapper."}
            </p>
            <br/>
            <p>
              {"However, it wasn't until the COVID-19 pandemic had run its course that the limited opportunities of my then-current profession sunk in. In early 2022, unchallenged and unfulfilled by my ten years in Private Security, I enrolled in General Assembly's twelve-week Software Engineering Immersive course where I gained further skills in Python, JavaScript, Django, Express, and React, among others."}
            </p>
            <br/>
            <p>
              {"In the time since, I've continued my voyage in software development with gusto. At present, I'm providing services to the likes of small business owners and artists seeking to strengthen their web presence, and continuing to exercise my own interests with various personal passion projects."}
            </p>
          </div>
        </div>
      </div>

      <div className={sectionSpace} id="skills">
        <div className={sectionTitle}>
          <h1>S K I L L S</h1>
        </div>

        <div className={skillContainer}>
          <h1 className={skillSubHeader}>F R O N T E N D</h1>
          <div className={skillIcons}>
            <i className="devicon-html5-plain-wordmark icon"></i>
            <i className="devicon-css3-plain-wordmark icon"></i>
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
              <div className="flex flex-col items-center icon" id="github-wordmark">
                <i id="github-icon" className="devicon-github-plain text-7xl"></i>
                <span className="text-base select-none">GitHub</span>
              </div>
              <i className="devicon-heroku-original-wordmark icon"></i>
              <i className="devicon-npm-original-wordmark icon"></i>
              <i className="devicon-vscode-plain-wordmark icon"></i>
              <i className="devicon-pycharm-plain-wordmark icon"></i>
              <i className="devicon-trello-plain-wordmark icon"></i>
            </div>
        </div>
      </div>

      <div className={sectionGrad} id="projects">
        <div className={sectionTitle}>
          <h1>P R O J E C T S</h1>
        </div>
      </div>

    </main>
  );
}
