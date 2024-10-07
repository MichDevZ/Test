'use client'
import { AddWhiteList } from '@/app/api/AddWhitelist/AddWhitelist';
import { ICountry2 } from '@/app/api/interface/proxiesInfo';
import React, { FC, useState } from 'react'

interface Props {
    countrys: ICountry2 | undefined
}

const WhiteList: FC <Props> = ({countrys}) => {

    const [whiteIp, setWhiteIp] = useState<string>('');

    const handleAddWhiteList = (ip: string) => {
        const regex = /^\d\.\d\.\d\.\d$/;

        if (regex.test(ip)) {
            AddWhiteList(ip)
            return <p >{ip}</p>
        } else {
            return <h1>No valid</h1>
        }

    }



  return (
    <div key={'IP'}>
    <div  className='grid grid-cols-1  gap-x-20 my-5 md:my-10 px-5'>
    <div>
        <p className='text-xs mb-1 text-gray-400'>Whitelist IP</p>
             <div className='flex flex-grow w-[300px]'>
                <input type="text" value={whiteIp} onChange={(e) => setWhiteIp(e.target.value)} placeholder='Enter IP address here' className="flex-grow p-1 border-none outline-none w-72 h-9 mr-10" />
                <button onClick={() => handleAddWhiteList(whiteIp)} className='text-white font-bold text-nowrap text-sm rounded-lg px-4 py-2 bg-blue-600'>{'Add >'}</button>
          </div>
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
