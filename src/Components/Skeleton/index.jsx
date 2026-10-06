import style from './style.module.css'

// Numbers are treated as pixels; strings ('50%', '2rem') pass through.
const toSize = (value) => (typeof value === 'number' ? `${value}px` : value)

export default function Skeleton({
  shape = 'rect',
  width,
  height,
  radius,
  fill = false,
  className,
  style: inlineStyle,
}) {
  const classes = [style.skeleton, style[shape], fill && style.fill, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      aria-hidden="true"
      className={classes}
      style={{
        width: toSize(width),
        // A circle without a height stays round by matching its width.
        height: toSize(height ?? (shape === 'circle' ? width : undefined)),
        borderRadius: toSize(radius),
        ...inlineStyle,
      }}
    />
  )
}
