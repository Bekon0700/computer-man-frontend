import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ data }) => {
    const { _id, description, discountPercentage, rating, serviceName, thumbnail, price } = data
    const discount = (price * 1) * ((discountPercentage * 1) / 100)
    const discountPrice = (price * 1) - discount
    return (
        <div className='flex flex-col justify-between gap-8 border rounded-md'>
            <div className='flex flex-col gap-3'>
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={thumbnail}>
                        <img src={thumbnail} alt={serviceName} className='h-96 w-full rounded-t-md' />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                <p className='text-3xl font-semibold pl-3'>{serviceName}</p>
                <div className='flex items-center gap-2 pl-3'>
                    <p className='text-2xl font-semibold text-gray-900'>${discountPrice.toFixed(2)} </p>
                    <span className='line-through text-lg font-normal text-gray-500'>${price}</span>
                </div>
                <p className='text-lg text-green-700 font-medium pl-3'>Save {discountPercentage}%</p>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='truncate px-3'>{description}</p>
                <p className='pl-3 text-lg font-semibold'>Rating: {rating}</p>
                <Link to={`/serivce/${_id}`} className='text-center py-2 bg-blue-400 text-lg text-white font-semibold rounded-b-md'>View Details</Link>
            </div>
        </div>
    )
}

export default ServiceCard