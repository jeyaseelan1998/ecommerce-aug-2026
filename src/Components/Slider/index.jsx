import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import style from './style.module.css'

// Loop needs more slides than fit on screen, so short lists are repeated up to this many.
const MIN_LOOP_SLIDES = 12

const fillForLoop = (items) => {
  if (!items.length) return items

  const filled = [...items]
  while (filled.length < MIN_LOOP_SLIDES) filled.push(...items)
  return filled
}

// Auto-sliding, looping carousel; renderSlide(item, index) draws each slide.
// `marquee` makes it glide continuously at a constant speed instead of stepping.
export default function Slider({
  items = [],
  renderSlide,
  delay = 2500,
  speed = 600,
  loop = true,
  marquee = false,
  spaceBetween = 32,
  slidesPerView = 'auto',
  breakpoints,
  className,
  slideClassName,
}) {
  if (!items.length) return null

  const slides = loop ? fillForLoop(items) : items

  return (
    <Swiper
      modules={[Autoplay]}
      // A marquee chains transitions back to back, so `speed` is the time each slide takes to pass.
      autoplay={{ delay: marquee ? 0 : delay, disableOnInteraction: false, pauseOnMouseEnter: !marquee }}
      allowTouchMove={!marquee}
      loop={loop}
      speed={speed}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      className={[style.slider, marquee && style.marquee, className].filter(Boolean).join(' ')}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index} className={[style.slide, slideClassName].filter(Boolean).join(' ')}>
          {renderSlide(item, index % items.length)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
