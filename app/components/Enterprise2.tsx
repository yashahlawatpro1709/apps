import React from 'react'
import Enterprise from './Enterprise'

export default function Enterprise2() {
  return (
    <>
    <div className='text-center text-4xl py-10 mt-24 font-semibold'>Enterprise Grade Security, Compliance & Scalability</div>
    <div className=' flex justify-center space-x-10 mb-24'>
        <Enterprise Image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdee75788fcddc29bc358b_Featured%20icon.svg" heading='Security' point1='End-to-End Encryption' point2='SSO' point3='Role-based access'/>
        <Enterprise Image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdb5146149e6e6dd224d40_Featured%20icon.png" heading='Compliance' point1='SOC 2 Type I' point2='ISO/IEC 27001:2022' point3='ISO/IEC 27701:2019' point4="GDPR"/>
        <Enterprise Image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65cdb5815c3e81f5934a9d6a_Featured%20icon%20(1).png" heading='Scalability' point1='Auto-Scaling Workloads' point2='Cloud Native Architecture' point3='Big Data processing'/>
    </div>
    </>
  )
}
