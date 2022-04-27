import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchBar } from './searchBar'

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = args => (
  <SearchBar {...args} />
)

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
