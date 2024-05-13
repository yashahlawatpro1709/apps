import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface Props{
    Image:string;
    heading:string;
    point1:string;
    point2:string;
    point3:string;
    point4?:string;
}

export default function Enterprise({Image,heading,point1,point2,point3,point4}:Props) {
  return (
    <>
  <div className='Box inline-block bg-white white-100 rounded-2xl border border-gray-300 shadow-lg' style={{ width: '386px', height: '393px', padding: '32px 20px' }}>

    <img src={Image} alt="Image" className='py-5' />
    <h1 className='font-semibold text-2xl'>{heading}</h1>
    <div className='space-y-5 py-8'>
    <div className='flex space-x-2'><span className='text-violet-500'><CheckCircleOutlineIcon/></span><h2>{point1}</h2></div>
    <div className='flex space-x-2'><span className='text-violet-500'><CheckCircleOutlineIcon/></span><h2>{point2}</h2></div>
    <div className='flex space-x-2'><span className='text-violet-500'><CheckCircleOutlineIcon/></span><h2>{point3}</h2></div>
    </div>
  </div>
</>

  )
}

