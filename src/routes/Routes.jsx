import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import ErrorPage from '../pages/error/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/signup',
    element:<SignUp></SignUp>
   }
])
