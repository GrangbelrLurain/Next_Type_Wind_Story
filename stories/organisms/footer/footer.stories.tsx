import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './footer'

export default {
  title: 'organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const white = Template.bind({})
white.args = {
  theme: 'white',
}

export const black = Template.bind({})
black.args = {
  theme: 'black',
}
