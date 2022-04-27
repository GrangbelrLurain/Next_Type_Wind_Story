import React from 'react'

interface FlatBoxProps {
  theme?: 'white' | 'black'
  children?: React.ReactNode
  innerText?: string
  styles?: string
}
export const FlatBox = ({
  theme = 'white',
  children,
  innerText,
  styles,
  ...props
}: FlatBoxProps) => {
  return (
    <>
      <article
        className={[
          theme === 'white' ? 'bg-slate-50 text-black' : '',
          theme === 'black' ? 'bg-slate-500 text-white' : '',
          styles,
          'w-full',
          'h-full',
        ].join(' ')}
      >
        {children}
        {innerText}
      </article>
    </>
  )
}
