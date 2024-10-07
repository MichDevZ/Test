'use client'
import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { unlimitedPlan } from '../api/uplimitedPlan/uplimitedPlans';
import { bandwidthPlan } from '../api/bandwidthPlan/bandwidth';
import Bandwidth from '../components/plans/Bandwidth';

const PurchasePage = () => {

    const plansBandidth = {
        bandwidth5: {
          gb: 5,
          price: 0.5
        },

        bandwidth100: {
          gb: 100, 
          price: 1
        }
    }


  return (
    <>
    <SideBar />
    <div className="p-4 sm:ml-64">

      <div className='flex justify-center mb-10'>

        <div className='border p-2  border-blue-300 rounded'>
          <button className='p-3 mr-1 font-bold rounded-lg bg-blue-600 text-white'>Bandwidth</button>
          <button className='p-3 border bg-gray-50 rounded-lg'>Unlimited</button>
        </div>

      </div>

        <div className='grid grid-cols-1 gap-x-96 md:px-48 md:grid-cols-2'>
              <Bandwidth plan={plansBandidth.bandwidth5} />
              <Bandwidth plan={plansBandidth.bandwidth100} />
        </div>
    </div>
 </>
  )
}

export default PurchasePage
