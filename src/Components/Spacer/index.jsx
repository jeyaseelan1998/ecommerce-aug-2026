import style from './style.module.css';

function Spacer({ size = 16 }) {
  return (
    <div className={`${style.spacer}${style[`size${size}`] ? ` ${style[`size${size}`]}` : ''}`} />
  )
}

export default Spacer