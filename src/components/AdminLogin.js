import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminLogin() {
  const [credentials,updateCredentials] = useState({username:"",password:""})
  const navigate = useNavigate()
  const handleChange = (e) =>{
    updateCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const validateUser = () => {
    if (credentials.username == "admin@internacc" && credentials.password == "internacc$12@gh") {
      sessionStorage.setItem('interacc-admin-login',true)
      navigate("/admin-course")
    } else {
      toast.error("You are not authorized for admin.")
    }
  }
  return (
    <>
    <ToastContainer />
      <div className="d-flex justify-cotent-center align-items-center container-fluid" style={{  height: "100vh" ,backgroundColor:"darkgray" }}>
        <div className="container mb-5 pb-5" style={{ maxWidth: "450px" }}>
          <h1 className="text-center">Admin Login</h1>
            <div className="form-group fs-5 mt-4">
              <label htmlFor="username">Username :  </label>
              <input type="text" name="username" id="username" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group fs-5 mt-2">
              <label htmlFor="password">Password :  </label>
              <input type="password" name="password" id="password" className="form-control" onChange={handleChange} />
            </div>
            <button className="btn btn-primary w-25 px-4 fs-5 ms-auto d-block mt-3" onClick={validateUser}>
              Login
            </button>
        </div>
      </div>
    </>
  )
}

export default AdminLogin