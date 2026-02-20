import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
const OurWork = () => {
    const work_data= [
         { 
            title: 'Election Campaign',
            description: 'We created a comprehensive digital campaign for a political candidate, including social media management, content creation, and targeted advertising. The campaign resulted in a significant win.',
            image : assets.work_mobile_app
        },
         { 
            title: 'Hotel Social Media Management',
            description: 'We managed the social media accounts for a hotel, creating engaging content and running targeted ads. The campaign resulted in a 30% increase in sells.',
            image : assets.work_dashboard_management
        },
         { 
            title: 'Car Delivery Shoots',
            description: 'We produced a series of high-quality videos showcasing a car delivery service, which were used for social media and online advertising. The campaign resulted in a 25% increase in bookings.',
            image : assets.work_fitness_app
        },
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40  pt-30 text-gray-700 dark:text-white'>
      
      <Title title='Our latest work' description='Check out some of our recent projects and see how we help businesses grow online.'></Title>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl'>
        {work_data.map((work, index) => (
            <div key={index} className='hover:scale-105 transition-transform duration-300 cursor-pointer'>
                <img src={work.image} alt={work.title} className='w-full rounded-xl'/>
                <h3 className='mt-3 mb-2 text-lg font-semibold '>{work.title}</h3>
                <p className='text-sm opacity-75 w-5/6'>{work.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OurWork
