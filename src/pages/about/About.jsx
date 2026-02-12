import './About.css'

function About() {
  return (
    <main className="about">
      <h1>About TravelWeb</h1>

      <section className="about-intro">
        <p>
          TravelWeb is a project created to inspire people to discover new
          destinations around the world.
        </p>
        <p>
          We believe traveling helps people grow, learn and connect with other
          cultures.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide travelers with inspiration, practical
          guides, and curated destinations that make planning trips easier and
          more exciting.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>

        <div className="values">
          <div className="value-card">
            <h3>Exploration</h3>
            <p>Encouraging people to explore new places and step outside their comfort zone.</p>
          </div>

          <div className="value-card">
            <h3>Connection</h3>
            <p>Building bridges between cultures through meaningful travel experiences.</p>
          </div>

          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Promoting responsible travel that respects local communities and nature.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
