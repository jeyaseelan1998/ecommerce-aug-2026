import CountUpModule from 'react-countup'

import Title from '../Title'
import InView from '../InView'

import style from './style.module.css'

// react-countup is CJS-only; Vite's interop can hand back the module object instead of the component.
const CountUp = CountUpModule.default ?? CountUpModule

// Counts from 0 up to `end` the first time it scrolls into view, e.g. "200+".
export default function Counter({
  end,
  suffix = '+',
  prefix = '',
  duration = 2,
  separator = ',',
  size = 40,
  weight = 700,
  className,
}) {
  const classes = [style.counter, className].filter(Boolean).join(' ')

  return (
    <InView as="div">
      {(visible) => (
        <Title tag="p" size={size} weight={weight} className={classes}>
          {visible ? (
            <CountUp
              end={end}
              prefix={prefix}
              suffix={suffix}
              duration={duration}
              separator={separator}
            />
          ) : (
            `${prefix}0${suffix}`
          )}
        </Title>
      )}
    </InView>
  )
}
