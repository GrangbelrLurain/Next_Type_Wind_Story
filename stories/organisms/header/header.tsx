import React from 'react'
import { FlatBox } from '../../atoms/box/FlatBox'

interface HeaderProps {
  theme?: 'white' | 'black'
}
export const Header = ({ theme = 'white', ...props }: HeaderProps) => {
  return (
    <header className="w-screen h-16 fixed l-0 top-0 left-0">
      <FlatBox theme={theme}></FlatBox>
    </header>
  )
}
