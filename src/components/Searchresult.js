import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
function Searchresult(props) {
    const [data,updateData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        if(!props.course.documents){
            navigate("/")
        }
        updateData(props.course.documents)
    },[])
    return (
        <>
            <Header />

            <div className="container">
                <h3 className="mt-5" style={{ fontSize: "34px", fontFamily: "source sans pro" }}> <span style={{ fontSize: "40px", color: "#2B74A4",fontWeight:900 }}>" {props.course.total} "</span> results found</h3>

                <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-1 mt-2">
                    {data.map((element, index) => {
                        return <div className="col" key={index}>
                            <Card img={"https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} title={element.name} description={element.description} id={element.$id} image={element.image} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Searchresult