import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchBox } from './SearchBox'

export default {
  title: 'Atoms/box/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>

const Template: ComponentStory<typeof SearchBox> = args => (
  <SearchBox {...args} />
)

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
