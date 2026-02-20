import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-800 dark:text-white'>
      <Title title='Meet the Team' description='Meet the talented individuals who make our work possible.'></Title>

      <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
        {teamData.map((team, index) => (
            <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-300'>
              <img src={team.image} alt={team.name} className='w-16 h-16 rounded-full object-cover' />
              <div>
                <h3 className='font-bold text-lg'>{team.name}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{team.title}</p>
              </div>
            </div>
        ))}
    </div>
    </div>
    )
    }

export default Teams
