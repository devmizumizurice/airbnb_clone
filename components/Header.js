import { Bars2Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';


import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState('1')

    const router = useRouter()

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-4 lg:px-10'>
            {/* left */}
            <Link href='/'>

                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image
                        src='https://links.papareact.com/qd3'
                        alt='Brand Logo'
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left' />
                </div>
            </Link>
            {/* middle */}
            <div className='flex items-center lg:border rounded-full py-2 lg:shadow-sm'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    placeholder={placeholder || 'Start your search'}
                    className='flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600' />
                <MagnifyingGlassIcon className='hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:mx-4' />
            </div>
            {/* right */}
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                <p className='hidden lg:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars2Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>

            </div>
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                        />
                    </div>
                    <div className='flex'>
                        <button
                            onClick={resetInput}
                            className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-500'>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header