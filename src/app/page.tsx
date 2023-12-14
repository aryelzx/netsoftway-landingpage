import About from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/Navbar";

//todo - navegacao com id e scroll suave
export default function App() {
  return (
    <main className="bg-gradient-to-l from-[#1e1e59] to-[#3f434b] h-screen w-screen">
      <NavBar />
      <Home />
      <About />
    </main>
  )
}
