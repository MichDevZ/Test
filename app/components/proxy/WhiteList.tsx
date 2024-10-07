'use client'
import { AddWhiteList } from '@/app/api/AddWhitelist/AddWhitelist';
import { ICountry2 } from '@/app/api/interface/proxiesInfo';
import React, { FC, useState } from 'react'

interface Props {
    countrys: ICountry2 | undefined,
    whitelist: []
    handleRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const WhiteList: FC <Props> = ({countrys, whitelist, handleRefresh}) => {

    const [whiteIp, setWhiteIp] = useState<string>('');
    const [validIp, setValidIp] = useState<boolean>(true)

    const handleAddWhiteList = (ip: string, action: string) => {
        const regex = /^\d\.\d\.\d\.\d$/;

        if (regex.test(ip)) {
            AddWhiteList(ip, action)
            handleRefresh(true)
            setWhiteIp('')
        } else {
            setValidIp(false)
        }

    }



  return (
    <div key={'IP'}>
    <div  className='grid grid-cols-1 gap-x-20 my-5 md:my-3 px-5'>
        <div className='flex gap-1'>
        {whitelist.map(white => (

        <div key={white} className='flex rounded-full mb-3 p-1 w-24 bg-blue-700 text-white'>
            <p className='ml-2'>{white}</p>
            <button onClick={(e) => handleAddWhiteList(white, 'remove')} className='ml-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

        </div>
        ))}
        </div>
    <div>
        <p className='text-xs mb-1 text-gray-400'>Whitelist IP</p>
             <div className='flex flex-grow w-[300px]'>
                <input type="text" value={whiteIp} onChange={(e) => setWhiteIp(e.target.value)} placeholder='Enter IP address here' className="flex-grow p-1 border-none outline-none w-64 md:w-72 h-9 mr-3 md:mr-3" />
                <button onClick={() => handleAddWhiteList(whiteIp, 'add')} className='text-white font-bold text-nowrap text-sm rounded-lg px-3 md:px-4 md:py-2 bg-blue-600'>{'Add >'}</button>
          </div>
    </div>

    <div className={`bg-red-500 p-2 text-center rounded w-40 my-2 text-white ${validIp ? 'hidden' : ''}`}>
        <p>Enter a Valid IP</p>
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

export default WhiteList
