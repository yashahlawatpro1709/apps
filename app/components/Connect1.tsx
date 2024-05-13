import React from 'react'
import Connect from './Connect'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function Connect1() {
  return (
    <>
    <div className='text-center text-3xl font-semibold pt-10 mt-5'>
      <h1>Connect your applications instantly</h1>
      </div>
    <div className='flex space-x-3 justify-center py-10'>

    <Connect heading="unifydata" arrows="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdf0d1fb89e72e1fdba3aa_arrows-right%20(1).svg" details="Real-time data replication from any source to destination system"/>
    <Connect heading="unifyworkflows" arrows="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdf0d339dc5b5eeb0598b0_zap%20(1).svg" details="Automate entire business processes across teams & systems"/>
    <Connect heading="unifyapplications" arrows="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdf0d5916d1208cbd62143_layout-alt-01%20(1).svg" details="Create complex customer facing or internal applications, faster"/>
    </div>
    


    
    </>
  )
}
