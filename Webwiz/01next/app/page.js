import Navbar from "./Components/Navbar"
import Landing from "./Components/Landing"
export default function Home() {
  return (
   <>
     <main className="h-[100vh] bg-gradient-to-b from-[rgb(0,0,0,0.3)] to-[rgb(0,0,0,0.3])]">
        <Navbar/>
        <Landing/>
     </main>
   </>
  );
}
