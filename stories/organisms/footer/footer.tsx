import React from 'react'
import { FlatBox } from '../../atoms/box/FlatBox'

interface FooterProps {
  theme?: 'white' | 'black'
}
export const Footer = ({ theme = 'white', ...props }: FooterProps) => {
  return (
    <footer className="w-screen h-20 absolute bottom-0 left-0">
      <FlatBox theme={theme}></FlatBox>
    </footer>
  )
}
