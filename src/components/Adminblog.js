import React from 'react'
import Adminnav from './Adminnav'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Client, Databases, ID, Query, Storage } from 'appwrite';
import { toast } from 'react-toastify';

function Adminblog(props) {
    const {blog} = props;
    const [isLogin, updateLogin] = useState()
    const [data, updateData] = useState({
        blog: "",
        image: "",
        keyword: "",
        shortdesc: "",
        desc: ""
    })
    const handleChange = (e) => {
        updateData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        const today = new Date().toISOString()
        console.log(today);

        if (data.blog == "" || data.image == "" || data.keyword == "" || data.shortdesc == "" || data.desc == "") { } else {
            const client = new Client();
            client
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject('64b92b85162ae2a4bba8');

            console.log(document.getElementById('formFile').files[0]);
            const storage = new Storage(client);
            let imageUrl = null;
            const addImagePromise = storage.createFile('64be8194bceeca42c8ea', ID.unique(), document.getElementById('formFile').files[0]);
            addImagePromise.then(function (response) {
                const imageId = response.$id
                const fileUrl = storage.getFileView('64be8194bceeca42c8ea', imageId)
                imageUrl = fileUrl.href
                console.log(imageUrl);
                console.log(response); // Success
                setTimeout(() => {
                    const database = new Databases(client);
                    const promise = database.createDocument('64b92e033b36ffa5f41d', '64b92e39d4da1ba6d01a', ID.unique(), {
                        name: data.blog,
                        image: imageUrl,
                        keywords: data.keyword,
                        shortdesc: data.shortdesc,
                        description: data.desc,
                        timestamp: today,
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
        const promise = database.deleteDocument('64b92e033b36ffa5f41d', '64b92e39d4da1ba6d01a', e.target.id);
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

            {isLogin == true ? <div className="container mx-auto mt-5 pt-1 px-1 rounded mb-4" style={{ maxWidth: "1200px" }}>
                <h3 className="text-center text-light py-2 px-0 mx-0" style={{ fontFamily: "source sans pro", fontWeight: "600", fontSize: "40px", backgroundColor: "#263238" }}>ADD BLOG</h3>

                <div className="form-group my-4">
                    <label htmlFor="blog" style={{ fontSize: "26px", fontWeight: "600" }}>Blog Title : </label>
                    <input type="text" name="blog" id="blog" className="form-control fs-5 shadow" onChange={handleChange} />
                </div>

                <div className="my-4">
                    <label htmlFor="formFile" className="form-label" style={{ fontSize: "26px", fontWeight: "600" }}>Add Image :</label>
                    <input className="form-control shadow" name='image' type="file" id="formFile" onChange={handleChange} />
                </div>

                <div className="form-group my-4">
                    <label htmlFor="keyword" style={{ fontSize: "26px", fontWeight: "600" }}>Keywords :</label>
                    <input type="text" name="keyword" id="keyword" className="form-control fs-5 shadow" onChange={handleChange} />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="shortdesc" style={{ fontSize: "26px", fontWeight: "600" }}>Short Description : </label> :
                    <input type="text" name="shortdesc" id="shortdesc" className="form-control fs-5 shadow" onChange={handleChange} />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="desc" style={{ fontSize: "26px", fontWeight: "600" }}>Your Blog Here : </label>
                    <textarea name="desc" id="desc" cols="30" rows="4" className="form-control w-100" onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="ms-auto d-block btn text-light rounded-pill px-5 my-3" style={{ backgroundColor: "#D77630" }} onClick={handleSubmit} > Submit</button>


                <div className="px-2 container-fluid my-5">
                    <h2 className="text-center my-3 mt-5">Delete Blog</h2>
                    <table className="w-100 table-fluid table-bordered table-striped table-hover" >
                        <thead>
                            <tr>
                                <td className="fs-3 text-center">sr no.</td>
                                <td className="fs-3 text-center">Name</td>
                                <td className="fs-3 text-center">Short DESC</td>
                                <td className="fs-3 text-center">Keywords</td>
                                <td className="fs-3 text-center">Description</td>
                                <td className="fs-3 text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {blog.map((element, index) => {
                                return <tr key={index}>
                                    <td className='ps-2 fs-5'>{index + 1}</td>
                                    <td className='ps-2 fs-5'>{element.name}</td>
                                    <td className='ps-2 fs-5'>{element.shortdesc}</td>
                                    <td className='ps-2 fs-5'>{element.keywords}</td>
                                    <td className='ps-2 fs-5'>{element.description}</td>
                                    <td className='ps-2 fs-5'><button id={element.$id} className="btn btn-danger my-1 mx-auto d-block px-2" onClick={handleDelete}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

                : <h3 className="my-5 text-center">Login Required for Admin page <Link to="/admin-login">Go To Login</Link></h3>}
        </>

    )
}

export default Adminblog