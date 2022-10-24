import { useEffect, useRef, useState } from 'react'

const useWindowWidth = () => {
  const hasWindow = typeof window !== undefined
  const [width, setWidth] = useState<number>()
  const resizeTimeout: { current: NodeJS.Timeout | null } = useRef()

  useEffect(() => {
    function handleResize() {
      if (hasWindow) {
        setWidth(window.innerWidth)
      }
    }

    function throttle() {
      if (!resizeTimeout.current) {
        resizeTimeout.current = global.setTimeout(function () {
          resizeTimeout.current = null
          handleResize()
        }, 100)
      }
    }

    if (hasWindow) {
      window.addEventListener('resize', throttle)
      handleResize()
      return () => {
        window.removeEventListener('resize', throttle)
      }
    }
  })

  return width
}

export default useWindowWidth
