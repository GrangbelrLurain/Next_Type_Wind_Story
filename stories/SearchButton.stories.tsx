import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchButton } from './SearchButton'

export default {
  title: 'Buttons/SearchButton/Button',
  component: SearchButton,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof SearchButton> = args => (
  <SearchButton {...args} />
)

export const on = Template.bind({})
on.args = {
  primary: true,
}

export const off = Template.bind({})
off.args = {
  primary: false,
}
