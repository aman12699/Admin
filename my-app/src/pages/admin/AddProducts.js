import React, { useState } from 'react'
// import { FaPlus } from 'react-icons/fa6'
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { FaCloudUploadAlt } from "react-icons/fa";
import toast from 'react-hot-toast'

const AddProducts = () => {

    const [productname, setProductname] = useState("");
    const [subname, setSubname] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    // const [sequence, setSequencwe] = useState("");
    const [image, setImage] = useState("");
    const [id, setID] = useState("");

    const navigate = useNavigate();


    //handle Form



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/admin/productcreate-category", {
                productname,
                subname,
                name,
                status
                // sequence
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                navigate("/admin-dashboard/all-products");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form");
        }
    };


    return (
        <section className='p-2 sm:p-10 w-full bg-primary/20'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 max-w-[555px]'>

                <h4 className='bold-22 pb-2 uppercase text-2xl' >Add Product </h4>

                <div className='flex items-center gap-x-6 text-gray-900/70 medium-15'>


                    <div className='flex flex-col gap-y-2'>
                        <p>Product name</p>
                        <input
                            type='text'
                            value={productname}
                            // placeholder='Ent'
                            onChange={(e) => setProductname(e.target.value)}
                            className='ring-1 ring-slate-900/10 py-1 px-3 w-90 outline-none rounded '
                        />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <p>SubCategory Name</p>
                        <input
                            type='text'
                            value={subname}
                            // placeholder='Ent'
                            onChange={(e) => setSubname(e.target.value)}
                            className='ring-1 ring-slate-900/10 py-1 px-3 w-90 outline-none rounded '
                        />
                    </div>



                    <div className='flex flex-col gap-y-2'>
                        <p>Category Name</p>
                        <input
                            type='text'
                            value={name}
                            // placeholder='Ent'
                            onChange={(e) => setName(e.target.value)}
                            className='ring-1 ring-slate-900/10 py-1 px-3 w-90 outline-none rounded '
                        />
                    </div>



                    <div className='flex flex-col gap-y-2'>
                        <p>Status</p>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            name='category'
                            className='outline-none ring-1 ring-slate-900/10 pl-2'
                        >
                            <option value="Active">Active</option>
                            <option value="NonActive">NonActive</option>
                        </select>
                    </div>



                </div>



                <button type='submit' className='btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2   mt-7 text-white rounded-full bg-fuchsia-950'

                >
                    Save
                </button>

                

            </form>

        </section >
    )
}

export default AddProducts