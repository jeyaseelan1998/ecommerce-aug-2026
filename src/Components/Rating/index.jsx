import { useId } from 'react'

import Title from '../Title'

import style from './style.module.css'

const STAR_PATH =
  'M9.25 0.5l2.72 5.51 6.08.88-4.4 4.29 1.04 6.06-5.44-2.86-5.44 2.86 1.04-6.06-4.4-4.29 6.08-.88z'

// Grey stars filled gold up to the rating (a 4.5 fills half of the fifth), followed by "4.5/5".
export default function Rating({ rating = 0, max = 5, showValue = true, className }) {
  const value = Math.min(Math.max(Number(rating) || 0, 0), max)

  // Clip ids must be unique on the page, or one card's half star clips another's.
  const clipId = useId()

  return (
    <div className={[style.rating, className].filter(Boolean).join(' ')}>
      <div className={style.stars} role="img" aria-label={`Rated ${value} out of ${max}`}>
        {Array.from({ length: max }, (_, index) => {
          const fill = Math.min(Math.max(value - index, 0), 1)

          return (
            <svg key={index} className={style.star} viewBox="0 0 18.5 18.5" aria-hidden="true">
              {/* Clipped to the filled share so a half point shows half a star. */}
              <clipPath id={`${clipId}-${index}`}>
                <rect width={18.5 * fill} height="18.5" />
              </clipPath>
              <path d={STAR_PATH} className={style.empty} />
              {fill > 0 && (
                <path d={STAR_PATH} clipPath={fill < 1 ? `url(#${clipId}-${index})` : undefined} />
              )}
            </svg>
          )
        })}
      </div>
      {showValue && (
        <Title tag="p" size={14}>
          {value}/<span className={style.max}>{max}</span>
        </Title>
      )}
    </div>
  )
}
