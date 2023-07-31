import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import { Link, useNavigate } from 'react-router-dom'
import { Client, Databases, ID, Query, Storage } from 'appwrite'
import { toast } from 'react-toastify'
function Admincourse(props) {
    const [isLogin, updateLogin] = useState()
    const { course } = props
    const [data, updateData] = useState({
        course: "",
        image: "",
        minage: 9,
        maxage: 24,
        duration: 0,
        mincost:0,
        maxcost:0,
        subject: "",
        university: "",
        description: ""
    })
    const navigate = useNavigate
    const navigateToHome = () => {
        navigate("/")
    }
    const handleChange = (e) => {
        updateData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {

        if (data.course == "" || data.image == "" || data.subject == "" || data.university == "" || data.description == "" || data.mincost == "" || data.maxcost == "" || data.duration=="") { } else {
            const client = new Client();
            client
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject('64b92b85162ae2a4bba8');

            /*
            Course Updated Schema
            name
            university
            subject
            description
            image
            minAge
            maxAge
            */

            console.log(document.getElementById('formFile').files[0]);
            const storage = new Storage(client);
            let imageUrl = null;
            const addImagePromise = storage.createFile('64be8194bceeca42c8ea', ID.unique(), document.getElementById('formFile').files[0]);
            addImagePromise.then(function (response) {
                const fileUrl = storage.getFileView('64be8194bceeca42c8ea', response.$id)
                imageUrl = fileUrl.href
                console.log(imageUrl);
                console.log(response); // Success
                setTimeout(() => {
                    const database = new Databases(client);
                    const promise = database.createDocument('64b92e033b36ffa5f41d', '64b92e0896b7047d3196', ID.unique(), {
                        name: data.course.toLowerCase(),
                        image: imageUrl,
                        minAge: data.minage,
                        maxAge: data.maxage,
                        minCost:data.mincost,
                        maxCost:data.maxcost,
                        duration:data.duration,
                        subject: data.subject,
                        university: data.university.toLowerCase(),
                        description: data.description
                    });
                    promise.then(function (response) {
                        console.log(response.documents);
                        updateData(response.documents);
                        window.location.reload();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }, 1000);
            }, function (error) {
                console.log(error); // Failure
            });


        }
        console.log(data)

    }

    useEffect(() => {
        if (sessionStorage.getItem('interacc-admin-login') == "true") {
            updateLogin(true)
        }
    }, [])

    const handleDelete = (e) => {
        const client = new Client();
        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('64b92b85162ae2a4bba8');
        const database = new Databases(client);
        const promise = database.deleteDocument('64b92e033b36ffa5f41d', '64b92e0896b7047d3196', e.target.id);
        promise.then(function (response) {
            console.log(response);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });

        console.log(e.target.id);
    }
    return (
        <>
            <Adminnav />
            {isLogin == true ? <div>
                <div className="container mx-auto mt-5 pt-1 px-1 rounded mb-4" style={{ maxWidth: "1200px" }}>
                    <h3 className="text-center text-light py-2 px-0 mx-0" style={{ fontFamily: "source sans pro", fontWeight: "600", fontSize: "40px", backgroundColor: "#263238" }}>ADD COURSE</h3>

                    <div className="form-group my-4">
                        <label htmlFor="course" style={{ fontSize: "26px", fontWeight: "600" }}>Course Name :</label>
                        <input type="text" name="course" id="course" className="form-control fs-5 shadow" onChange={handleChange} />
                    </div>

                    <div className="row ">
                        <div className="col-md-6">
                            <div className="my-4">
                                <label htmlFor="formFile" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Add Image :</label>
                                <input className="form-control shadow" name='image' type="file" id="formFile" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-4">
                                <label htmlFor="duration" style={{ fontSize: "26px", fontWeight: "600" }}>Duration (in months) : </label>
                                <input type="number" name="duration" id="duration" className="form-control fs-5 mt-1" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="mincost" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Minimum Cost : </label>
                                <input type="number" name="mincost" id="mincost" className="form-control fs-5" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="maxcost" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Maximum Cost : </label>
                                <input type="number" name="maxcost" id="maxcost" className="form-control fs-5" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="minage" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Min age : </label>
                                <select name="minage" id="minage" className="form-select" onChange={(e) => { updateData({ ...data, minage: parseInt(e.target.value) }) }}>
                                    {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((element, index) => {
                                        return <option key={index} value={element}>{element}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="maxage" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Max age : </label>
                                <select name="maxage" id="maxage" className="form-select" onChange={(e) => { updateData({ ...data, maxage: parseInt(e.target.value) }) }}>
                                    {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((element, index) => {
                                        return <option key={index} value={element}>{element}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="subject" style={{ fontSize: "26px", fontWeight: "600" }}>Subject :</label>
                        <input type="text" name="subject" id="subject" className="form-control fs-5 shadow" onChange={handleChange} />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="university" style={{ fontSize: "26px", fontWeight: "600" }}>University :</label>
                        <input type="text" name="university" id="university" className="form-control fs-5 shadow" onChange={handleChange} />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="description" style={{ fontSize: "26px", fontWeight: "600" }}>Description : </label>
                        <textarea name="description" id="description" cols="30" rows="4" className="form-control w-100" onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="ms-auto d-block btn text-light rounded-pill px-5 my-3" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit}> Submit</button>
                </div>
                <div className="px-2 container-fluid my-5">
                    <h2 className="text-center my-3 mt-5">Delete Course</h2>
                    <table className="w-100 table-fluid table-bordered table-striped table-hover" >
                        <thead>
                            <tr>
                                <td className="fs-3 text-center">sr no.</td>
                                <td className="fs-3 text-center">Name</td>
                                <td className="fs-3 text-center">Subject</td>
                                <td className="fs-3 text-center">Age Group</td>
                                <td className="fs-3 text-center">Description</td>
                                <td className="fs-3 text-center">Price</td>
                                <td className="fs-3 text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {course.map((element, index) => {
                                return <tr key={index}>
                                    <td className='ps-2 fs-5'>{index + 1}</td>
                                    <td className='ps-2 fs-5'>{element.name}</td>
                                    <td className='ps-2 fs-5'>{element.subject}</td>
                                    <td className='ps-2 fs-5'>{element.minAge} - {element.maxAge}</td>
                                    <td className='ps-2 fs-5'>{element.description}</td>
                                    <td className='ps-2 fs-5'>{element.price}</td>
                                    <td className='ps-2 fs-5'><button id={element.$id} className="btn btn-danger my-1 mx-auto d-block px-2" onClick={handleDelete}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div> : <h3 className="my-5 text-center">Login Required for Admin page <Link to="/admin-login">Go To Login</Link></h3>}


        </>
    )
}

export default Admincourse