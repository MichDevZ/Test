'use client'
import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { unlimitedPlan } from '../api/uplimitedPlan/uplimitedPlans';
import { bandwidthPlan } from '../api/bandwidthPlan/bandwidth';

const PurchasePage = () => {

    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const [selectedDays, setselectedDays] = useState<number>(0);
    const [bandwidthValue, setbandwidthValue] = useState<number>(0);
    const [speedInMbps, setSpeedInMbps] = useState<number>(0)
    const [message, setMessage] = useState<boolean>(false);


    const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPlan(e.target.value);
      setselectedDays(0)
      setbandwidthValue(0)
      setSpeedInMbps(0)
      setMessage(false)
    };


  return (
    <>
    <SideBar />
    <div className="p-4 sm:ml-64">
        <h1 className='text-black font-bold text-2xl'>Purchase Plan
        </h1>

        <form className="max-w-sm my-10">
      <label htmlFor="plans" className="block mb-2 text-sm font-medium text-gray-900 ">
        Select plan
      </label>
      <select
        id="plans"
        onChange={handlePlanChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value="">Choose a plan</option>
        <option value="ipv6-unlimited">IPv6 - Unlimited Plan</option>
        <option value="ipv6-bandwidth">IPv6 - Bandwidth Plan</option>
      </select>

      {selectedPlan === 'ipv6-unlimited' && (
        <div>
          <label htmlFor="speed" className="block mt-4 mb-2 text-sm font-medium text-gray-900 ">
            Select Days 
          </label>
          <select 
          onChange={(e) => setselectedDays(Number(e.target.value))}
          id="speed" 
          className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg p-2.5">
            <option value={0}>Choose Days</option>
            <option value={1}>1 Day</option>
          </select>

          <label htmlFor="speed" className="block mt-4 mb-2 text-sm font-medium text-gray-900 ">
            Select Speed in Mbps
          </label>
          <select 
          onChange={(e) => setSpeedInMbps(Number(e.target.value))}
          id="speed" 
          className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg p-2.5">
            <option value={0}>Choose Mbps</option>
            <option value={30}>30 Mbps</option>
            <option value={60}>60 Mbps</option>
          </select>

          {selectedDays > 0 && speedInMbps > 0 && ( 
              <button  onClick={(e) => {
                e.preventDefault(); 
                unlimitedPlan(selectedDays, speedInMbps, setMessage);
              }} className="mt-4 bg-blue-500 text-white rounded-lg ml-5 px-4 py-2">
                Confirm Plan
            </button>
            )}

            {message && (
                <div className='bg-green-600 my-10 p-3'>
                    <p className='text-white text-center'>Purchased successfully</p>
                </div>
            )}
        </div>
      )}

      {selectedPlan === 'ipv6-bandwidth' && (
     <div>
        <label htmlFor="bandwidth" className="block mt-4 mb-2 text-sm font-medium text-gray-900 ">
        Select Bandwidth
        </label>
        <select 
          onChange={(e) => setbandwidthValue(Number(e.target.value))}
          id="speed" 
          className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg p-2.5">
            <option value={0}>Choose Bandwidth</option>
            <option value={5}>5 GBs</option>
            <option value={100}>100 GBs</option>
          </select>

        {bandwidthValue > 0 && ( 
            <button onClick={(e) => 
                {e.preventDefault();
                bandwidthPlan(bandwidthValue, setMessage)
            }} className="mt-4 bg-blue-500 text-white rounded-lg ml-5 px-4 py-2">
                Confirm Plan
            </button>
            )}
        {message && (
        <div className='bg-green-600 my-10 p-3'>
                    <p className='text-white text-center'>Purchased successfully</p>
           </div>
            )}
   </div>
      )}
    </form>
    </div>
 </>
  )
}

export default PurchasePage
