import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom'
import ServiceDetails from '../../components/service-detail/ServiceDetails'
import ServiceReview from '../../components/service-review/ServiceReview'
import { authContext } from '../../context/AuthProvider'

const Service = () => {
  const navigate = useNavigate()
  const { service } = useLoaderData()
  const { reviews } = service
  const { user } = useContext(authContext)
  let newRev = [...reviews].reverse()
  const submitHandle = (e) => {
    e.preventDefault()
    const reviewInput = e.target.reviewInput.value;
    const reviewData = {
      name: user.displayName,
      email: user.email,
      review: reviewInput,
      serviceId: service._id
    }

    fetch('https://computer-man-backend.vercel.app/api/v1/reviews/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwtoken')}`
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(data => {
        navigate(`/services/${service._id}`)
        e.target.reset()
        toast.success('Review Added')
      })
  }

  return (
    <div>
      <div className='py-12'>
        <ServiceDetails data={service} />
      </div>
      <div className='w-10/12 lg:w-2/3 mx-auto pb-6 flex flex-col gap-6'>
        <p className='font-semibold text-2xl'>Customers Review for this service</p>
        <div className='flex flex-col gap-3'>
          {
            reviews.length == 0 ?
              <div className='text-lg text-green-600 font-semibold'>There are no review for this service</div>
              :
              newRev.map(el => <ServiceReview key={el._id} data={el} />)
          }
        </div>
      </div>
      {
        user ?
          <div className='w-10/12 lg:w-2/3 mx-auto pb-12 flex flex-col gap-6'>
            <form onSubmit={submitHandle}>
              <textarea className="textarea w-full border-gray-900" name="reviewInput" placeholder="your review"></textarea>
              <button className='py-3 bg-blue-500 text-white font-semibold uppercase w-full rounded-md mt-2'>submit</button>
            </form>
          </div>
          :

          <div className='w-10/12 lg:w-2/3 mx-auto py-24  flex flex-col gap-6'>
            <p className='text-2xl text-center text-blue-700 font-bold'>Please Login to Post review</p>
          </div>
      }

    </div>
  )
}

export default Service