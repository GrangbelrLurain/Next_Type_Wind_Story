import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlatBox } from './FlatBox'

export default {
  title: 'Atoms/box/FlatBox',
  component: FlatBox,
} as ComponentMeta<typeof FlatBox>

const Template: ComponentStory<typeof FlatBox> = args => <FlatBox {...args} />

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
