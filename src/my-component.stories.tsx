import preview from '#.storybook/preview'
import { MyComponent } from './my-component'

const meta = preview.meta({
  title: 'MyComponent',
  component: MyComponent,
})

// Args-only — no render, no JSX of MyComponent. RCM fails here.
export const ArgsOnly = meta.story({
  args: { children: 'Hello' },
})

// Same args + explicit render. RCM succeeds. Documents the workaround.
export const WithRender = meta.story({
  args: { children: 'Hello' },
  render: (args) => <MyComponent {...args} />,
})
