import { useEffect, useRef, useState } from 'react'

// Tracks whether its wrapper is in the viewport and passes that to `children`, e.g. {(visible) => ...}.
export default function InView({
  children,
  threshold = 0.5,
  once = true,
  as: Tag = 'div',
  className,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <Tag ref={ref} className={className}>
      {typeof children === 'function' ? children(visible) : children}
    </Tag>
  )
}
