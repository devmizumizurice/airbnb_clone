import { Bars2Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
function Header() {
    return (
        <header class='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-4 lg:px-10'>
            {/* left */}
            <div class='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left' />
            </div>
            {/* middle */}
            <div class='flex items-center lg:border rounded-full py-2 lg:shadow-sm'>
                <input type='text' placeholder='Start your search'
                    class='flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600' />
                <MagnifyingGlassIcon class='hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:mx-4' />
            </div>
            {/* right */}
            <div class='flex items-center justify-end space-x-4 text-gray-500'>
                <p class='hidden lg:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon class='h-6 cursor-pointer' />
                <div class='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars2Icon class='h-6' />
                    <UserCircleIcon class='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header