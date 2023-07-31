import React from 'react'
import { useNavigate } from 'react-router-dom';

function Blogcard(props) {
    const navigate = useNavigate()
    return (
        <>
            <div className="cardblog mx-auto mt-5 rounded d-flex align-items-end " data-aos="fade-down" style={{ width: "22rem", minHeight: "26rem",cursor:"pointer",backgroundImage:`url(${props.image})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} onClick={() => {navigate(`/read/${props.id}`)}}>
                <div className="text ps-2 pb-3 pt-2 w-100" style={{backgroundColor:"rgba(152, 161, 171,0.6)"}}>
                    <h3 style={{ fontSize: "26px", fontWeight: "700" }}>{props.heading}</h3>
                    <h4 className="me-2" style={{ fontSize: "20px", fontWeight: "400" }}>{props.description1}</h4>
                    
                </div>
            </div>
        </>
    )
}

export default Blogcard