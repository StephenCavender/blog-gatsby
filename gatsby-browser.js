import React from 'react'
import { RootWrapper } from './src/components/root-wrapper'
import './src/styles/global.css'

export const wrapPageElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
)
