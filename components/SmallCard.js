import Image from 'next/image'
import React from 'react'

function SmallCard({ img, location, distance }) {
    return (

        <div class='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transtion transform duration-200 ease-out'>
            <div class='relative h-16 w-16'>
                <Image
                    src={img}
                    layout='fill'
                    class='rounded-lg' />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 class='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard