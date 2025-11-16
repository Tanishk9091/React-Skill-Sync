import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!email.trim()) next.email = 'Email is required.'
    else if (!validateEmail(email)) next.email = 'Please enter a valid email address.'
    if (!password.trim()) next.password = 'Password is required.'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      onLogin?.(email)
      // show modal confirmation then redirect to home
      setShowModal(true)
      setTimeout(() => {
        navigate('/')
      }, 1200)
    }
  }

  return (
    <main>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Login Successful</h4>
            <p>Redirecting to Home...</p>
          </div>
        </div>
      )}
      <div className="container">
        <h3>Login</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors.email && <div id="login-email-error" className="error-message" style={{ display: 'block' }}>{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {errors.password && <div id="login-password-error" className="error-message" style={{ display: 'block' }}>{errors.password}</div>}
          </div>
          <button className="form-btn" type="submit">Login</button>
          <div className="form-footer">Don't have an account? <a href="/signup">Sign up</a></div>
        </form>
      </div>
    </main>
  )
}


