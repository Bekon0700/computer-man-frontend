import React, { useEffect, useState } from 'react'

const LoadingRoute = ({children}) => {
  const [loadingSpinner, setLoadingSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false)
    }, 5000);
  }, [])
  if(loadingSpinner){
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