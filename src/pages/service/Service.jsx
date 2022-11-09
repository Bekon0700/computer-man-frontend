import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from '../../components/service-detail/ServiceDetails'

const Service = () => {
  const {service} = useLoaderData()
  return (
    <div>
      <div className='py-12'>
        <ServiceDetails data={service} />
      </div>
    </div>
  )
}

export default Service