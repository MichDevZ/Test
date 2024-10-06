'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { getProxiesInfo } from '../api/getProxiesInfo/getProxiesInfo';
import { ICountry2, proxiesInfo, proxiesInfo2 } from '../api/interface/proxiesInfo';
import { getProxiesInfo2 } from '../api/getProxiesInfo2/getProxiesInfo2';
import { getCountrys } from '../api/getCountrys/getCountry';
import { AddOrRemoveGB } from '../api/AddOrRemoveGB/AddOrRemoveGB';
import { generateRandomCode } from '../utils/generateRandom';




const DashboardPage = () => {

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',     
        month: 'short',      
        day: 'numeric',      
        hour: '2-digit',     
        minute: '2-digit',   
        hour12: false,       
      };

    const [userOrIP, setUserOrIp] = useState<string >('User');
    const [httpOrSocks5, setHttpOrSocks5] = useState<string >('Http');
    const [proxiesInfo, setProxiesInfo] = useState<proxiesInfo>();
    const [proxiesInfo2, setProxiesInfo2] = useState<proxiesInfo2 >();
    const [countrys, setCountrys] = useState<ICountry2 >();
    const [gbValue, setGbValue] = useState<number>(0)
    const [stickyValue, setStickyValue] = useState<number>(1);
    const [stickyTimeValue, setStickyTimeValue] = useState<number>(1);
    const [stickyCount, setStickyCount] = useState<number>(2000);
    const content = []
    
    const timesValues = {
        seconds: 1,
        minutes: 60,
        hours: 3600
    }

    const dateStr = proxiesInfo2?.expiration_date
    const date = new Date(dateStr!); 
    
    const formattedDate = date.toLocaleString('en-US', options);
 

    useEffect(() => {
        const data = getProxiesInfo(setProxiesInfo)
        const data2 = getProxiesInfo2(setProxiesInfo2)
        const countrys = getCountrys(setCountrys)
    }, [])
    
    const handleUserOrIp = (UserOrIp: string) => {
        setUserOrIp(UserOrIp)
    }

    const handleStickyValue = (value: number) => {
        if (stickyTimeValue === 1 && value > 86400) return;

        if (stickyTimeValue === 60 && value > 1440) return;

        if (stickyTimeValue === 3600 && value > 24) return;

        setStickyValue(value)
        

    }


    const handleGbAdd = () => {

        AddOrRemoveGB('add', gbValue)
        location.reload();

    }

    const usedPercentage  = (proxiesInfo?.proxies.bandwidthLeft! / proxiesInfo?.proxies.bandwidth!) * 100 ; // Percentage used

    for (let i = 0; i < stickyCount; i++) {
        const uniqueSession = generateRandomCode(10)
        content.push(`ipv6.lightningproxies.net:${httpOrSocks5 === 'Http' ? 1001 : 999}:${proxiesInfo?.proxies.username}-session-${uniqueSession}-time-${stickyTimeValue! * stickyValue}-package-ipv6:${proxiesInfo?.proxies.password}`);
    }

    if (!proxiesInfo && !proxiesInfo2) {
        return (
            <>
            <SideBar />
            <div className='p-4 sm:ml-64'>
                <h1>..Cargando</h1>
            </div>
            </>

        ) 
        
    } 

  return (
    <>
    <SideBar />
    <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <div className="grid grid-cols-4 gap-10  mb-4">
      <div className="flex justify-between p-3 w-[400px] items-center h-32 rounded bg-gray-50 ">
    <div>
        <div className='inline-flex p-1 mb-4 rounded bg-blue-500 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        </div>
        <h4 className='text-xs text-gray-400'>Current Plan</h4>
        <h1 className='font-bold'>IPv6 100GB</h1>
    </div>

    <div className='flex'>
        <button className='text-blue-500 border bg-blue-100
            text-sm border-blue-600 hover:bg-blue-600
            hover:text-white rounded-xl font-bold mb-20 px-2 '>Plan Setting</button>
            </div>
        </div>


        <div className="flex justify-between p-3 w-[400px] items-center h-32 rounded bg-gray-50 ">
    <div>
        <div className='inline-flex p-1 mb-4 rounded bg-blue-500 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>

        </div>
        <h4 className='text-xs text-gray-400'>Plan Expiry</h4>
        <h1 className='font-bold'>{formattedDate}</h1>
    </div>

    <div className='flex'>
        <button className='text-blue-500 border bg-blue-100
            text-sm border-blue-600 hover:bg-blue-600
            hover:text-white rounded-xl font-bold mb-20 px-2 '>
                Auto Renew</button>
            </div>
        </div>

        <div className="flex p-3 w-[700px] items-center h-32 rounded bg-gray-50 ">
            <div className='border-r-2 border-blue-600 pr-14'>
                <div className='inline-flex p-1 mb-4 rounded bg-blue-500 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                </div>
                <h4 className='text-xs text-gray-400'>Total Bandwidth</h4>
                <h1 className='font-bold'>100GB</h1>
            </div>

         <div>
            <div className='ml-10 w-[100px] h-[100px] relative'>
                <div className='w-[100px] p-[14px] h-[100px] border rounded-full outer'>
                    <div className='w-[70px] h-[70px] border rounded-full flex items-center justify-center inner'>
                        <div className='font-[#555] font-bold'>
                            {Math.round(usedPercentage)}%
                        </div>
                    </div>
                </div>
                <svg className='absolute top-0 left-0'
                    xmlns='http://www.w3.org/2000/svg' version='1.1'
                    width='100px' height='100px'>
                    <defs>
                        <linearGradient id='GradientColor'>
                            <stop offset='100%' stopColor='#60A5FA' />
                        </linearGradient>
                    </defs>
                    <circle cx='50' cy='50' r='40' stroke='#60A5FA' strokeWidth='10' fill='none' strokeDashoffset={usedPercentage ? 251.2 - (usedPercentage / 100) * 251.2 : 0} />

                    <circle cx='50' cy='50' r='40' stroke='url(#GradientColor)' strokeWidth='10' fill='none'strokeDashoffset={usedPercentage ? 251.2 - (usedPercentage / 100) * 251.2 : 0} />
                </svg>
            </div>

  </div>

        <div className='ml-10 '>
            <div className='flex mb-2 items-center'>
                <div className='border bg-white rounded-full p-1 mr-2'></div>
                <p className='text-xs text-gray-500'>Used Bandwidth</p>
                {proxiesInfo && (
                    <p className='ml-20'>{( proxiesInfo?.proxies.bandwidth! - proxiesInfo?.proxies.bandwidthLeft!).toFixed(1)}</p>
                )}
                
            </div>

            <div className='flex items-center'>
            <div className='border bg-[#60A5FA] rounded-full p-1 mr-2'></div>
                <p className='text-xs text-gray-500'>Remaining Bandwidth</p>
                {proxiesInfo && (
                    <p className='ml-12'>{proxiesInfo?.proxies.bandwidthLeft!.toFixed(1)}</p>
                )}
            </div>

        <div className='my-2 ml-4'>
            <p className='text-sm mb-1 font-bold'>Add Bandwidth</p>
            <input type="number" defaultValue={gbValue} onChange={(e) => setGbValue(Number(e.target.value))} className="flex-grow p-1 border-none outline-none w-20 h-6" />
            <span className="ml-2 text-blue-600 font-bold">GB</span>

            <button onClick={handleGbAdd} className='text-white text-sm bg-blue-500 ml-14 px-4 py-1 rounded-full'>{'Add >'}</button>
        </div>

        </div>

</div>


      </div>


    <div className='mb-3'>
        <h2 className='font-bold text-xl'>Configure Proxy</h2>
        <h3 className='text-gray-400 text-base'>Configure your proxy type, and whiotelist IP</h3>
    </div>




      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded bg-gray-50 h-96">
            <div className='w-full align-top'>
                <ul className='flex gap-10  border-b-2 p-3'>
                    <li>
                        <button onClick={() => handleUserOrIp('User')} 
                        className={userOrIP === 'User' ? 'font-bold border-b-2 border-blue-500' : 'text-gray-600' }>User Auth & Pass</button>
                    </li>
                    <li>
                        <button onClick={() => handleUserOrIp('IP')} 
                        className={userOrIP === 'IP' ? 'font-bold border-b-2 border-blue-500' : 'text-gray-600' }>Whitelist IP</button>
                    </li>
                </ul>
            </div>

            <div className='grid grid-cols-2 gap-x-20 my-10 px-5'>
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



         <div className="rounded bg-gray-50 h-auto ">
            <div className='w-full align-top'>
                <ul className='flex gap-10  border-b-2 p-3'>
                    <li>
                        <button className='text-gray-600'>Proxy</button>
                    </li>
                </ul>
            </div>

            <div className='grid grid-cols-2 gap-x-1 my-10 px-5'>
                <div>
                    <p className='text-xs mb-1 text-gray-400'>Host</p>
                         <div className='flex flex-grow w-[300px]'>
                            <input type="text" value={'ipv6.lightningproxies.net'} className="flex-grow p-1 border-none outline-none w-72 h-7" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-500 absolute ml-[270px] my-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                      </div>
                </div>

                <div className='-ml-16'>
                    <p className='text-xs mb-1 text-gray-400'>Port (HTTP & SOCKS5)</p>
                    <input type="text" value={httpOrSocks5 === 'Http' ? 1001 : 999} className="flex-grow p-1 border-none outline-none w-72 h-7" />
                        <button 
                        onClick={() => setHttpOrSocks5('Http')}
                        className={httpOrSocks5 === 'Http' ? 'text-sm mr-1 px-2 py-1 bg-blue-500 text-white' : 'text-sm mr-1 px-2 border border-blue-500'}>HTTP</button>
                        <button 
                        onClick={() => setHttpOrSocks5('Socks5')}
                        className={httpOrSocks5 === 'Socks5' ? 'text-sm mr-1 px-2 py-1 bg-blue-500 text-white' : 'text-sm mr-1 px-2 py-1 border border-blue-500'}>SOCKS5</button>
                </div>

                <div className='col-span-2'>
                    <p className='text-xs mb-1 my-6 text-gray-400'>Rorating Proxy</p>
                    <input type="text" 
                    value={`ipv6.lightningproxies.net:${httpOrSocks5 === 'Http' ? 1001 : 999}:${proxiesInfo?.proxies.username}:${proxiesInfo?.proxies.password}`} 
                     className="w-full p-1 border-none outline-none h-7" />
                </div>

                <div className='col-span-2'>
                    <p className='text-xs mb-2 my-6'>Sticky Sessions (Session time: 1 sec)</p>
                    <select className='w-full p-1 mb-2' onChange={(e) => setStickyTimeValue(Number(e.target.value)) } name="" id="">
                        <option value={timesValues.seconds}>Seconds</option>
                        <option value={timesValues.minutes}>Minutes</option>
                        <option value={timesValues.hours}>Hours</option>
                    </select>
                    <input type="text"  value={stickyValue} onChange={(e) => handleStickyValue(Number(e.target.value))} className="w-full p-1 border-none outline-none h-7" />
                </div>


            </div>

            <div className='flex justify-between p-5'>
                <div className='flex'>
                    <h2>Proxy Formart Settings:</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-1 text-blue-500 font-bold">
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
                        <p>{c}</p>
                    ))}
                </div>
            </div>

          </div>

      </div>
  
   </div>
</div>
</>
  )
}

export default DashboardPage
