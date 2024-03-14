import Image from "next/image";
import './home.css'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen">
      
      <div className="section w-full flex justify-center items-center" id="home">
        <div className="h-full w-[80%] flex flex-col justify-center items-end text-white">
          <h1 className="text-5xl m-2">C&nbsp;H&nbsp;R&nbsp;I&nbsp;S &nbsp; A&nbsp;I&nbsp;L&nbsp;E&nbsp;Y</h1>
          <h1 className="text-3xl m-2">F&nbsp;U&nbsp;L&nbsp;L - S&nbsp;T&nbsp;A&nbsp;C&nbsp;K &nbsp; S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E &nbsp;E&nbsp;N&nbsp;G&nbsp;I&nbsp;N&nbsp;E&nbsp;E&nbsp;R</h1>
          <a href="#about-me" className="bg-[#363636] text-white w-fit p-2 rounded hover:bg-[#111] m-2">A B O U T &nbsp; M E</a>
        </div>
      </div>

    </main>
  );
}
