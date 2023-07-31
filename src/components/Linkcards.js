import React from 'react'

function Linkcards(props) {
  return (
    <div className="linkcard rounded border border-2 border-dark px-lg-5 px-2  py-4 w-100 my-4" >
        <h4 className="text-start " style={{fontSize:"25px",fontWeight:"700"}}>{props.title}</h4>
    </div>
  )
}

export default Linkcards