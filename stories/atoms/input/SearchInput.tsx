import React, { useState, useEffect } from 'react'

interface ButtonProps {
  theme?: 'white' | 'black'
  innerText?: string
  width?: string
}

export const SearchInput = ({
  theme = 'white',
  innerText = '검색어를 입력해주세요',
  width = 'w-60',
  ...props
}: ButtonProps) => {
  return (
    <input
      className={[
        'font-medium',
        'bg-transparent',
        theme === 'white' ? 'text-theme' : 'text-white',
        width,
      ].join(' ')}
      placeholder={innerText}
    ></input>
  )
}
