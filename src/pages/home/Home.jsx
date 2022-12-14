import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import ServiceCard from '../../components/service-card/ServiceCard'
import Timeline from '../../components/timeline/Timeline'
import useTitle from '../../hooks/useTitle'

const Home = () => {
  const {services} = useLoaderData()
  useTitle('Home')
  return (
    <div>
      <Hero />
      <div className='flex flex-col gap-12'>
        <p className='text-center font-semibold text-3xl'>Our Top Services</p>
        <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
            services.map(el => <ServiceCard key={el._id} data={el} />)
          }
        </div>
        <div className='flex justify-center items-center'>
        <Link to='/services' className='bg-black hover:bg-gray-700 text-white text-center font-semibold py-2 px-4 rounded-md'>See All</Link>
        </div>
      </div>
      <div className='border my-16'>
        <Banner />
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  )
}

export default Home