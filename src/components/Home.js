import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Linkcards from './Linkcards'
import Whyus from './Whyus'
import { useHref, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'
import { Client, Databases, ID, Query } from 'appwrite';
import { Link } from 'react-router-dom'
function Home(props) {
    const [searchQuery, updateSearchQuery] = useState()
    const [data, updateData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        topic: "course",
        datetime: "",
        how: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        updateData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.fname === "" || data.lname === "" || data.email === "" || data.phone === "" || data.topic === "" || data.datetime === "" || data.how === "") {
            toast.error("Please fill all the fields.")
        } else {
            const client = new Client();
            client
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject('64b92b85162ae2a4bba8');
            const database = new Databases(client);
            const promise = database.createDocument('64b92e033b36ffa5f41d', '64be9ad43925e3bd649b',ID.unique(),{
                fname: data.fname,
                lname: data.lname,
                phone: data.phone,
                email: data.email,
                date: data.datetime,
                message: data.how,
                subject: data.topic,
            });
            promise.then(function (response) {
                // console.log(response);
                document.getElementById("closeBtn").click()
                toast.success("Your message has been sent.")
            }).catch(function (error) {
                console.log(error);
                toast.error("Something went wrong.")
            });
        }
        // console.log(data);
    }

    // function for seraching course
    const searchCourse = () => {
        // condition to check wheather course is there or not
        let searchValue = document.getElementById("search").value;
        const client = new Client();
            client
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject('64b92b85162ae2a4bba8');
        const database = new Databases(client);
        const promise = database.listDocuments('64b92e033b36ffa5f41d', '64b92e0896b7047d3196', [
            Query.search("name", searchValue),
        ]);
        promise.then(function (response) { 
            // console.log(response);
            if(response.total === 0){
                toast.error("Course Does not exist.")
            }else{
                toast.success("Course exist.")
                props.updateSearch(response)
                navigate("/searchresult")
            }
         } ).catch(function (error) { 
            console.log(error);
            toast.error("Course Does not exist.")
         });
       
        // console.log(searchQuery);
    }
    useEffect(() => {
        setTimeout(() => {
            if (document.getElementById("modalBtn")) {
                
                document.getElementById("modalBtn").click()
            }
        },2000)
    },[])
    return (
        <>
            <ToastContainer />
            <Header />
            <a href="https://wa.me/+917405123444?text=" target='_blank' className=' p-4 text-decoration-none d-flex justify-content-center align-items-center rounded' style={{width:"70px",height:"60px",position:"fixed",bottom:38,right:18,backgroundColor:"#25D366", zIndex: 12}}><i className="fs-1 bi bi-whatsapp m-2 text-light" style={{ fontSize: "30px" }}></i></a>
            
            <div className="container-fluid " style={{ minHeight: "600px", backgroundColor: "rgba(224, 224, 224, 1)" }}>
                <div className="container pt-3 d-flex justify-content-center  d-md-block">
                    <div className="row align-items-start">
                        <div className="col-lg-8 mx-auto d-flex flex-column justify-content-start" data-aos="fade-right">
                            <h1 className='mt-5 ' style={{ fontSize: "3.5rem", fontFamily: "sans-serif", fontWeight: 600 }}>Get international</h1>
                            <h1 style={{
                                fontSize: "2.5rem", fontFamily: "sans-serif",
                                backgroundImage: `linear-gradient(90deg,rgba(185, 71, 44, 0.72),rgba(49, 90, 117, 1))`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>Internship <span>|</span> Accomodation</h1>
                            <div className="search-bar mt-4 d-flex mx-auto mx-md-0">
                                <input type="text" name="search" id="search" className="form-control" placeholder='Search' style={{ maxWidth: "250px" }} onChange={(e) => { updateSearchQuery(e.target.value) }} />
                                <button className="ms-4 btn btn-primary px-4" style={{ backgroundColor: "#315A75", borderColor: "#315A75"}} onClick={searchCourse}>
                                    Search
                                </button>
                            </div>
                            <div className="home-card mt-5 mx-md-0 w-md-auto mx-auto mt-4  rounded" style={{ width: "80%", maxWidth: "400px" }}>
                                <div className="row rounded bg-light">
                                    <div className="col-6 p-md-2 p-1 rounded-start border border-2 border-dark" ><h5>Be The First</h5><h6>Apply For Internship & Accomodation</h6></div>
                                    <div className="col-6 rounded-end d-flex justify-content-center align-items-center border border-2 border-dark">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#315A75", borderColor: '#315A75' }} onClick={() => { document.getElementById("modalBtn").click() }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-5 mt-lg-0 mt-5 mx-md-0 mx-auto" data-aos="fade-up" style={{ backgroundImage: `linear-gradient(180deg,#F57455A6,#315A75EB)`, borderRadius: "90%" ,maxWidth:"95vw"}}>
                            <img src="avatar.png" alt="" className="img-fluid d-block mx-auto"  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5" style={{ backgroundColor: "#FFFFFF", minHeight: "50vh" }} data-aos="fade-up">
                <h1 className="text-center " style={{ fontWeight: "700", fontSize: "48px" }}>What we do</h1>

                <div className="do-texts mt-5 mx-auto " style={{maxWidth:"700px "}}>
                    <h3 className='text-center' style={{ fontWeight: "400", fontSize: "22px" }}>We are a leading global provider of international internships and student accommodation solutions. With a strong focus on facilitating meaningful professional experiences for students and young professionals, we strive to connect talented individuals with reputable organizations across various industries.  </h3>
                </div>
            </div>
            <Carousel />

            <div className="container-fluid px-5 " style={{ minHeight: "65vh", backgroundColor: "#ffffff" }} data-aos="zoom-in">
                <h2 className="mt-5 text-center mb-5" style={{ fontWeight: "700", fontSize: "40px" }}>Build your profile stronger with our internship</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Linkcards title="Enterprenuership" />
                    </div>
                    <div className="col-md-4">
                        <Linkcards title="Art & Humanities" />
                    </div>
                    <div className="col-md-4">
                        <Linkcards title="Medicine" />
                    </div>
                    <div className="col-md-4">
                        <Linkcards title="Innovation & Technology" />
                    </div>
                    <div className="col-md-4">
                        <Linkcards title="Economics" />
                    </div>
                    <div className="col-md-4">
                        <div className="linkcard rounded border border-2 border-dark px-lg-5 px-2 py-4 w-100 my-4" style={{ backgroundColor: "#315A75" }} >
                            <Link to="/course" className="text-start text-light text-decoration-none  " style={{ fontSize: "25px", fontWeight: "700" }}>Explore Other <i className="ms-2 bi bi-arrow-right "></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* TODO why us */} <Whyus />

                            


            <div className="container mt-5" data-aos="fade-up" style={{ position: "relative", minHeight: "70vh" }}>
                <div className="card1 rounded" style={{ position: "absolute", width: "60%", backgroundColor: "#315A75", minHeight: "65vh", zIndex: 0 }}>
                    <h1 className="text-start my-5 w-50 ms-md-5 ms-2 text-light" style={{}}>
                        Get more informations about internship and Accomodations
                    </h1>
                    <button className="btn btn-light d-block ms-md-5 ms-2 px-4 fs-5" onClick={()=>{navigate("/course")}}>Read More</button>
                </div>
                <div className="card2 rounded d-md-inline-block" style={{ position: "absolute", minHeight: "50vh", width: "50%", right: 0, top: "8vh", zIndex: 5 ,backgroundImage:"url('readmore_img.jpeg')",backgroundPosition:"center"}}></div>
            </div>



            {/* Code for modal */}
            {/* Modal trigger button */}
            <button type="button" id='modalBtn' className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className=" my-0 px-md-3 px-1" >

                                    <div className="d-flex justify-content-between align-items-center ">
                                        <h3>Send a Message</h3>
                                        <i className="bi bi-envelope fs-3"></i>
                                    </div>
                                    <h5>we will contact you as soon as possible.</h5>
                                    <div className="row">
                                        <div className="col-md-6 my-3">
                                            <input type="text" name='fname' className="border-0 border-bottom w-100" id="firstname" onChange={handleChange}
                                                aria-describedby="emailHelp" placeholder="First Name" required={true} style={{ outline: "none" }} />
                                        </div>
                                        <div className="col-md-6 my-3">
                                            <input type="text" name='lname' className="border-0 border-bottom w-100" id="lastname" onChange={handleChange}
                                                aria-describedby="emailHelp" placeholder="Last Name" required={true} style={{ outline: "none" }} />
                                        </div>
                                    </div>
                                    <input type="text" className="border-0 border-bottom w-100 my-3" id="phone"
                                        aria-describedby="emailHelp" name='phone' placeholder="Phone" required={true} maxLength={10} style={{ outline: "none" }} onChange={handleChange} />

                                    <input type="email" className="border-0 border-bottom w-100 my-3" id="email"
                                        aria-describedby="emailHelp" name='email' placeholder="Email" required={true} style={{ outline: "none" }} onChange={handleChange} />

                                    <p className="mt-3 mb-2 text-secondary">Choose Topic</p>

                                    <div className="d-flex gap-md-4 gap-2 flex-wrap">
                                        <input type="radio" name='topic' className="btn-check " id="btn-check-1-outlined" defaultChecked autoComplete="off" onChange={() => { updateData({ ...data, topic: "course" }) }} />
                                        <label className="btn btn-outline-secondary rounded-pill px-4 py-1 " htmlFor="btn-check-1-outlined" >Course</label>

                                        <input type="radio" name='topic' className="btn-check " onChange={() => { updateData({ ...data, topic: "accomodation" }) }} id="btn-check-2-outlined" autoComplete="off" />
                                        <label className="btn btn-outline-secondary rounded-pill px-4 py-1" htmlFor="btn-check-2-outlined">Accomodation</label>

                                        <input type="radio" name='topic' className="btn-check " onChange={() => { updateData({ ...data, topic: "other" }) }} id="btn-check-3-outlined" autoComplete="off" />
                                        <label className="btn btn-outline-secondary rounded-pill px-4 py-1" htmlFor="btn-check-3-outlined">Other</label>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">

                                        <p className="my-4 text-secondary">When We Contact You </p>
                                        <input type="datetime-local" name='datetime' onChange={handleChange} className="rounded-pill px-2 text-secondary border  border-secondary" required={true} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ outline: "none" }} />

                                    </div>

                                    

                                    <p className="mt-2 text-secondary">How can we help?</p>
                                    <textarea className="form-control   w-100" name='how' onChange={handleChange} id="Textarea1" rows="3" ></textarea>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="closeBtn" className="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn text-light rounded-pill px-4" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit}> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default Home