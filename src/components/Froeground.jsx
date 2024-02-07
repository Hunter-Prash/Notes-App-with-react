import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"


function Froeground() {
  const ref=useRef(null);
  const data=[{
    desc:"lorem dvsdvs fvvsbv bfbcbsfjbnsfbb sdbvjrbwbv fbfsbfdb",filesize:"0.9mb",close:false,tag:{isOpen:true,tagTitle:"download"}
  },
  {
    desc:"lorem dvsdvs fvvsbv bfbcbsfjbnsfbb sdbvjrbwbv fbfsbfdb",filesize:"0.7mb",close:false,tag:{isOpen:true,tagTitle:"download"}
  },
  {
    desc:"lorem dvsdvs fvvsbv bfbcbsfjbnsfbb sdbvjrbwbv fbfsbfdb",filesize:"0.1mb",close:true,tag:{isOpen:false,tagTitle:"download"}
  }
]
  return (
    <>
      <div ref={ref} className='fixed z-[3] w-full h-full flex gap-5 p-5 '>
        {
          data.map((item,index)=>(
            <Card data={item} refrence={ref}/>
          ))
        }
      </div>
    </>
  )
}

export default Froeground
