import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">1 Year Free Service
                        </h2>
                        <Link to='/services' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border font-semibold bg-orange-400 text-gray-100 dark:border-gray-400">Get Service Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner