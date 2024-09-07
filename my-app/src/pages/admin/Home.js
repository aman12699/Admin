import React from 'react'
import { Link,  } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCubeOutline } from "react-icons/io5";


const Home = () => {
    return (

        <div className='min-h-[90vh] flex'>
            <aside className='bg-slate-200 min-h-full w-full max-w-60'>
                <div>
                    <nav className='grid p-4'>
                        <Link
                            to={"/"}
                            className='flex items-center gap-x-3 px-4 py-2 hover:bg-slate-100'
                        >
                            <GoHome />
                            Dashboard
                        </Link>

                        <Link
                            to={"/admin-dashboard/all-categories"}
                            className='flex items-center gap-x-3 px-4 py-2 hover:bg-slate-100'
                        >
                            <TbCategory />
                            Category
                        </Link>

                        <Link
                            to={"/"}
                            className='flex items-center gap-x-3 px-4 py-2 hover:bg-slate-100'
                        >
                            <HiAdjustmentsHorizontal />
                            SubCategory
                        </Link>

                        <Link
                            to={"/"} className='flex items-center gap-x-3  px-4 py-2 hover:bg-slate-100'
                        >
                            <IoCubeOutline />
                            products
                        </Link>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Home

