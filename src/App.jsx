import React, { useMemo, useState, useEffect } from 'react'
import { Link, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { JOBS } from './data/jobs.js'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import './styles.css'
// import './login.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function useAuth() {
  const [email, setEmail] = useState(() => localStorage.getItem('loggedInUserEmail') || '')
  useEffect(() => {
    if (email) localStorage.setItem('loggedInUserEmail', email)
    else localStorage.removeItem('loggedInUserEmail')
  }, [email])
  return { email, setEmail }
}


function Home() {
  const navigate = useNavigate()
  const [term, setTerm] = useState('')
  return (
    <>
    <section className="hero">
      <div className="hero-box obj-width">
        <div className="h-left">
          <h2>Connecting talent with top companies.</h2>
          <p>Find the right job that matches your skills, interests, and career goals.</p>
          <div className="search">
            <input type="text" id="hero-search-input" placeholder="search your job here.." value={term} onChange={(e)=>setTerm(e.target.value)} />
            <a id="g-btn" href="#" onClick={(e)=>{ e.preventDefault(); navigate(`/jobs?search=${encodeURIComponent(term)}`) }}>Search</a>
          </div>
        </div>
        <div className="h-right">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Professionals collaborating during a job search" loading="lazy" />
        </div>
      </div>
    </section>
    {/* Features */}
    <section className="features sec-space
    obj-width">
      <h2>Need something done?</h2>
      <p>
        Most viewed and all time top-selling services.
        top-selling services
      </p>
      <div className="fe-box">
        <div>
          <img src="/img1.png" alt="" />
          <h3>Post a job</h3>
          <p>It's free and easy to
            post a job.Simply fill in a 
            title, description.
          </p>
        </div>
        <div>
          <img src="/img2.png" alt="" />
          <h3>Choose freelancers</h3>
          <p>Find and hire the best freelancers for your work.
          </p>
        </div>
        <div>
          <img src="/img3.png" alt="" />
          <h3>Pay safely</h3>
          <p>Use secure payment methods with confidence.
          </p>
        </div>
        <div>
          <img src="/img4.png" alt="" />
          <h3>We're here to help</h3>
          <p>24/7 support for all your queries and issues.
          </p>
        </div>
      </div>
    </section>

    {/* Browse Jobs section under hero (preview of jobs) */}
    <section className="obj-width" style={{ padding: '2rem 0' }}>
      <div className="card" style={{ cursor: 'pointer' }} onClick={()=>navigate('/jobs')}>
        <h2 style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Browse Jobs</h2>
        <p style={{ margin: 0, textAlign: 'left' }}>Explore all openings and use filters for type and search.</p>
      </div>
      <div className="jobs-container" style={{ marginTop: '1rem' }}>
        {JOBS.slice(0, 4).map(item => (
          <Link key={item.index} to={`/jobs/${item.index}`} className="job-listings-link">
            <div className="jList card-clickable">
              <img src={item.image} alt={`${item.companyName} logo`} />
              <h3>{item.title}</h3>
              <p>{item.rate}</p>
              <span id="key">{item.av}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Trusted by */}
    <section className="trust sec-space obj-width">
      <h2>Trusted by the world's best</h2>
      <p>We partner with leading companies to bring you the best opportunities.</p>
      <div className="trusted-logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Google Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png" alt="Apple Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1024px-Tesla_logo.png" alt="Tesla Logo" />
      </div>
    </section>

    {/* Team */}
    <section className="team sec-space obj-width">
      <h2>Highest Rated Freelancers</h2>
      <p>Most viewed and all-time
          top selling services</p>

      <div className="team-container">
        <div className="freelancer-card">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="Profile picture of Robert Fox" />
          <h3>Robert Fox</h3>
          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <a href="#" className="profile-btn">View Profile</a>
        </div>

        <div className="freelancer-card">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" alt="Profile picture of another freelancer" />
          <h3>Jenny Wilson</h3>
          <div className="skill-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          <a href="#" className="profile-btn">View Profile</a>
        </div>
        <div className="freelancer-card">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="UI/UX Designer Portrait" />
          <h3>Priya Sharma</h3>
          <div className="skill-tags">
            <span>UI/UX Design</span>
            <span>Figma</span>
          </div>
          <a href="#" className="profile-btn">View Profile</a>
        </div>
      </div>
    </section>
    </>
  )
}

function JobsList() {
  const params = new URLSearchParams(window.location.search)
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState(params.get('search') || '')
  const filtered = useMemo(() => {
    return JOBS.filter(j => {
      const category = (j.av || '').toLowerCase().replace(/\s+/g, '')
      const activeMatch = active === 'all' || active === category
      const titleMatch = j.title.toLowerCase().includes(search.toLowerCase())
      return activeMatch && titleMatch
    })
  }, [active, search])

  return (
    <section className="jobs sec-space obj-width extra-space">
      <h2>Jobs in demand</h2>
      <p>Most viewed and all-time top-selling services</p>

      <form>
        <i className='bx bx-search'></i>
        <input type="text" placeholder="Search Jobs.." id="searchBar" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </form>

      <ul className="job-id job-filter-horizontal">
        {['all','freelancer','fulltime','parttime'].map(cat => (
          <li key={cat} data-target={cat} className={active===cat?'active':''} onClick={()=>setActive(cat)}>
            {cat === 'all' ? 'Recent Jobs' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>

            <div className="jobs-container">
        {filtered.map(item => (
          <Link key={item.index} to={`/jobs/${item.index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="jlist card-clickable" data-item={(item.av||'').toLowerCase().replace(/\s+/g, '')}>
              <img src={item.image} alt={`${item.title} logo`} width="40" height="40" />
              <div>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: 0 }}>{item.rate}</p>
              </div>
              <span id="key" style={{ marginLeft: 'auto' }}>{item.av}</span>
            </div>
          </Link>
        ))}
        {filtered.length===0 && <p>No jobs found.</p>}
      </div>
    </section>
  )
}

function JobDetail() {
  const id = Number(window.location.pathname.split('/').pop())
  const job = JOBS.find(j => j.index === id)
  if (!job) return <Navigate to="/jobs" replace />
  return (
    <div id="jobDetails" className="extra-space obj-width">
      <div className="job-header">
        <div className="job-img-row">
          <img src={job.image} alt="Company Logo" />
          <div>
            <h2>{job.companyName}</h2>
            <span>{job.location}</span>
          </div>
        </div>
        <a id="g-btn" href="#">Apply Now</a>
      </div>
      <div className="features sec-space">
        <div className="fe-box">
          <div><img src="/vacancy.png" alt="" /><h3>Vacancy</h3><p>{job.vacancy}</p></div>
          <div><img src="/fe 1.png" alt="" /><h3>Position</h3><p>{job.title}</p></div>
          <div><img src="/hour.png" alt="" /><h3>Hours</h3><p>{job.hours}</p></div>
          <div><img src="/salary.png" alt="" /><h3>Salary</h3><p>{job.rate}</p></div>
        </div>
      </div>
      <div className="job-description sec-space">
        <h3>Job Description</h3><p>{job.description}</p>
        <h3>Employment Status</h3><p>{job.av}</p>
        <h3>WorkPlace</h3><p>{job.workplace}</p>
        <h3>Educational Requirement</h3><p>{job.education}</p>
        <h3>Experience Requirements</h3><p>{job.experience}</p>
      </div>
    </div>
  )
}

function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!email.trim()) nextErrors.email = 'Email is required.'
    else if (!validateEmail(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!password.trim()) nextErrors.password = 'Password is required.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      onLogin(email)
      alert('Login Successful! Redirecting...')
      navigate('/')
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <label>Email
          <input id="login-email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        {errors.email && <div id="login-email-error" style={{ color: 'red' }}>{errors.email}</div>}

        <label>Password
          <input id="login-password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        {errors.password && <div id="login-password-error" style={{ color: 'red' }}>{errors.password}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default function App() {
  const { email, setEmail } = useAuth()
  const onLogout = () => setEmail('')
  const onLogin = (e) => setEmail(e)
  return (
    <div>
      <Navbar email={email} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}


