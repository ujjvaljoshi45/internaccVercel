import React from 'react'
import Adminnav from './Adminnav'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Adminaccomodation() {
    const [isLogin,updateLogin] = useState()
    const [data, updaeData] = useState({
        title: "",
        image: "",
        country: "",
        desc: ""
    })
    const handleChange = (e) => {
        updaeData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        // console.log(data)
    }
    useEffect(()=>{
        if(sessionStorage.getItem('interacc-admin-login') == 'true'){
            updateLogin(true)
        }
    },[])
    return (
        <>
            <Adminnav />


            {isLogin == true ? <div className="container mx-auto mt-5 pt-1 px-1 rounded mb-4" style={{ maxWidth: "1200px"}}>
                <h3 className="text-center text-light py-2 px-0 mx-0" style={{ fontFamily: "source sans pro", fontWeight: "600", fontSize: "40px", backgroundColor: "#263238" }}>ADD ACCOMODATION</h3>

                <div className="form-group my-4">
                    <label htmlFor="title" style={{ fontSize: "26px", fontWeight: "600" }}>Title :</label>
                    <input type="text" name="title" id="title" className="form-control fs-5 shadow" onChange={handleChange} />
                </div>

                <div className="my-4">
                    <label htmlFor="formFile" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Add Image :</label>
                    <input className="form-control" type="file" name="image" id="formFile" onChange={handleChange} />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="country" style={{ fontSize: "26px", fontWeight: "600" }}>Country :</label>
                    <input type="text" name="country" id="country" className="form-control fs-5 shadow" onChange={handleChange} />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="desc" style={{ fontSize: "26px", fontWeight: "600" }}>Course Description : </label>
                    <textarea name="desc" id="desc" cols="30" rows="4" className="form-control w-100" onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="ms-auto d-block btn text-light rounded-pill px-5 my-3" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit} > Submit</button>
            </div> : <h3 className="my-5 text-center">Login Required for Admin page <Link to="/admin-login">Go To Login</Link></h3>}
        </>
    )
}

export default Adminaccomodation