import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [details,setDetails]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate();
    

    function handleChange(e){
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(details);
        localStorage.setItem("user",JSON.stringify(details));
        navigate("/login");
    }
  return (
    <div>
        <div className='text-center'>
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="name" placeholder='enter name' onChange={handleChange}/> <br /><br />
                <input type="email"  name="email" placeholder='enter email' onChange={handleChange}/> <br /><br />
                <input type="password"  name="password" placeholder='enter password' onChange={handleChange}/> <br /><br />
                <button>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register