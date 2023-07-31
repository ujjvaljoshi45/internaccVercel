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
                    <img src="worldmap.png" className="img-fluid" style={{width:"98vw"}} />
                    <h1 style={{
                        color: '#000',
                        fontFamily: 'cookie',
                        fontSize: '96px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        letterSpacing: '9.6px'
                    }}>Reach</h1>
                    <h1 style={{
                        color: "#717372",
                        fontFamily: "cabin",
                        letterSpacing: "9.6px",
                        fontSize: '48px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                        }}>GLOBAL </h1>
                <h1 className="text-center mt-5" data-aos="fade-up">LOREM IPSUM</h1>
                <p className="text-center pb-4" data-aos="fade-up">lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text
                    lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text </p><br />

                <h1 className="text-center my-4 mt-5" data-aos="fade-left">
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
                        <img className="img-fluid d-block mx-auto" src="spain.png" alt="" />
                        <h3 className="text-center">Spain</h3>
                    </div>
                    <div className="col  thumb " data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="aus.png" alt="" />
                        <h3 className="text-center">Australia</h3>
                    </div>
                </div>
                <div className=" mt-3 mb-5 row row-cols row-cols-2 row-cols-lg-4 mx-auto">
                    <div className="col thumb" data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="uk.png" alt="" />
                        <h3 className="text-center">United Kindgom</h3>
                    </div>
                    <div className="col thumb" data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="us.png" alt="" />
                        <h3 className="text-center">United States</h3>
                    </div>
                    <div className="col thumb" data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto" src="spain.png" alt="" />
                        <h3 className="text-center">Spain</h3>
                    </div>
                    <div className="col thumb" data-aos="fade-down">
                        <img className="img-fluid d-block mx-auto"  src="aus.png" alt="" />
                        <h3 className="text-center">Australia</h3>
                    </div>
                </div>
            </div>
        </div >

            <Whyus />


        </>
    )
}

export default Accomodation