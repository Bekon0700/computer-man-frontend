import React from 'react'

const ServiceReview = ({ data }) => {
    const { email, review, createdAt } = data
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = createdAt
    const event = new Date(date);
    const cat = event.toLocaleDateString('en-US', options)
    return (
        <div className='flex flex-col gap-4 border p-2 rounded-md'>
            <div className='flex items-center gap-2'>
                <img src="https://placeimg.com/80/81/people" className='w-8 rounded-full' />
                <div>
                    <p className='text-sm'>{email}</p>
                    <p className='text-gray-500 text-sm'>{cat}</p>
                </div>
            </div>
            <p className='text-base font-medium'>
                {review}
            </p>
        </div>
    )
}

export default ServiceReview