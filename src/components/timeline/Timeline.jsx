import React from 'react'

const Timeline = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                                <h3 className="text-3xl font-semibold">Computer-Man</h3>
                                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">How we do thing</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Find the problem</h3>
                                    <p className="mt-3">First we go to the place where your computer is. Then we try to find the problem that needs to solved</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Necessary Parts</h3>
                                    <p className="mt-3">If your computer is lacking any hardware or software we will provide them accordingly.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">1 year free service</h3> 
                                    <p className="mt-3">We will service you for 1 year if you face any major issues.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline