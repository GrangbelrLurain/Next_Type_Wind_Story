import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchInput } from './SearchInput'

export default {
  title: 'Atoms/Inputs/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
)

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
