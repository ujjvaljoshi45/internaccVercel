import React from "react"
import Header from './Header'
import Footer from './Footer'
import Whyus from "./Whyus"

function Accomodation() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row" data-aos="fade-right">
                    <img src="worldmap.png" className="img-fluid" style={{ width:"98vw"}} />
                    
                <h1 className="text-center mt-5 mb-3" data-aos="fade-up">Accomodations</h1>
                <p className="text-center pb-4" data-aos="fade-up">We offer housing for international students in a number of nations, including the UK, USA, Canada, Australia, and Ireland. Most Convenient Housing: We make sure you are assigned to the most convenient housing option close to your university.</p><br />

                <h1 className="text-center my-4 mt-5" data-aos="fade-down">
                    WE ARE AVAILABLE IN
                </h1>
                <div className=" mt-5 row row-cols row-cols-2 row-cols-lg-4  mx-auto ">
                    <div className="col  thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="uk.png" alt="" />
                        <h3 className="text-center">United Kindgom</h3>
                    </div>
                    <div className="col  thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="us.png" alt="" />
                        <h3 className="text-center">United States</h3>
                    </div>
                    <div className="col  thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="canada.png" alt="" />
                        <h3 className="text-center">Canada</h3>
                    </div>
                    <div className="col  thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="aus.png" alt="" />
                        <h3 className="text-center">Australia</h3>
                    </div>
                </div>
                <div className=" mt-3 mb-5 row row-cols row-cols-2 row-cols-lg-4 mx-auto">
                    <div className="col thumb d-lg-block d-none" data-aos="fade-down">
                        </div>
                    <div className="col thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="ireland.png" alt="" />
                        <h3 className="text-center mt-1">Ireland</h3>
                    </div>
                    <div className="col thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto"  src="europe.png" alt="" />
                        <h3 className="text-center">Europe</h3>
                    </div>
                    
                </div>
            </div>
        </div >
            <Whyus />
        </>
    )
}

export default Accomodation