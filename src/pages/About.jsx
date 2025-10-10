import React from 'react'

export default function About() {
  return (
    <main className="sec-space">
      <div className="container-page">
        <section className="hero">
          <h1>About SkillSync</h1>
          <p className="sub">SkillSync is a skills‑first job platform that helps talent get discovered for what they can do, not just where they’ve worked. We match people and roles with real skill signals, portfolios, and outcomes.</p>
        </section>
        <section className="sections">
          <div className="card grid-2">
            <div>
              <h2>Our mission</h2>
              <p>Unlock opportunity for everyone by making hiring fair, fast, and focused on skills. We believe careers grow when people can show their abilities clearly and companies can see fit beyond a resume.</p>
            </div>
            <div>
              <h2>How SkillSync helps</h2>
              <ul>
                <li>Personalized job discovery powered by your skills</li>
                <li>Profiles that highlight projects, certifications, and impact</li>
                <li>Smart filters for salary, type, and flexibility</li>
                <li>Faster screening with verified skill signals</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h2>What we value</h2>
            <div className="badges">
              <span className="badge">Skills over titles</span>
              <span className="badge">Clarity and fairness</span>
              <span className="badge">Speed and simplicity</span>
              <span className="badge">Privacy by default</span>
              <span className="badge">Continuous learning</span>
            </div>
          </div>
          <div className="card grid-2">
            <div>
              <h2>For candidates</h2>
              <p>Showcase your real work—add projects, skills, and proof. Get matched to roles that fit you, not just your title. Apply once, get noticed faster.</p>
            </div>
            <div>
              <h2>For companies</h2>
              <p>See beyond resumes with richer profiles and verified signals. Spend less time screening and more time meeting qualified people who can deliver.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}


