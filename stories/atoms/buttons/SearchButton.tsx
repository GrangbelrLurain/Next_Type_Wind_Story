import React from 'react'

interface ButtonProps {
  theme?: 'white' | 'black'
}

export const SearchButton = ({ theme = 'white', ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        `${
          theme === 'white'
            ? 'bg-gray-500 hover:bg-gray-100 '
            : 'bg-gray-100 hover:bg-gray-500 '
        }`,
        'w-10',
        'h-10',
        'rounded-full',
        'flex',
        'items-center',
        'justify-center',
        'group',
        'transition-colors',
        'inline-block',
      ].join(' ')}
    >
      <div
        className={[
          'w-4',
          'h-4',
          'border-4',
          `${
            theme === 'white'
              ? 'border-white group-hover:border-gray-500 '
              : 'border-gray-500 group-hover:border-white '
          }`,
          'rounded-full',
          'relative',
          '-rotate-45',
          '-top-0.5',
          '-left-px',
          'transition-colors',
        ].join(' ')}
      >
        <div
          className={[
            'absolute',
            'top-2.5',
            'left-2/4',
            `${
              theme === 'white'
                ? 'bg-white group-hover:bg-gray-500'
                : 'bg-gray-500 group-hover:bg-white'
            }`,
            'w-1',
            'h-2',
            '-translate-x-2/4',
            'transition-colors',
          ].join(' ')}
        ></div>
      </div>
    </button>
  )
}
