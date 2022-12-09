import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section class='relative py-16 cursor-pointer'>
            <div class='relative h-96 min-w-[300ox]'>
                <Image
                    src={img}
                    alt='Card Cover'
                    layout='fill'
                    objectFit='cover'
                    class='filter grayscale rounded-2xl'
                />
            </div>
            <div class='absolute top-32 left-12'>
                <h3 class='text-4xl text-white mb-3 w-64'>{title}</h3>
                <p class='text-white'>{description}</p>
                <button class='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard