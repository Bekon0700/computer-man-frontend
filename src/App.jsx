import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Reviews from './pages/reviews/Reviews'
import AddService from './pages/add-service/AddService'


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
              element: <Services />
          },
          {
              path: 'reviews',
              element: <Reviews />
          },
          {
              path: 'add-service',
              element: <AddService />
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
