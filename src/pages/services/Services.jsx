import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../../components/service-card/ServiceCard'
import useTitle from '../../hooks/useTitle'

const Services = () => {
  const {services} = useLoaderData()
  useTitle('Services')
  return (
    <div className='py-24'>
      <div className='flex flex-col gap-12'>
        <p className='text-center font-semibold text-3xl'>Our Top Services</p>
        <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {
            services.map(el => <ServiceCard key={el._id} data={el} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Services