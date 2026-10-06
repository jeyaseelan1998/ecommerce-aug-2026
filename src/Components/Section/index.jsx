import style from './style.module.css'

export default function Section({ className, children, background = 'white' }) {
  return (
    <div className={`${style.section}${style[background] ? ` ${style[background]}` : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
