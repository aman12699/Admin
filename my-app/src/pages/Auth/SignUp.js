// import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../../style/Style.css"
import axios from 'axios';
import toast from 'react-hot-toast'


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    //form function
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("/api/v1/admin/sign-up",{
                email,
                password
            })

            if( res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else{
                toast.error(res.data.message);
            }

        }
        catch(error){
            console.log(error);
            toast.error("something went wrong");
        }

    } 



    return (

        <div className='form-container' style={{ minHeight: "100vh" }}>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>TableSprint</h1>
                <p className='title'>Welcome to TableSprint admin</p>
                <div className='mb-3'>
                    <input
                        type='email'
                        value={email}
                        placeholder='Enter Your Email'
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div className='mb-3'>
                    <input
                        type='password'
                        value={password}
                        placeholder='Enter Your Password'
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

               

             

                <button type='submit' className='btn-btn-primary'>
                    SignUp
                </button>

            </form>
        </div>
    )
}

export default SignUp