import React from 'react'

function Carousel() {
    return (
        <>
            <div className="container-fluid pt-4 pb-4" style={{ minHeight: "40vh", backgroundColor: "#273F4F" }} data-aos="fade-up">
                <h1 className="text-light text-center " style={{ fontSize: "32px" }}>Accelerate Your career with world's Best University's</h1>
                <h5 className='text-center text-secondary mt-md-0 mt-3' style={{ fontSize: "20px" }}>Choose from 7 Existing University</h5>
                <marquee behavior="scroll" direction="" loop={true} scrollamount="15">
                    <div className=" mt-5" style={{width: "1300px", display: "flex", flexShrink: 0, flexGrow: 3, gap: 100 }}>
                        <div className="university-card d-flex align-items-end justify-content-center" style={{ width: "400px", height: "400px", backgroundImage: "url('oxford.png')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3'>Oxford</h3>
                        </div>

                        <div className="university-card d-flex align-items-end justify-content-center" style={{ width: "400px", height: "400px", backgroundImage: "url('cambridge.jpeg')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3'>Cambridge</h3>
                        </div>

                        <div className="university-card d-flex align-items-end justify-content-center px-4" style={{ width: "400px", height: "400px", backgroundImage: "url('ucl.jpeg')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3 mx-4'>University of London</h3>
                        </div>
                    </div>
                </marquee>


            </div>
        </>
    )
}

export default Carousel