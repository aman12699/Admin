import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
// import useCategory from '../../hooks/useCategory';
import toast from 'react-hot-toast';
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";


const AdminSubCategories = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();



    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/admin/get-subcategory");
            if (data?.success) {
                setCategories(data?.subcategory,);
                console.log(data.subcategory)
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
                `/api/v1/admin/delete-subcategory/${pId}`
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
                <h1 className='font-bold'>Sub Category</h1>
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
                            navigate("/admin-dashboard/add-subcategories");
                        }}
                    >
                        Add Sub Category
                    </button>
                </div>
            </div>
            <div className='g-white pb-4 mt-4 '>
                <table className='w-full userTable'>
                    <thead>
                        <th>Id</th>
                        <th>SubCategory name</th>
                        <th>Category name</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Sequence</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            categories.map((c, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{c.name}</td>
                                        <td>{c.subname}</td>
                                        <td>{c.image}</td>
                                        <td>{c.status}</td>
                                        <td>{c.sequence}</td>
                                        <td>
                                            <button className='p-2 rounded-full cursor-pointer '
                                                

                                                onClick={()=>{
            
                                                }}
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
            </div>
        </div>
    )
}

export default AdminSubCategories

