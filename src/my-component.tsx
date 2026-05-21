import type { HTMLAttributes, ReactNode } from 'react'

export namespace MyComponent {
  export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** The content to render */
    children: ReactNode
  }
}

/** A simple wrapper. */
export function MyComponent({ children, ...rest }: MyComponent.Props) {
  return <div {...rest}>{children}</div>
}
