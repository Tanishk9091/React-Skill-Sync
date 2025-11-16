import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// no client-side hashing — store plaintext in localStorage fallback as requested

export default function SignupPage({ onSignup }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const validatePassword = (value) => {
    // Minimum 8 characters, at least one uppercase, one lowercase, and one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return re.test(value)
  
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!name.trim()) next.name = 'Name is required.'
    if (!email.trim()) next.email = 'Email is required.'
    else if (!validateEmail(email)) next.email = 'Please enter a valid email address.'
    if (!password.trim()) next.password = 'Password is required.'
    else if (!validatePassword(password)) next.password = 'Password must be at least 8 characters and include upper & lower case letters and a number.'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // prefer server signup, fallback to localStorage
      (async () => {
        try {
          const res = await fetch('/api/signup', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
          })
          if (res.ok) {
            onSignup?.({ name, email })
            // inform user
            alert('Signup successful — you may now login')
            setShowModal(true)
            setTimeout(() => navigate('/login'), 1200)
            return
          } else {
            const body = await res.json().catch(()=>({}))
            alert('Signup failed: ' + (body.error || res.statusText))
          }
          // if server returns error, fallback to local save below
        } catch (err) {
          console.warn('Server signup failed, falling back to localStorage', err)
          alert('Server unreachable — saving account locally for demo')
        }

        // fallback: persist user locally so login can be used later
        try {
          const users = JSON.parse(localStorage.getItem('users') || '[]')
          // plaintext fallback per your instruction (dev/demo only)
          users.push({ name, email, password })
          localStorage.setItem('users', JSON.stringify(users))
          alert('Account saved locally (demo only). You can now login.')
        } catch (err) {
          console.error('Failed to save user to localStorage', err)
          alert('Failed to save user locally')
        }
        onSignup?.({ name, email })
        setShowModal(true)
        setTimeout(() => navigate('/login'), 1200)
      })()
    }
  }

  return (
    <main>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Signup successful</h4>
            <p>Opening login page...</p>
          </div>
        </div>
      )}
      <div className="container">
        <h3>Sign up</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="signup-name">Full name</label>
            <input id="signup-name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            {errors.name && <div className="error-message" style={{ display: 'block' }}>{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors.email && <div className="error-message" style={{ display: 'block' }}>{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {errors.password && <div className="error-message" style={{ display: 'block' }}>{errors.password}</div>}
          </div>
          <button type="submit" className="form-btn">Create account</button>
          <div className="form-footer">Already have an account? <a href="/login">Log in</a></div>
        </form>
      </div>
    </main>
  )
}


