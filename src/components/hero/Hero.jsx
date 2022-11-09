import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className="hero py-48 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-xl lg:text-5xl font-bold">We Computer-Man_</h1>
                        <p className="py-6">
                            We provide the services regadring to your precious computer. Solving your computer related issue is our first priority. Don't be shy, follow our services to find your solution.
                        </p>
                        <Link to='/login' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero