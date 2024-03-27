import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing"
export default function Home() {
  return (
   <>
     <main className="h-[100vh]">
        <Navbar/>
        <Landing/>
     </main>
   </>
  );
}
