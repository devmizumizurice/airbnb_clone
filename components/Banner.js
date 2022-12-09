import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div class='relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600px] 2xl:h-[700px]'>
            <Image
                src='https://www.pakutaso.com/shared/img/thumb/neruneruPAR55463.jpg'
                layout='fill'
                objectFit='cover'
                class='filter grayscale blur-md'
            />
            <div class='absolute top-1/2 w-full text-center'>
                <p class='text-sm sm:text-lg text-white'>Not sure where to go? Perfect.</p>
                <button class='text-purple-500 bg-white px-10 py-4
                shadow-md rounded-full font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner