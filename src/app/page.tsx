import MyComponent from "./components/bg";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Poppins } from "next/font/google";
const poppins=Poppins({ weight:'600',style:'normal',subsets: ['latin'] });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <MyComponent/>
        <Navbar/>
        <h1 className={poppins.className}>Transform Ideas</h1>
  
        <Footer/>
    </main>
  );
}
