import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from '../../components/service-detail/ServiceDetails'
import ServiceReview from '../../components/service-review/ServiceReview'

const Service = () => {
  const {service} = useLoaderData()
  const {reviews} = service
  return (
    <div>
      <div className='py-12'>
        <ServiceDetails data={service} />
      </div>
      <div className='w-10/12 lg:w-2/3 mx-auto pb-12 flex flex-col gap-6'>
        <p className='font-semibold text-2xl'>Customers Review for this service</p>
        <div className='flex flex-col gap-3'>
        {
          reviews.length == 0 ? 
          <div className='text-lg'>There are no review for this service</div>
          :
          reviews.map(el => <ServiceReview key={el._id} data={el} />)
        }
        </div>
      </div>
    </div>
  )
}

export default Service