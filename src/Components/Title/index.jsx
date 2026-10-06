import { Fragment } from 'react'

import style from './style.module.css'

// Matches real newlines and a literal "\n" typed straight into JSX text.
const LINE_BREAK = /\n|\\n/

const withLineBreaks = (text) =>
  text.split(LINE_BREAK).map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ))

// size and weight map to the fs{n} and fw{n} classes in style.module.css.
export default function Title({
  tag: Tag = 'h2',
  font = 'satoshi',
  size = 16,
  weight = 400,
  color,
  className,
  children,
}) {
  const classes = [style.title, style[font], style[color], style[`fs${size}`], style[`fw${weight}`], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes}>
      {typeof children === 'string' ? withLineBreaks(children) : children}
    </Tag>
  )
}
