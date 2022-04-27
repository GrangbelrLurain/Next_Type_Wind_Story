import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './header'

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
