import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCubeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";

const AdminDashboard = () => {
    return (
        <div className='min-h-[100vh] flex'>
         

            <aside className='bg-slate-200 min-h-full w-full max-w-60'>
                <div>
                    <nav className='grid p-4'>
                        <Link
                            to={"/"}
                            className='flex items-center gap-x-3 px-4 py-2  hover:bg-yellow-100' 
                        >
                            <GoHome />
                            Dashboard
                        </Link>

                        <Link
                            to={"/admin-dashboard/all-categories"}
                            className='flex items-center gap-x-3 px-4 py-2  hover:bg-yellow-100' 
                        >
                            <TbCategory />
                            Category
                        </Link>

                        <Link
                            to={"/admin-dashboard/all-subcategories"}
                            className='flex items-center gap-x-3 px-4 py-2  hover:bg-yellow-100' 
                        >
                            <HiAdjustmentsHorizontal />
                            SubCategory
                        </Link>

                        <Link
                            to={"/admin-dashboard/all-products"} className='flex items-center gap-x-3  px-4 py-2  hover:bg-yellow-100' 
                        >
                            <IoCubeOutline />
                            products
                        </Link>
                    </nav>
                </div>
            </aside>

            <main className='w-full h-full p-2'>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminDashboard



