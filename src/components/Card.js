import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()
    return (

        <div className="card my-4 mx-auto" data-aos="fade-up" style={{width:"22rem",cursor:"pointer",height:"27rem",maxWidth:"90vw"}} onClick={() =>{navigate(`/read/${props.id}`)}}> 
            <img src={props.image} className="card-img-top img-fluid d-block" alt="..." style={{height:"18rem"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.title.length < 38 ? props.title.charAt(0).toUpperCase() + props.title.slice(1) : props.title.slice(0,38) + "..."}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
        </div>
    )
}

export default Card