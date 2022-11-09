import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = ({data}) => {
    const { _id, description, discountPercentage, rating, serviceName, thumbnail, price } = data
    const discount = (price * 1) * ((discountPercentage * 1) / 100)
    const discountPrice = (price * 1) - discount
    return (
        <div className='w-10/12 lg:w-2/3 mx-auto'>
            <div className='flex flex-col justify-between gap-8 rounded-md'>
                <div className='flex flex-col gap-3'>
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <div className="foo">
                            <PhotoView src={thumbnail}>
                                <img src={thumbnail} alt={serviceName} className='w-full rounded-t-md' />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                    <p className='text-3xl font-semibold pl-3'>{serviceName}</p>
                    <div className='flex items-center gap-2 pl-3'>
                        <p className='text-2xl font-semibold text-gray-900'>${discountPrice.toFixed(2)} </p>
                        <span className='line-through text-lg font-normal text-gray-500'>${price}</span>
                    </div>
                    <p className='text-lg text-green-700 font-medium pl-3'>Save {discountPercentage}%</p>
                    <p className='pl-3 text-lg font-semibold'>Rating: {rating}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='px-3 font-semibold'>Description</p>
                    <p className='px-3 text-justify'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails