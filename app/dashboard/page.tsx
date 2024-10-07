'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { getProxiesInfo } from '../api/getProxiesInfo/getProxiesInfo';
import { ICountry2, proxiesInfo, proxiesInfo2 } from '../api/interface/proxiesInfo';
import { getProxiesInfo2 } from '../api/getProxiesInfo2/getProxiesInfo2';
import { getCountrys } from '../api/getCountrys/getCountry';
import { AddOrRemoveGB } from '../api/AddOrRemoveGB/AddOrRemoveGB';
import { generateRandomCode } from '../utils/generateRandom';
import { AddWhiteList } from '../api/AddWhitelist/AddWhitelist';
import WhiteList from '../components/proxy/WhiteList';
import UserPass from '../components/proxy/UserPass';
import ProxyUserPass from '../components/proxy/ProxyUserPass';
import ProxyWhiteList from '../components/proxy/ProxyWhiteList';




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
    const [proxiesInfo, setProxiesInfo] = useState<proxiesInfo>();
    const [proxiesInfo2, setProxiesInfo2] = useState<proxiesInfo2 >();
    const [countrys, setCountrys] = useState<ICountry2>();
    const [gbValue, setGbValue] = useState<number>(0)



    const dateStr = proxiesInfo2?.expiration_date
    const date = new Date(dateStr!); 
    
    const formattedDate = date.toLocaleString('en-US', options);
 

    useEffect(() => {
        const fecthData = async () => {
            await getProxiesInfo(setProxiesInfo)
             await getProxiesInfo2(setProxiesInfo2)
             await getCountrys(setCountrys)

        }
         fecthData();
    }, [])
    
    const handleUserOrIp = (UserOrIp: string) => {
        setUserOrIp(UserOrIp)
    }





    const handleGbAdd = () => {
        AddOrRemoveGB('add', gbValue)
        location.reload();
    }

    const handleAddWhiteList = (ip: string) => {
        const regex = /^\d\.\d\.\d\.\d$/;

        if (regex.test(ip)) {
            AddWhiteList(ip)
            return <p >{ip}</p>
        } else {
            return <h1>No valid</h1>
        }

    }

    const usedPercentage  = (proxiesInfo?.proxies.bandwidthLeft! / proxiesInfo?.proxies.bandwidth!) * 100 ; // Percentage used


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
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10  mb-4">

      <div className="flex justify-between p-3  md:w-[400px] items-center h-32 rounded bg-gray-50 ">
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


        <div className="flex justify-between p-3 md:w-[400px] items-center h-32 rounded bg-gray-50 ">
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

        <div className="md:flex grid grid-cols-2  p-3 md:w-[700px] items-center h-auto md:h-32 rounded bg-gray-50 ">
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

        <div className='md:ml-10 my-5 md:my-0 ml-16 '>
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

        <div className='md:flex my-2 ml-12 md:ml-0 '>
            <div className='md:flex md:items-center my-6 md:my-0'>
            <p className='text-sm mb-1 font-bold text-nowrap md:-ml-0 mr-2'>Add Bandwidth</p>
                <div className='flex '>
            <input type="number" defaultValue={gbValue} onChange={(e) => setGbValue(Number(e.target.value))} className="flex-grow p-1 border-none outline-none w-20 h-6" />
            <span className="md:ml-2 text-blue-600 font-bold">GB</span>
            </div>

            <button onClick={handleGbAdd} className='text-white my-2 md:my-0 text-nowrap text-sm bg-blue-500 ml-3 md:ml-2  px-4 py-1  rounded-full'>{'Add >'}</button>
            </div>
        </div>

        </div>

</div>


      </div>


    <div className='mb-3'>
        <h2 className='font-bold text-xl'>Configure Proxy</h2>
        <h3 className='text-gray-400 text-base'>Configure your proxy type, and whiotelist IP</h3>
    </div>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

                {userOrIP === 'User' ? (
                    <UserPass proxiesInfo={proxiesInfo!} countrys={countrys} />
                )  : (
                       <WhiteList countrys={countrys} />
                ) }


         </div>

         <div className="rounded bg-gray-50 h-auto ">
            <div className='w-full align-top'>
                <ul className='flex gap-10  border-b-2 p-3'>
                    <li>
                        <button className='text-gray-600'>Proxy</button>
                    </li>
                </ul>
            </div>          
            {userOrIP === 'User' ? (
                <ProxyUserPass proxiesInfo={proxiesInfo!} />
            ) : (
              <ProxyWhiteList proxiesInfo={proxiesInfo!} />
            )}



          </div>

      </div>
  
   </div>
</div>
</>
  )
}

export default DashboardPage
