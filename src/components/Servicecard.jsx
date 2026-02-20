import React from 'react'
import { useState } from 'react'

const Servicecard = ({service,index}) => {

    const [position,setPositions] = useState({x:0,y:0})
    const [visible, setVisible] = useState(false)
    const divref = React.useRef(null)

    const handleMouseMove = (e) => {
        const rect = divref.current.getBoundingClientRect()
        setPositions({x: e.clientX - rect.left, y: e.clientY - rect.top})
    }
  return (
    <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 hover:shadow-xl transition-all' onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} ref={divref} onMouseMove={handleMouseMove}>

        <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top:position.y - 150, left:position.x - 150}}/>
        
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 rounded-[10px] transition-all bg-white dark:bg-gray-900 z-10 relative'>

                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
                    <div className='flex-1'>
                        <h3 className='font-semibold text-lg'>
                            {service.title}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>{service.description}</p>
                    </div>
                
            </div>
      
    </div>
  )
}

export default Servicecard
