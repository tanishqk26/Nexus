import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard'

const Services = () => {

    const servicesData =[
        {
            title: 'Advertising',
            description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
            icon: assets.ads_icon
            },
            {
            title: 'Content Creation',
            description: 'Our talented content creators produce high-quality, engaging content that tells your brand story and captivates your audience.',
            icon: assets.content_icon

        },
        {
            title: 'Marketing',
            description: 'We develop strategic marketing plans that align with your business goals and expand your market reach.',
            icon: assets.marketing_icon
        },
        {
            title: 'Social Media Management',
            description: 'Our creative team manages your social media presence, creating engaging content and building community.',
            icon: assets.social_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 gap-7 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

      <Title title="How can we help?" description="We offer a wide range of digital marketing services to help your business grow and succeed online."/>

      <div className='flex flex-col md:grid grid-cols-2 gap-4'>
        {servicesData.map((service,index) => (
          <Servicecard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Services
