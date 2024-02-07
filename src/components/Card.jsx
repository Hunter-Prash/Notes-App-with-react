import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  return (
    
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className=' relative w-60 h-[270px] bg-sky-200   rounded-[25px] bg-zinc-900/90 p-5 text-white overflow-hidden'>
         <FaFileAlt/>
        <p className='text-xs mt-5 font-semibold'>{data.desc}</p>
         <div className='footer absolute bottom-0  w-full  left-0 px-5 py-1 bg-green-600 h-[35px]'>
            <div className='flex items-center justify-between '>
                <h4>{data.filesize}</h4>
                <span className=' absolute left-[190px] h-7 w-7 bg-lime-500 rounded-full flex justify-center items-center '>
                    {data.close ? <IoMdClose/>:<FaDownload/>}
                    
                </span>
                
            </div>
         </div>
    </motion.div>
    
  )
}

export default Card
