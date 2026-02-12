import { useEffect, useState } from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Dither from "./effects/Dither/Dither"
import "./App.css"

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="app-dither">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.1}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <Navbar scrolled={scrolled} />
      <Hero scrolled={scrolled} />
      <Skills />
    </>
  )
}
