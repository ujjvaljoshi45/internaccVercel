import React from 'react'

function Carousel() {
  return (
    <>
        <div className="container-fluid pt-4 pb-4" style={{minHeight:"40vh",backgroundColor:"#273F4F"}} data-aos="fade-up">
            <h1 className="text-light text-center " style={{fontSize:"32px"}}>Accelerate Your career with world's Best University's</h1>
            <h5 className='text-center text-secondary mt-md-0 mt-3' style={{fontSize:"20px"}}>Choose from 7 Existing University</h5>
                <marquee behavior="scroll" direction="" loop={true} scrollamount="15">
            <div className="gap-5 mt-5" style={{width:"2200px",display:"flex",flexShrink:0,flexGrow:3}}>
                    <div className="university-card d-flex align-items-end justify-content-center" style={{width:"300px",height:"350px",backgroundImage:"url('https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg')",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"}}>
                        <h3 className='text-center text-light mb-3'>Havard</h3>
                    </div>
                     <div className="university-card d-flex align-items-end justify-content-center" style={{width:"300px",height:"350px",backgroundImage:"url('https://res.cloudinary.com/practicaldev/image/fetch/s--My3HRSGN--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cktz4n49si01g5b1gh04.jpg ')",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"}}>
                        <h3 className='text-center text-light mb-3'>MIT</h3>
                    </div>
                     <div className="university-card d-flex align-items-end justify-content-center" style={{width:"300px",height:"350px",backgroundImage:"url('https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMG9mJTIwY2FtYnJpZGdlfGVufDB8fDB8fHww&w=1000&q=80')",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"}}>
                        <h3 className='text-center text-light mb-3'>Cambridge</h3>
                    </div>
                    <div className="university-card d-flex align-items-end justify-content-center" style={{width:"300px",height:"350px",backgroundImage:"url('https://www.usnews.com/dims4/USNEWS/c1b37ea/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F64%2F8948b60c1375c3871898da724f2083%2Fcollege-photo_15870.jpg')",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"}}>
                        <h3 className='text-center text-light mb-3'>Michigan</h3>
                    </div>
                    <div className="university-card d-flex align-items-end justify-content-center" style={{width:"300px",height:"350px",backgroundImage:"url('https://i.ytimg.com/vi/imh45vQXlC8/maxresdefault.jpg')",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"}}>
                        <h3 className='text-center text-light mb-3'>Wingate</h3>
                    </div>
                    </div>
                    </marquee>
                    
            
        </div>
    </>
  )
}

export default Carousel