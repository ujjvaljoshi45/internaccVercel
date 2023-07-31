import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const closeNavbar = () => {
        if (window.innerWidth <= 992) {
            document.getElementById("navtoggler").click()
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-aos="fade-down" style={{ backgroundColor: "#f6f6f6", boxShadow: "0 4 4 0" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{letterSpacing:"1px"}}> <img src="dark.png" alt="" className="img-fluid me-2" style={{ height: "47px"}} />INTERNACC</Link>
                    <button className="navbar-toggler" id="navtoggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="  collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className=" ms-auto navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" onClick={closeNavbar} aria-current="page" >HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/course" className="nav-link active" onClick={closeNavbar}  >COURSE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/accomodation" className="nav-link active" onClick={closeNavbar}  >ACCOMODATION</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/blog" className="nav-link active" onClick={closeNavbar}  >BLOG</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/about" className="nav-link active" onClick={closeNavbar}  >ABOUT US</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/contact" className="nav-link active" onClick={closeNavbar}  >CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header