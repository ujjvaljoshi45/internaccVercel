import React from 'react'
import { Client, Databases, ID, Query, } from 'appwrite';
import { useState } from 'react';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';


/*
This Schema will work on all there forms
you can use same code everywhere
Schema 
fname required
lname
phone required
email required
date 
message 
*/

function Contact() {
  window.scrollTo(0,0)
  const [data, updateData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    topic: "course",
    datetime: "",
    subject: "",
    how: ""
  })
  const handleChange = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    if(data.fname===""||data.lname===""||data.email===""||data.phone===""||data.datetime===""||data.how===""){
      alert("Please fill all the fields.") } else {
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
                subject: "(" + data.topic + ")" + " " + data.subject,
            });
            promise.then(function (response) {
                console.log(response);
                toast.success("Your message has been sent.")
            }).catch(function (error) {
                console.log(error);
                toast.error("Something went wrong.")
            });
      }
  }
  return (
    <>
    <ToastContainer />
    <Header />
      <div className="container mb-5 mt-4">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <div className="mx-auto my-0 mx-4 px-3 shadow py-3" >

              <div className="d-flex justify-content-between align-items-center ">
                <h3>Send a Message</h3>
                <i className="bi bi-envelope fs-3"></i>
              </div>
              <h5>we will contact you as soon as possible.</h5>
              <div className="row">
                <div className="col-sm-6 my-3" >
                  <input type="text" name='fname' className="border-0 border-bottom w-100" id="firstname" onChange={handleChange}
                    aria-describedby="emailHelp" placeholder="First Name" required={true} style={{ outline: "none" }} />
                </div>
                <div className="col-sm-6 my-3">
                  <input type="text" name='lname' className="border-0 border-bottom w-100" id="lastname" onChange={handleChange}
                    aria-describedby="emailHelp" placeholder="Last Name" required={true} style={{ outline: "none" }} />
                </div>
              </div>
              <input type="text" className="border-0 border-bottom w-100 my-3" id="phone"
                aria-describedby="emailHelp" name='phone' placeholder="Phone" required={true} maxLength={10} style={{ outline: "none" }} onChange={handleChange} />

              <input type="email" className="border-0 border-bottom w-100 my-3" id="email"
                aria-describedby="emailHelp" name='email' placeholder="Email" required={true} style={{ outline: "none" }} onChange={handleChange} />

              <p className="mt-3 mb-2 text-secondary">Choose Topic</p>

              <div className="d-flex gap-4 flex-wrap">
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

              <label htmlFor="subject" className="form-label mt-2 mb-2 text-secondary">Subject</label>
              <input type="text" onChange={handleChange} name='subject' className="rounded-pill w-100 px-2 border  border-secondary" id="subject" aria-describedby="emailHelp" required={true} />

              <p className="mt-2 text-secondary">How can we help?</p>
              <textarea className="form-control w-100" name='how' onChange={handleChange} id="Textarea1" rows="3" ></textarea>


              <button type="submit" className="btn ms-auto mt-4 mt-md-3 px-5  d-block text-light rounded-pill px-4" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit}> Submit</button>
            </div>
          </div>
          <div className="col-md-6 align-items-center d-flex">
            <div className="mx-md-5 mx-auto w-100 py-3  rounded mb-5" data-aos="fade-up" style={{backgroundColor:"#315A75"}}>
                <h3 className='text-center text-light '>Contact Us</h3>
                <div className="text ps-4 mt-4">
                  <h1 className="text-start text-light my-3" style={{fontSize:"16px",fontFamily:"karta"}}> <i className="bi bi-phone me-3"></i> +917435878256</h1>
                  <h1 className="text-start text-light my-3" style={{fontSize:"16px",fontFamily:"karta"}}> <i className="bi bi-phone me-3"></i> +917405123400</h1>
                  <h1 className="text-start text-light my-3" style={{fontSize:"16px",fontFamily:"karta"}}> <i className="bi bi-envelope me-3"></i> SUPPORT@INTERNACC.COM</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact


/*
// ADD Course
const promise = database.createDocument('64b92e033b36ffa5f41d', '64b92e0896b7047d3196', ID.unique(), {
    name:"New Course",
    aggrp:1,
    university:"UNI",
    subject:"THIS ONE",
})
*/