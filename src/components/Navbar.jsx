import React from 'react'

const Navbar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">FST-ADSI HOME</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">QUIENES SOMOS</a>
          <a className="nav-link active" aria-current='page' href="#">OBJETIVO</a>
          <a className="nav-link active" aria-current="page"  href="#">VISION</a>
          <a className="nav-link active "aria-current="page" href='#'>CONTACTENOS</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;