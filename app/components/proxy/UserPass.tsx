import { ICountry2, proxiesInfo } from '@/app/api/interface/proxiesInfo'
import React, { FC } from 'react'

interface Props {
    proxiesInfo : proxiesInfo
    countrys:  ICountry2 | undefined
}

const UserPass: FC <Props> = ({proxiesInfo, countrys}) => {
  return (
    <div key={"user"}>
    <div  className='grid grid-cols-1 md:grid-cols-2 gap-x-20 my-5 md:my-10 px-5'>
        <div>
            <p className='text-xs mb-1 text-gray-400'>Username</p>
                 <div className='flex flex-grow w-[300px]'>
                    <input type="text" defaultValue={proxiesInfo?.proxies.username} className="flex-grow p-1 border-none outline-none w-72 h-6" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-500 absolute ml-[270px] my-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
              </div>
        </div>

        <div>
            <p className='text-xs mb-1 text-gray-400'>Password</p>
            <input type="text" defaultValue={proxiesInfo?.proxies.password} className="flex-grow p-1 border-none outline-none w-72 h-6" />
        </div>

        <div>
            <p className='text-xs overflow-visible mb-1 my-6 text-gray-400'>Country</p>
            <select className='absolute z-[1]' name="" id="">
                {countrys?.country_list.map(country => (
                    <option key={country.country_code} value={country.country_code}>{country.country_name}</option>
                ))}
            </select>
        </div>


    </div>

    <div className='flex justify-between p-5'>
        <button className='text-white font-bold text-sm rounded-lg px-4 py-2 bg-blue-600'>{'API Generator >'}
        </button>
        <button className='text-white font-bold text-sm rounded-lg px-4 py-2 bg-blue-600'>{'API Generator >'}
        </button>
    </div>
    </div>
  )
}

export default UserPass
