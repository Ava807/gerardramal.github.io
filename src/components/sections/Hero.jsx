import Navbar from "../layout/Navbar"
import "./Hero.css"

export default function Hero({ scrolled = false }) {
  return (
    <section className="hero">
      {/* Navbar */}
      <Navbar scrolled={scrolled} />

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
