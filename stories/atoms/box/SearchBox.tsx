import React from 'react'

interface BoxProps {
  theme?: 'white' | 'black'
  children?: React.ReactNode
}

export const SearchBox = ({
  theme = 'white',
  children = 'somethingHere',
}: BoxProps) => {
  return (
    <div
      className={[
        theme === 'white' ? 'bg-white' : 'bg-gray-500',
        'px-5',
        'py-2',
        'rounded-full',
        'opacity-80',
        'flex',
        `max-w-min`,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
