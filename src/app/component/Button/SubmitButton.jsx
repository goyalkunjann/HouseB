import React from 'react'

export const SubmitButton = ( {children, className} ) => {
  return (
    <button className={`${className}`}>{children}</button>
  )
}
