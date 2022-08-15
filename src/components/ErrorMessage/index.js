import React from 'react'

import PropTypes from 'prop-types'

import { ErrorMessageStyle } from './styles'

export function ErrorMessage({ children }) {
  return <ErrorMessageStyle>{children}</ErrorMessageStyle>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
