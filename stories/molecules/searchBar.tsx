import React from 'react'
import { SearchButton } from '../atoms/buttons/SearchButton'
import { SearchBox } from '../atoms/box/SearchBox'
import { SearchInput } from '../atoms/input/SearchInput'

interface SearchBarProps {
  theme?: 'white' | 'black'
}
export const SearchBar = ({ theme = 'white', ...props }: SearchBarProps) => {
  return (
    <div>
      <SearchBox theme={theme}>
        <SearchInput theme={theme}></SearchInput>
        <SearchButton theme={theme}></SearchButton>
      </SearchBox>
    </div>
  )
}
