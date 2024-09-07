import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/admin/Home'

import SignUp from '../pages/Auth/SignUp'
// import AdminDashboard from '../pages/admin/AdminDashboard'
// import AdminCategories from '../pages/admin/AdminCategories'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminCategories from '../pages/admin/AdminCategories'
import AddCategories from '../pages/admin/AddCategories'
import AdminSubCategories from '../pages/admin/AdminSubCategories'
import AdminProducts from '../pages/admin/AdminProducts'
import AddSubCategories from '../pages/admin/AddSubCategories'
import AddProducts from '../pages/admin/AddProducts'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },

            {
               path: "admin-dashboard",
               element: <AdminDashboard/>,
               children:[
                {
                    path: "all-categories",
                    element: <AdminCategories/>
                },
                {
                    path: "add-categories",
                    element: <AddCategories/>
                },
              
                {
                    path: "all-subcategories",
                    element: <AdminSubCategories/>
                },
                {
                    path: "add-subcategories",
                    element: <AddSubCategories/>
                },
                {
                    path:"all-products",
                    element:<AdminProducts/>
                },
                {
                    path:"add-products",
                    element:<AddProducts/>
                }
               ]
            }
           

        ]
    }
])

export default router