import style from './style.module.css'

export default function Container({ className, children }) {
  return (
    <div className={className ? `${style.container} ${className}` : style.container}>
      {children}
    </div>
  )
}
