import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* CONTENIDO EXTRA PARA SCROLL */}
      <section style={{ height: "120vh", background: "#111" }}>
        <h2 style={{ color: "white", padding: "120px 40px" }}>
          Projects coming soon...
        </h2>
      </section>
    </>
  )
}
