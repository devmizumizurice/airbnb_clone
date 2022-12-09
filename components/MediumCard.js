import Image from 'next/image'
import React from 'react'

function MediumCard({ img, title }) {
    return (
        <div class='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div class='relative h-80 w-80'>
                <Image
                    src={img}
                    layout='fill'
                    class='rounded-xl' />
            </div>
            <h3 class='text-2xl mt-3'>{title}</h3>
        </div>
    )
}

export default MediumCard