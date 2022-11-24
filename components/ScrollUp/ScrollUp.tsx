'use client'

import React from 'react'
import * as Scroll from 'react-scroll'

const ScrollUp = () => {
  const [scrolled, setScrolled] = React.useState(false)

  const scroll = Scroll.animateScroll

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  React.useEffect(() => {
    const scrollUp = () => {
      if (window.scrollY >= 350) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', scrollUp)
  }, [scrolled])

  return (
    <div
      onClick={scrollToTop}
      className={`${scrolled ? 'scrollup show-scroll' : 'scrollup'}`}
    >
      <i className="ri-arrow-up-line"></i>
    </div>
  )
}

export default ScrollUp
