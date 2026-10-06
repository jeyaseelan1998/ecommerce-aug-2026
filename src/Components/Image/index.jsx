import { useEffect, useRef, useState } from 'react'
import Skeleton from '../Skeleton'
import Loader from '../Loader'

import style from './style.module.css'

// `placeholder` picks what shows while the image loads: 'skeleton', 'spinner' or 'none'.
export default function Image({
  image,
  alt,
  background = false,
  className,
  rootMargin = '200px',
  placeholder = 'skeleton',
  children,
  spinnerColor,
}) {
  const src = image?.url
  const ratio = image?.width && image?.height ? (image.height * 100) / image.width : null

  const wrapperRef = useRef(null)
  const [inView, setInView] = useState(false)

  // Tracked per src so a new image shows the spinner again without resetting state in an effect.
  const [loadedSrc, setLoadedSrc] = useState(null)
  const [failedSrc, setFailedSrc] = useState(null)
  const loaded = Boolean(src) && loadedSrc === src
  const failed = Boolean(src) && failedSrc === src

  useEffect(() => {
    const node = wrapperRef.current
    if (!node || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  // Background images have no element to report load, so preload them off-DOM.
  useEffect(() => {
    if (!background || !inView || !src) return

    const preload = new window.Image()
    preload.onload = () => setLoadedSrc(src)
    preload.onerror = () => setFailedSrc(src)
    preload.src = src

    return () => {
      preload.onload = null
      preload.onerror = null
    }
  }, [background, inView, src])

  const classes = [style.wrapper, !ratio && style.noRatio, className].filter(Boolean).join(' ')

  return (
    <div
      ref={wrapperRef}
      className={classes}
      style={ratio ? { paddingTop: `${ratio}%` } : undefined}
    >
      {inView && src && (background ? (
        <div
          role={alt ? 'img' : undefined}
          aria-label={alt}
          className={`${style.background}${loaded ? ` ${style.loaded}` : ''}`}
          style={loaded ? { backgroundImage: `url("${src}")` } : undefined}
        />
      ) : (
        <img
          src={src}
          alt={alt ?? ''}
          width={image?.width}
          height={image?.height}
          className={`${style.image}${loaded ? ` ${style.loaded}` : ''}`}
          onLoad={() => setLoadedSrc(src)}
          onError={() => setFailedSrc(src)}
        />
      ))}

      {src && !loaded && !failed && (
        placeholder === 'skeleton' ? <Skeleton fill />
          : placeholder === 'spinner' ? <Loader center className={style.spinner} color={spinnerColor} />
            : null
      )}

      {children && <div className={style.content}>{children}</div>}
    </div>
  )
}
