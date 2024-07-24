

import React,{ useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email,setEmail]=useState();
    const navigate=useNavigate()

    // axios.defaults.withCredentials=true;
    const handleSubmit=(e)=>{
        e.preventDefault()

        axios.post(`http://localhost:3001/users//forgot-password`,{email})
        .then(res=>{
      
          if(res.data.Status ==="Success") {
            
                navigate('/login')
          }      
    
        })
        .catch(err=>console.log(err));

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-decondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h4>Forgot Password</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"> <b>Email</b> </label>
                    <input type="email" placeholder='Enter email' 
                            name="email" className='form-control rounded-0' 
                        
                            onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button type="submit" className='btn btn-sucess w-100 rounded-0 text-white bg-success'>Send</button>
                </form>
        </div>
    </div>
  )
}

export default ForgotPassword;