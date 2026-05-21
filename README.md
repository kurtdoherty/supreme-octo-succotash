# Storybook RCM args-only reproduction

Minimal reproduction for a bug in Storybook 10.4's `experimentalReactComponentMeta`.

## Steps

```bash
yarn install
yarn storybook
# open http://localhost:6006/manifests/components.html#filter-errors
```

## Expected

Both `ArgsOnly` and `WithRender` stories extract prop metadata for `MyComponent`.

## Actual

`ArgsOnly` reports: `No component file found for the "MyComponent" component.`

`WithRender` extracts props correctly.

## Upstream issue

https://github.com/storybookjs/storybook/issues/34877
