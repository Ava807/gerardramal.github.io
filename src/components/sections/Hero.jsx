import Dither from "../../effects/Dither/Dither"
import Navbar from "../layout/Navbar"
import "./Hero.css"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="hero">

      {/* Fondo */}
      <div className="hero-bg">
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

      {/* Navbar */}
      <Navbar />

      {/* Título */}
      <div className="hero-content">
        <h1 className={`hero-title ${scrolled ? "animate-g animate-r" : ""}`}>
          <span className="hero-title-g">G</span>
          <span>erard </span>
          <span className="hero-title-r">R</span>
          <span>amal</span>
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer | Cibersecurity
        </p>
      </div>

    </section>
  )
}
