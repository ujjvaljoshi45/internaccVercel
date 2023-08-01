import React, { useEffect } from 'react'
import { Link, useHref } from 'react-router-dom'
function Footer() {
    const url = useHref()
    // console.log(url);
    useEffect(()=> {
        window.scrollTo(0,0)
    },[url])
    return (
        <>
            <div className="container-fluid py-4 pb-4"  style={{ backgroundColor: "#EDEDED" }}>
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4" data-aos="fade-up">
                            <h3 style={{ fontSize: "36px", fontWeight: "700" }}>SUBSCRIBE</h3>
                            <h5 style={{ fontSize: "14px", fontWeight: "600" }}>Interested in career opportunities and good accomodation abroad ?</h5>
                            <div className="d-flex mt-3">
                                <input type="text" name="" id="" className='form-control w-75' placeholder='enter your email address' />
                                <button className="btn btn-danger ms-2 px-4" style={{ backgroundColor: "#791818" }}>Subscribe</button>
                            </div>
                        </div>
                        <div className="col-md-8 mt-md-0 mt-4" data-aos="fade-up">
                            <div className="row">
                                <div className=" pt-4 col-6 d-flex  justify-content-center" >
                                    <ul style={{ listStyleType: "none", fontSize: "18px", fontWeight: "400" }} >
                                        <Link className='text-decoration-none text-dark' to="/"><li>HOME</li></Link>
                                        <Link className='text-decoration-none text-dark' to="/course"><li>COURSE</li></Link>
                                        <Link className='text-decoration-none text-dark' to="/accomodation"><li>ACCOMODATION</li></Link>
                                        <Link className='text-decoration-none text-dark' to="/blog"><li>BLOG</li></Link>
                                    </ul>
                                </div>
                                <div className="col-6 d-flex pt-4 justify-content-center">
                                    <ul style={{ listStyleType: "none", fontSize: "18px", fontWeight: "400" }} >
                                        <Link className='text-decoration-none text-dark' to="/about"><li>ABOUT US</li></Link>
                                        <Link className='text-decoration-none text-dark' to="/contact"><li>CONTACT US</li></Link>
                                        <Link className='text-decoration-none text-dark'><li>PRIVACY POLICY</li></Link>
                                        <Link className='text-decoration-none text-dark'><li>TERMS & CONDITIONS</li></Link>
                                    </ul></div>
                            </div>
                        </div>

                    </div>
                    <hr className='d-block mx-auto mt-5' style={{ minHeight: "3px", backgroundColor: "#000000" }} />
                </div>

                <div className="container mx-auto   mt-5 d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center pb-5">
                    <div className="card1  d-flex flex-column justify-content-center align-items-center" data-aos="fade-down" style={{ maxWidth: "300px" }}>
                        <img src="dark.png" alt="" className="img-fluid" style={{ maxHeight: "90px" }} />
                        <h5 className='text-center ps-3' style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "3px" }}>INTERNACC</h5>
                        <h6 style={{ fontSize: "12px" }}>INSPIRE <span style={{fontWeight:"900"}}>&#183;</span> IGNITE <span style={{fontWeight:"900"}}>&#183;</span> TRANSFORM <span style={{fontWeight:"900"}}>&#183;</span> SHINE</h6>
                    </div>
                    <div className="card2 d-flex flex-column justify-content-center" data-aos="fadedown" style={{ maxWidth: "300px" }}>
                        <div className='d-flex justify-content-center gap-3'>
                            <i className="bi bi-instagram" style={{ fontSize: "30px" }}></i>
                            <i className="bi bi-facebook" style={{ fontSize: "30px" }}></i>
                            <i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i>
                            <i className="bi bi-twitter" style={{ fontSize: "30px" }}></i>
                            <i className="bi bi-youtube" style={{ fontSize: "30px" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer