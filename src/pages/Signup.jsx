import React, { useState } from 'react'

export default function SignupPage({ onSignup }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!name.trim()) next.name = 'Name is required.'
    if (!email.trim()) next.email = 'Email is required.'
    else if (!validateEmail(email)) next.email = 'Please enter a valid email address.'
    if (!password.trim()) next.password = 'Password is required.'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      onSignup?.({ name, email })
      alert('Signup successful! You can now log in.')
    }
  }

  return (
    <main>
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


