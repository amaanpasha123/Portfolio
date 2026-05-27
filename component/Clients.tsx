import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
    return (
        <div>
            <h1 className="heading text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                Kind words from Our{" "}
                <span className="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                    Satisfied clients
                    <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-[1px]"></span>
                </span>
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20 justify-items-center items-center mt-24 w-full">
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='normal'
                />
            </div>
        </div>
    )
}

export default Clients



