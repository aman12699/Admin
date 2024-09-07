import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style/Style.css'
import toast from 'react-hot-toast';


const ForgotPassword = () => {
    const[email, setEmail] = useState("");

    const navigate = useNavigate();

    //form functiom
    const handleSubmit = async(e)=>{
        e.preventDefaut();
        try{
            const res = await axios.post("api/v1/admin/forgot-password", {
                email
            })

            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate("/login")
            }else{
                toast.error(toast.data.message)
            }
        }
        catch(error){
            console.log(error);
            toast.error("something went wrong")
        }

    }

  return (
    <div className='form-container' style={{minHeight: "90vh"} }>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input
                type="email"
                value={email}
                placeholder='Enter Your Email'
                className='form-control'
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </div>

            <button type='submit' className='btn-btn-primary'>
                Request reset link
            </button>

        </form>
      
    </div>
  )
}

export default ForgotPassword