import React from 'react'

function Carousel() {
    return (
        <>
            <div className="container-fluid pt-4 pb-4" style={{ minHeight: "40vh", backgroundColor: "#273F4F" }} data-aos="fade-up">
                <h1 className="text-light text-center " style={{ fontSize: "32px" }}>Accelerate Your career with world's Best University's</h1>
                <h5 className='text-center text-secondary mt-md-0 mt-3' style={{ fontSize: "20px" }}>Choose from 7 Existing University</h5>
                <marquee behavior="scroll" direction="" loop={true} scrollamount="15">
                    <div className=" mt-5" style={{width: "1300px", display: "flex", flexShrink: 0, flexGrow: 3, gap: 100 }}>
                        <div className="university-card d-flex align-items-end justify-content-center" style={{ width: "400px", height: "400px", backgroundImage: "url('https://adultlifestylecommunities.com/wp-content/uploads/2022/09/Untitled-design-4.png')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3'>Oxford</h3>
                        </div>

                        <div className="university-card d-flex align-items-end justify-content-center" style={{ width: "400px", height: "400px", backgroundImage: "url('https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMG9mJTIwY2FtYnJpZGdlfGVufDB8fDB8fHww&w=1000&q=80')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3'>Cambridge</h3>
                        </div>

                        <div className="university-card d-flex align-items-end justify-content-center px-4" style={{ width: "400px", height: "400px", backgroundImage: "url('https://s3.amazonaws.com/cms.ipressroom.com/173/files/20216/60f8edf32cfac2723398098e_Royce_Hall/Royce_Hall_mid.jpg')", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px" }}>
                            <h3 className='text-center text-light mb-3 mx-4'>University of Canada<br /> and Los Angeles</h3>
                        </div>
                    </div>
                </marquee>


            </div>
        </>
    )
}

export default Carousel