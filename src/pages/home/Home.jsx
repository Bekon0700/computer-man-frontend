import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Hero from '../../components/hero/Hero'
import ServiceCard from '../../components/service-card/ServiceCard'

const Home = () => {
  const {services} = useLoaderData()
  return (
    <div>
      <Hero />
      <div className='flex flex-col gap-12'>
        <p className='text-center font-semibold text-3xl'>Our Top Services</p>
        <div className='w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
            services.map(el => <ServiceCard key={el._id} data={el} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home