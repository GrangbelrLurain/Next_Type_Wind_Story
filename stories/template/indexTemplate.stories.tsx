import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IndexTemplate } from './indexTemplate'

export default {
  title: 'template/index',
  component: IndexTemplate,
} as ComponentMeta<typeof IndexTemplate>

const Template: ComponentStory<typeof IndexTemplate> = args => (
  <IndexTemplate {...args} />
)

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
white.args = {
  theme: 'black',
}
