import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    // simple validation
    if (!data.name || !data.email || !data.message) {
      setStatus('Please fill all required fields.')
      return
    }
    if (!validateEmail(data.email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    // Save submission locally so you can review it later in devtools/localStorage
    try {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
      messages.push({ name: data.name, email: data.email, message: data.message, submittedAt: new Date().toISOString() })
      localStorage.setItem('contactMessages', JSON.stringify(messages))
      setStatus('Thanks! Your message was saved locally.');
      form.reset()
    } catch (err) {
      console.error('Failed to save contact message', err)
      setStatus('There was an error saving your message locally.')
    }
  }
  return (
    <main className="sec-space">
      <div className="page-container">
        <section className="hero">
          <h1>Contact us</h1>
          <p className="sub">Questions about jobs, profiles, or partnerships? Send a quick note and we’ll reply within one business day.</p>
        </section>
        <section className="grid">
          <div className="card card--accent">
            <h2>Send a message</h2>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="How can we help?" required />
              </div>
              <div className="actions">
                <button className="btn" type="submit">Send</button>
                <button className="btn ghost" type="reset">Reset</button>
                <span className="small" role="status" aria-live="polite">{status}</span>
              </div>
            </form>
          </div>
          <aside className="card">
            <h2>Reach us</h2>
            <div className="info-list">
              <div className="info-item"><div className="info-icon">✉️</div><div className="info-text"><strong>Email</strong><span>support@skillsync.example</span></div></div>
              <div className="info-item"><div className="info-icon">📞</div><div className="info-text"><strong>Phone</strong><span>+1 (555) 123-4567</span></div></div>
              <div className="info-item"><div className="info-icon">⏱️</div><div className="info-text"><strong>Hours</strong><span>Mon–Fri, 9:00–17:00</span></div></div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}


