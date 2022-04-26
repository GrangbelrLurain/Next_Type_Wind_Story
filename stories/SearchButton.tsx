import React from 'react'
// import '../styles/globals.css'

interface ButtonProps {
  primary?: boolean
}

export const SearchButton = ({ primary = false, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        `${primary === true ? 'bg-[#282828]' : 'bg-gray-100'}`,
        'w-10',
        'h-10',
        'rounded-full',
        'flex',
        'items-center',
        'justify-center',
      ].join(' ')}
    >
      <div
        className={[
          'w-4',
          'h-4',
          'border-2',
          `${primary === true ? 'border-white' : 'border-[#282828]'}`,
          'rounded-full',
        ].join(' ')}
      ></div>
    </button>
  )
}
