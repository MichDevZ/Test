import React, { FC } from 'react'
import { proxiesInfo } from '../../api/interface/proxiesInfo';

interface Props {
    proxiesInfo: proxiesInfo
}

const ProxyWhiteList : FC <Props> = ({proxiesInfo}) => {
  return (
    <div key={'IP'}>
    <div className='p-5'>
    <div className='w-full h-72 p-2 border overflow-scroll text-nowrap'>
        {proxiesInfo?.whitelist_proxies.mix.map(c => (
            <p key={c}>{c}</p>
        ))}
    </div>
</div>
</div>
  )
}

export default ProxyWhiteList
