import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { Rooms } from './Rooms'
import { SingleRoom } from './SingleRoom'
import Root from './pages/Register/Root'
import NoAuth from './pages/Layouts/NoAuth'
import Auth from './pages/Layouts/Auth'
import Verify from './pages/Verify'
import SemiAuth from './pages/Layouts/SemiAuth'


const routes = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [{
      path: '/noAuth',
      element: <NoAuth />,
      children: [{
        path: "",
        element: <Home />
      },{
        path: "register",
        element:<Register/>
      },]
    },{
      path:'/auth',
      element:<Auth/>,
      children:[
        {
          path: "/auth/room/:id",
          element: <SingleRoom />
        },
        {
        path: "/auth/rooms",
        element: <Rooms />
      }
      ]
    },
    {
      path:'/semiAuth',
      element:<SemiAuth/>,
      children:[
        {
        path: "/semiAuth/verify",
        element: <Verify />
      }
      ]
    }
    ]
  }
])
function App() {
  return (
    <div className='min-h-[100vh] min-w-[100vw] bg-[black] text-[white]'>
      <RouterProvider router={routes} >
      </RouterProvider>
    </div>
  )
}
export default App