import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";


const AdminCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/admin/get-category");
            if (data?.success) {
                setCategories(data?.category);
                console.log(data.category)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wwent wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, [])




    //delete category
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `/api/v1/admin/delete-category/${pId}`
            );
            if (data.success) {
                toast.success(`category is deleted`);

                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Somtihing went wrong");
        }
    };



    console.log(categories);
    return (
        <div>
            <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
                <h1 className='font-bold'>Category</h1>
                <div className='flex items-center w-full justify-between max-w-sm border rounded-full'>
                    <input type='text' placeholder='search product here...' className='w-full outline-none pl-2' />
                    <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full'>
                        <GrSearch />
                    </div>
                </div>
                <div className="mb-3">
                    <button
                        type="button"
                        className="text-white p-1 bg-fuchsia-950 rounded"
                        onClick={() => {
                            navigate("/admin-dashboard/add-categories");
                        }}
                    >
                        Add Category
                    </button>
                </div>
            </div>
            <div className='bg-white pb-4 mt-4'>
                <table className='w-full userTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category name</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Sequence</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((c, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{c.name}</td>
                                        <td>{c.image}</td>
                                        <td>{c.status}</td>
                                        <td>{c.sequence}</td>
                                        <td>
                                            <button className='p-2 rounded-full cursor-pointer '

                                            >
                                                <BiEdit />
                                            </button>

                                            <button className=' p-2  cursor-pointer'
                                                onClick={() => {
                                                    handleDelete(c._id);
                                                }}
                                            >
                                                <RiDeleteBinLine />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
            // openUpdateRole
            //  && (
                // <ChangeUserRole 
                //     onClose={()=>setOpenUpdateRole(false)} 
                //     // name={updateUserDetails.name}
                //     // email={updateUserDetails.email}
                //     role={updateUserDetails.role}
                //     userId={updateUserDetails._id}
                //     callFunc={getAllCategory}
                // />
            // )      
        }
            
            </div>
        </div >
    )
}

export default AdminCategories
