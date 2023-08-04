import React, { useEffect } from 'react'
import Blogcard from './Blogcard'
import { useState } from 'react'
import Header from './Header'
import { Client, Databases, ID, Query, Account } from 'appwrite';
import { ToastContainer, toast } from 'react-toastify';

function Blog(props) {
  const [blogs, updateBlogs] = useState([])
  // console.log(props.blogs);
  const [data, updateData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    datetime: "",
    how: ""
  })
  const handleChange = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.fname === "" || data.lname === "" || data.email === "" || data.phone === "" || data.datetime === "" || data.how === "") {
      // console.log("Please fill all the fields.");
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
                subject: "Blog Contact",
            });
            promise.then(function (response) {
                // console.log(response);
                toast.success("Your message has been sent.")
            }).catch(function (error) {
                console.log(error);
                toast.error("Something went wrong.")
            });
          }
    // console.log(data);
  }
  useEffect(() => {
    updateBlogs(props.blogs)
  }, [props.blogs])
  return (
    <>
    <ToastContainer />
      <Header />
      <div className="container-fluid d-flex align-items-end justify-content-center" data-aos="fade-up" style={{ minHeight: "30vh",backgroundColor:"#273F4F" }}>
        <h1 className="text-center mb-5" style={{ fontWeight: 700, fontSize: "50px", color: "#ffffff" }}>Our Latest Blogs</h1>
      </div>
      <div className="container-fluid px-3 my-5">
        <h3 className="text-start" data-aos="fade-up" style={{ color: "#C87437", fontFamily: "cookie", fontWeight: "400", fontSize: "75px" }}>
          Reading
        </h3>
        <div className="row g-0 row-cols-xl-3 row-cols-lg-2 row-cols-1">
          {blogs.map((element)=>{
            return <div className="col" key={element.$id} >
            <Blogcard heading={element.name} description1={element.shortdesc} id={element.$id} image={element.image}  />
          </div>
          })}
          
        </div>
      </div>

      <div className="container-fluid  d-flex align-items-center justify-content-center" style={{ minHeight: "25vh", backgroundColor: "#273F4F" }} data-aos="fade-up">
        <h4 className="text-center text-light" style={{ fontSize: "40px", fontWeight: "700", fontFamily: "source sans pro", letterSpacing: "2px", wordSpacing: "3px" }}>GET IN TOUCH WITH US</h4>
      </div>

      <div className="container my-5 px-3">

        <div className="row ">
          <div className="mt-5 col-md-6 shadow-lg py-4" data-aos="fade-up">
            <div className="mx-auto my-0 mx-4 px-3" >

              <div className="d-flex justify-content-between align-items-center ">
                <h3>Send a Message</h3>
                <i className="bi bi-envelope fs-3"></i>
              </div>
              <h5>we will contact you as soon as possible.</h5>
              <div className="row">
                <div className="col-sm-6 my-3">
                  <input type="text" name="fname" className="border-0 border-bottom w-100" id="firstname"
                    aria-describedby="emailHelp" placeholder="First Name" required={true} style={{ outline: "none" }} onChange={handleChange} />
                </div>
                <div className="col-sm-6 my-3">
                  <input type="text" name="lname" className="border-0 border-bottom w-100" id="lastname"
                    aria-describedby="emailHelp" placeholder="Last Name" required={true} style={{ outline: "none" }} onChange={handleChange} />
                </div>
              </div>
              <input type="text" name="phone" className="border-0 border-bottom w-100 my-3" id="phone"
                aria-describedby="emailHelp" placeholder="Phone" required={true} minLength={10} style={{ outline: "none" }} onChange={handleChange} />

              <input type="email" name="email" className="border-0 border-bottom w-100 my-3" id="email"
                aria-describedby="emailHelp" placeholder="Email" required={true} style={{ outline: "none" }} onChange={handleChange} />

              <div className="d-flex align-items-center gap-3 flex-wrap">

                <p className="mt-md-4 mt-2 mb-0 text-secondary">When We Contact You </p>

                <input type="datetime-local" name="datetime" className="mt-0 rounded-pill px-2 text-secondary border  border-secondary" required={true} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ outline: "none" }} onChange={handleChange} />


              </div>
              <p className="mt-4 text-secondary">How can we help?</p>
              <textarea className="form-control   w-100" onChange={handleChange} name='how' id="Textarea1" rows="3" ></textarea>
              <input type="submit" className="btn text-light rounded-pill px-4 mt-5 float-end" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit} value={"Submit"} />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-down">
            <img src="contact.png" alt="" className="img-fluid d-block mx-auto" style={{ minWidth: "45vw" }} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Blog