import React from 'react'

const ServiceReview = ({ data }) => {
    return (
        <div className='flex flex-col gap-8'>
            {
                data.map(el =>
                    <div key={el._id} className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src="https://placeimg.com/80/81/people" className='w-8 rounded-full' />
                            <div>
                            <p className=''>Emdadul Islam</p>
                            <p className='text-gray-500 text-sm'>Octobar 27, 2022</p>
                            </div>
                        </div>
                        <p className='text-lg font-medium'>
                            {el.review}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default ServiceReview