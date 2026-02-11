import { useEffect, useState } from "react"
import "./Navbar.css"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
              <div className="nav-logo-text">
        {scrolled ? "GR" : ""}
      </div>

      <button className="nav-hamburger">
        <span />
        <span />
        <span />
      </button>



      <button className="nav-cta">Get Started</button>
    </header>
  )
}
