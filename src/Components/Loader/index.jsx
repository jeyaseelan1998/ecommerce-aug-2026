import { RotatingLines } from 'react-loader-spinner'

import style from './style.module.css'

export default function Loader({ color = '#000000', size = 24, center = false, fullScreen = false, className }) {
  const classes = [style.wrapper, center && style.center, fullScreen && style.fullScreen, className]
    .filter(Boolean)
    .join(' ')

  return (
    <RotatingLines
      color={color}
      height={size}
      width={size}
      ariaLabel="Loading"
      wrapperClass={classes}
    />
  )
}
