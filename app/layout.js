import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  weight: ['200','300','400','600'],
  subsets: ['latin']
})

export const metadata = {
  title: "Chris Ailey",
  description: "Portfolio of Chris Ailey, freelance web developer and software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
      </head>

      <body className={`${raleway.className} font-[300] text-white h-screen`}>
        
        <div className="relative min-h-screen">
          <Navbar/>
          
          <div>
            {children}
          </div>
          
          <div className="absolute bottom-0 w-full">
            <Footer/>
          </div>
        </div>
        
      </body>
    </html>
  );
}
