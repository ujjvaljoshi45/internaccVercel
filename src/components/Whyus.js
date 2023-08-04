import React from "react";

function Whyus() {
    return (
        <>

            <div className="container-fluid py-4" style={{ minHeight: "70vh", backgroundColor: "#273F4F" }} data-aos="fade-up">
                <div className="container">
                    <h4 className="text-start my-md-1 my-4" style={{ fontSize: "48px", fontWeight: "700", color: "#C4725E" }}>Why us</h4>
                    <h4 className="ms-4 mt-2" style={{ fontSize: "26px", fontWeight: "700", color: "#ffffff" }}>Empowering Your Dreams, One Experience at a Time: Choose Excellence.</h4>
                    <div className="row mt-5">
                        <div className=" col-md-3 my-md-0 mt-4">
                            <h5 className="text-center mb-3" style={{ fontSize: "26px", fontWeight: "900", color: "#C4725E" }}>Why Internacc</h5>
                            <h6 className='text-left text-light' style={{ fontSize: "25px", fontWeight: "400", textAlign: "justify" }}>We are a leading global provider of international internships and student accommodation solutions.
                                With a strong focus on facilitating meaningful professional experiences for students and young professionals, we strive to connect talented individuals with reputable organizations across various industries.</h6>
                        </div>
                        <div className="offset-md-1 col-md-3 my-md-0 mt-4">
                            <h5 className="text-center mb-3" style={{ fontSize: "26px", fontWeight: "900", color: "#C4725E" }}>Student Accomodations</h5>
                            <h6 className='text-left text-light' style={{ fontSize: "25px", fontWeight: "400", textAlign: "justify" }}>We offer housing for international students in a number of nations, including the UK, USA, Canada, Australia, and Ireland. Most Convenient Housing: We make sure you are assigned to the most convenient housing option close to your university.</h6>
                        </div>
                        <div className="offset-md-1 col-md-3 my-md-0 mt-4">
                            <h5 className="text-center mb-3" style={{ fontSize: "26px", fontWeight: "900", color: "#C4725E" }}>International Internship</h5>
                            <h6 className='text-left text-light' style={{ fontSize: "25px", fontWeight: "400", textAlign: "justify" }}>INTERNACC has established a strategic partnership with a world-renowned organization specializing in summer internships offered at prestigious universities such as Oxford, Cambridge, and UCL.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyus;