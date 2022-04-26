import React from 'react'
// import '../styles/globals.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-slate-600 text-white ' : ''
  return (
    <button
      type="button"
      className={[
        'rounded-lg ',
        `${size === 'small' ? 'px-2 py-1 text-xs ' : ''}`,
        `${size === 'medium' ? 'px-3 py-1.5 text-sm ' : ''}`,
        `${size === 'large' ? 'px-4 py-2 text-base ' : ''}`,
        mode,
      ].join('')}
      {...props}
    >
      {label}
    </button>
  )
}
