import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Service from './pages/service/Service'
import Reviews from './pages/reviews/Reviews'
import AddService from './pages/add-service/AddService'
import Login from './pages/login/Login'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Main />,
      children: [
          {
              path: '/',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services?limit=3&sort=-rating')
              },
              element: <Home />
          },
          {
              path: 'home',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services?limit=3&sort=-rating')
              },
              element: <Home />
          },
          {
              path: 'services',
              loader: async () => {
                return fetch('https://computer-man-backend.vercel.app/api/v1/services')
              },
              element: <Services />
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
              element: <Reviews />
          },
          {
              path: 'add-service',
              element: <AddService />
          },
          {
              path: 'login',
              element: <Login />
          },
      ]
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
