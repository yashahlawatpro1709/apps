import React from 'react'
interface Props{
    heading:string;
    arrows:string;
    details:string;
}

export default function Connect({heading,arrows,details}:Props) {
  return (
    <>
  <div className='Box inline-block bg-purple-700 white-100 rounded-2xl' style={{ width: '386px', height: '393px', padding: '32px 20px' }}>
    <h1 className='given py-5 mb-10 text-white text-4xl' style={{ width: '151px', height: '36px' }}>{heading}</h1>
    <img src={arrows} alt="Arrows" className='newgiven py-5 text-3xl' style={{ width: '100px', height: '100px' }} />
    <p className='text-2xl text-white'>{details}</p>
  </div>
</>

  )
}
