import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LoadingRoute = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [path, setPath] = useState('')
  const {pathname} = useLocation()
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])
  if(loading){
    return (
        <div className='text-4xl text-center h-screen flex flex-col justify-center items-center gap-4'>
          <p>Computer-Man_</p>
          <progress className="progress w-96"></progress>
        </div>
      )
  }else{
      return children
  }
}

export default LoadingRoute