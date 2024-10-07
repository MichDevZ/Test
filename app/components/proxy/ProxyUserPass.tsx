'use client'

import { generateRandomCode } from '@/app/utils/generateRandom';
import React, { FC, useState } from 'react'
import { proxiesInfo } from '../../api/interface/proxiesInfo';

interface Props {
    proxiesInfo: proxiesInfo 
}

const ProxyUserPass: FC <Props> = ({proxiesInfo}) => {

    const [httpOrSocks5, setHttpOrSocks5] = useState<string >('Http');
    const [stickyValue, setStickyValue] = useState<number>(1);
    const [stickyTimeValue, setStickyTimeValue] = useState<number>(1);
    const [stickyCount, setStickyCount] = useState<number>(2000);
    const content = []
    
    const timesValues = {
        seconds: 1,
        minutes: 60,
        hours: 3600
    }

    const handleStickyValue = (value: number) => {

        if(value === 0) {
            setStickyValue(1)
            return
        }

        if (stickyTimeValue === 1 && value > 86400) return;

        if (stickyTimeValue === 60 && value > 1440) return;

        if (stickyTimeValue === 3600 && value > 24) return;

        setStickyValue(value)
        

    }


    for (let i = 0; i < stickyCount; i++) {
        const uniqueSession = generateRandomCode(10)
        content.push(`ipv6.lightningproxies.net:${httpOrSocks5 === 'Http' ? 1001 : 999}:${proxiesInfo?.proxies.username}-session-${uniqueSession}-time-${stickyTimeValue! * stickyValue}-package-ipv6:${proxiesInfo?.proxies.password}`);
    }
    
  return (
    <div key={"user"}>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-1 my-5 md:my-10 px-5'>
        <div className='mb-5 md:mb-0'>
            <p className='text-xs mb-1 text-gray-400'>Host</p>
                 <div className='flex flex-grow w-[300px]'>
                    <input type="text" defaultValue={'ipv6.lightningproxies.net'} className="flex-grow p-1 border-none outline-none w-72 h-7" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-500 absolute ml-[270px] my-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
              </div>
        </div>

        <div className='md:-ml-16  md:block' >
            <p className='text-xs mb-1 text-gray-400'>Port (HTTP & SOCKS5)</p>
            <input type="text" defaultValue={httpOrSocks5 === 'Http' ? 1001 : 999} className="flex-grow p-1 border-none outline-none w-32 md:w-72 h-7" />
                <button 
                onClick={() => setHttpOrSocks5('Http')}
                className={httpOrSocks5 === 'Http' ? 'text-sm mr-1 px-2 py-1 bg-blue-500 text-white' : 'text-sm mr-1 px-2 border border-blue-500'}>HTTP</button>
                <button 
                onClick={() => setHttpOrSocks5('Socks5')}
                className={httpOrSocks5 === 'Socks5' ? 'text-sm mr-1 px-2 py-1 bg-blue-500 text-white' : 'text-sm mr-1 px-2 py-1 border border-blue-500'}>SOCKS5</button>
        </div>

        <div className='md:col-span-2'>
            <p className='text-xs mb-1 my-6 text-gray-400'>Rorating Proxy</p>
            <input type="text" 
            onChange={(e) => e.target.value}
            value={`ipv6.lightningproxies.net:${httpOrSocks5 === 'Http' ? 1001 : 999}:${proxiesInfo?.proxies.username}:${proxiesInfo?.proxies.password}`} 
             className="w-full p-1 border-none outline-none h-7" />
        </div>

        <div className='md:col-span-2'>
            <p className='text-xs mb-2 my-6'>Sticky Sessions (Session time: 1 sec)</p>
            <select className='w-full p-1 mb-2' onChange={(e) => setStickyTimeValue(Number(e.target.value)) } name="" id="">
                <option value={timesValues.seconds}>Seconds</option>
                <option value={timesValues.minutes}>Minutes</option>
                <option value={timesValues.hours}>Hours</option>
            </select>
            <input type="text"  value={stickyValue} onChange={(e) => handleStickyValue(Number(e.target.value))} className="w-full p-1 border-none outline-none h-7" />
        </div>


    </div>

    <div className='md:flex justify-between p-5'>
        <div className='flex text-nowrap mb-3 md:mb-0'>
            <h2>Proxy Formart Settings:</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="size-6 md:ml-1 text-blue-500 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
        </div>

        <div className='flex items-center'>
            <h2 className='text-nowrap mr-1'>Sticky Count: </h2>
            <input type="text"  value={stickyCount} onChange={(e) => setStickyCount(Number(e.target.value))} className="w-full p-1 border-none outline-none h-7" />
        </div>
    </div>

    <div className='p-3'>
        <div className='w-full h-72 border overflow-scroll text-nowrap'>
            {content.map(c => (
                <p key={c}>{c}</p>
            ))}
        </div>
    </div>
    </div>
  )
}

export default ProxyUserPass
