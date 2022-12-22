import React from 'react'
import PrismSyntaxHighlight from './prism-syntax-highlight'

export const CodeBlock = ({ children, className }) =>
  className ? (
    <PrismSyntaxHighlight className={className}>
      {children}
    </PrismSyntaxHighlight>
  ) : (
    <code>{children}</code>
  )
