'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const SideBar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleSidebar = () => {
     setIsOpen(!isOpen);
   };
 
   return (
     <>
       <button
         onClick={toggleSidebar}
         data-drawer-target="default-sidebar"
         data-drawer-toggle="default-sidebar"
         aria-controls="default-sidebar"
         type="button"
         className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
       >
         <span className="sr-only">Open sidebar</span>
         <svg
           className="w-6 h-6"
           aria-hidden="true"
           fill="currentColor"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             clipRule="evenodd"
             fillRule="evenodd"
             d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
           ></path>
         </svg>
       </button>
 
       <aside
         id="default-sidebar"
         className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 ${
           isOpen ? 'translate-x-0' : '-translate-x-full'
         } sm:translate-x-0`}
         aria-label="Sidebar"
       >
         <div className="h-full px-3 py-4 overflow-y-auto">
         <button onClick={toggleSidebar} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close menu</span>
         </button>
           <ul className="space-y-2 font-medium">
             <li>
               <Link
                 href="/dashboard"
                 className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
               >
                 <svg
                   className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 21"
                 >
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                 </svg>
                 <span className="ms-3">Dashboard</span>
               </Link>
             </li>
             <li>
               <Link
                 href="/purchase"
                 className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
               >
                 <svg
                   className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 18 18"
                 >
                   <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                 </svg>
                 <span className="ms-3">Purchase Plan</span>
               </Link>
             </li>
           </ul>
         </div>
       </aside>
     </>
   );
}

export default SideBar
