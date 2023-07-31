import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import { Link } from 'react-router-dom';
function Readblog(props) {
    const { title } = useParams()
    const id = title
    const [data, updateData] = useState({ name: "", description: "" })

    const course = props.course
    const blogs = props.blogs
    console.log(blogs);
    useEffect(() => {
        window.scrollTo(0, 0)
        course.forEach(element => {
            if (element.$id == id) {
                updateData(element)
                return
            }
        });
        blogs.forEach((element) => {
            if (element.$id == id) {
                updateData(element)
                return
            }
        })
    }, [course, blogs])
    // console.log(data);
    return (
        <>
            <Header />
            <div className="container px-lg-5 px-md-3 px-1">
                <h1 className="text-start my-2" style={{ fontSize: "40px", fontWeight: "600", textTransform: "capitalize" }} data-aos="fade-right">{data.name}</h1>
                {data.minCost && <h5 className="ms-1 mt-0 mb-5 text-secondary d-inline-block">Price : {data.minCost} - {data.maxCost} INR</h5>}
                {data.duration && <h5 className="mt-0 mb-5 ms-5 text-secondary d-inline-block">Duration : {data.duration} Months</h5>}
                    <img src={data.image} alt="" className="img-fluid mx-auto d-block mx-auto " data-aos="fade-down" style={{ height: "30rem", width: "40rem" }} />


                <h3 className="text-start mt-3" style={{ fontSize: "28px", fontWeight: 700 }} data-aos="fade-up">Description :</h3>
                <h5 className='mb-5' style={{ textAlign: "justify", fontSize: "25px", fontFamily: "source sans pro", lineHeight: "30px" }} data-aos="fade-right">{data.description}</h5>
            </div>
            <div className="container-flutitle d-flex flex-md-row flex-column justify-content-center pt-4 pb-3 text-light align-items-center" data-aos="fade-down" style={{ backgroundColor: "#26475D" }}>
                <h2>Boost Your Career with <span style={{ color: "#FF900E" }}>INTERNACC</span> </h2>
                <Link className="btn btn-light px-5 mb-2 ms-4 d-block align-self-center" to="/contact">Apply Now</Link>
            </div>

        </>
    )
}

export default Readblog