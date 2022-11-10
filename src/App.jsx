import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Service from './pages/service/Service'
import Reviews from './pages/reviews/Reviews'
import AddService from './pages/add-service/AddService'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Blog from './pages/blog/Blog'
import Error from './pages/error/Error'

import ProtectedRoute from './protected-route/ProtectedRoute'

import { Toaster } from 'react-hot-toast'
import LoadingRoute from './loading-route/LoadingRoute'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Main />,
      errorElement: <Error />,
      children: [
          {
              path: '/',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services?limit=3&sort=-rating')
              },
              element: <LoadingRoute><Home /></LoadingRoute>
          },
          {
              path: 'home',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services?limit=3&sort=-rating')
              },
              element: <LoadingRoute><Home /></LoadingRoute>
          },
          {
              path: 'services',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services')
              },
              element: <LoadingRoute><Services /></LoadingRoute> 
          },
          {
              path: 'services/:id',
              loader: async ({params}) => {
                return fetch(`https://computer-man-backend.vercel.app/api/v1/services/${params.id}`)
              },
              element: <Service />
          },
          {
              path: 'reviews',
              element: <ProtectedRoute><LoadingRoute><Reviews /></LoadingRoute></ProtectedRoute>
          },
          {
              path: 'add-service',
              element: <ProtectedRoute><AddService /></ProtectedRoute>
          },
          {
              path: 'blogs',
              element: <Blog />
          },
          {
              path: 'login',
              element: <Login />
          },
          {
              path: 'register',
              element: <Registration />
          },
      ]
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
