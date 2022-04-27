import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchButton } from './SearchButton'

export default {
  title: 'Atoms/Buttons/SearchButton',
  component: SearchButton,
} as ComponentMeta<typeof SearchButton>

const Template: ComponentStory<typeof SearchButton> = args => (
  <SearchButton {...args} />
)

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
