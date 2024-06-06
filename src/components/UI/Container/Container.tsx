import React from 'react'

type Props = {
  children: React.ReactNode
}

function Container({children}: Props) {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[90%] m:w-[95%] h-full'>
          {children}
        </div>
    </div>
  )
}

export default Container