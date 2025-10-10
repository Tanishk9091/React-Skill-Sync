import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="obj-width">
        <div className="top">
          <div>
            <a href="/" className="logo-text">SkillSync</a>
            <p>Search your desired jobs</p>
          </div>
          <div>
            <a href="#"><i className="bx bxl-facebook-square"></i></a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>Project</h3>
            <a href="#">Changelog</a>
            <a href="#">Status</a>
            <a href="#">Licence</a>
            <a href="#">All Version</a>
          </div>
          <div>
            <h3>Community</h3>
            <a href="#">GitHub</a>
            <a href="#">Issues</a>
            <a href="#">Project</a>
            <a href="#">Twitter</a>
          </div>
          <div>
            <h3>Others</h3>
            <a href="#">Terms of Services</a>
            <a href="#">Status</a>
            <a href="#">Privacy Policy</a>
            <a href="#">License</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


