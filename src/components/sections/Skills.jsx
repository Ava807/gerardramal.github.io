import TiltedCard from "../ui/TiltedCard/TiltedCard"
import "./Skills.css"

export default function Skills() {
  return (
    
    <section className="skills">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">

        <TiltedCard
          imageSrc="src/components/public/skills/wordpress.png"
        altText="Wordpress"
  captionText="Wordpress"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={30}
  scaleOnHover={1}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text">
      Wordpress
    </p>
  }
        />

        <TiltedCard
          imageSrc="/skills/unity.png"
          captionText="Unity"
          containerHeight="260px"
          containerWidth="260px"
          imageHeight="260px"
          imageWidth="260px"
          showMobileWarning={false}
          showTooltip
        />

        <TiltedCard
          imageSrc="/skills/three.png"
          captionText="Three.js"
          containerHeight="260px"
          containerWidth="260px"
          imageHeight="260px"
          imageWidth="260px"
          showMobileWarning={false}
          showTooltip
        />

      </div>
    </section>
  )
}
