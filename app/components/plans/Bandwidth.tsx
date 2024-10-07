import { bandwidthPlan } from '@/app/api/bandwidthPlan/bandwidth';
import { IPlanBandwidth } from '@/app/api/interface/proxiesInfo';
import { FC, useState } from 'react';

interface Props {
    plan: IPlanBandwidth
}

const Bandwidth: FC <Props> = ({plan}) => {

  const [purchasePlan, setPurchasePlan] = useState<boolean>(false);

  return (
    <>
    <div className='md:w-[400px] h-auto my-2 rounded border p-2 bg-gray-50'>

    <div className='flex justify-between p-5 '>
            <h1 className='font-bold '> {`IPv6 `} 
            <span className='text-blue-700 font-bold'>{plan.gb}GB</span></h1>
             <h1 className='font-bold'>
                <span className='text-blue-700 font-bold text-xs -ml-2.5 absolute '>$</span> 
                {plan.price}</h1>
    </div>

    <div className='border-y-2 p-5 text-gray-400 text-sm'>
        <p>Never worry about getting blocked again while scraping on IPv6-enabled sites. With access to billions of IPv6 addresses, your scraping tasks become faster and more efficient than ever.</p>
    </div>

    <div className='p-5'>

      <li className='list-none'>

        <ul className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 font-bold">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
        <p className='ml-1 text-sm'>/29 Network IP Pool size</p>
        </ul>

        <ul className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 font-bold">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
        <p className='ml-1 text-sm'>IP & User:Pass Authentication</p>
        </ul>

        <ul className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 font-bold">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
        <p className='ml-1 text-sm'>Country Targeting</p>
        </ul>

        <ul className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 font-bold">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
        <p className='ml-1 text-sm'>Rotating & Sticky Sessions</p>
        </ul>

        <ul className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 font-bold">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
        <p className='ml-1 text-sm'>HTTP Protocol Supported</p>
        </ul>

      </li>

    </div>

    <div className='block'>
        <button onClick={() => bandwidthPlan(plan.gb, setPurchasePlan)} className='text-white rounded-lg bg-blue-500 py-2 mb-1 w-full'>{'Purchase >'}</button>
        <p className='text-center text-gray-400 py-2 '>Terms & conditions apply</p>
    </div>

    <div className={`bg-green-600 text-center p-1 text-white ${purchasePlan ? '' : 'hidden'}`}>
        <p>Successful Purchase</p>
    </div>

    </div>

    </>
  )
}

export default Bandwidth
