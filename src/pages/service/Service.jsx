import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Service = () => {
  const {service} = useLoaderData()
  console.log(service)
  return (
    <div>
      service
    </div>
  )
}

export default Service