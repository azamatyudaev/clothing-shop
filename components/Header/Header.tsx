'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scroll, setScroll] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const scrollHeader = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)
  }, [])

  return (
    <header className={`${scroll ? 'header scroll-header' : 'header'}`}>
      <nav className="nav container">
        <Link className="nav__logo" href="/">
          Shop.
        </Link>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className={`${
                  pathname === '/' ? 'nav__link active-link' : 'nav__link'
                }`}
                href="/"
              >
                <i className="ri-home-line"></i>
                <span>Home</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className={`${
                  pathname === '/news' ? 'nav__link active-link' : 'nav__link'
                }`}
                href="/news"
              >
                <i className="ri-price-tag-3-line"></i>
                <span>News</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className={`${
                  pathname === '/collection'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }`}
                href="/collection"
              >
                <i className="ri-compass-line"></i>
                <span>Collection</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className={`${
                  pathname === '/products'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }`}
                href="/products"
              >
                <i className="ri-t-shirt-line"></i>
                <span>Products</span>
              </Link>
            </li>
          </ul>
        </div>

        <button className="change-theme">
          <i className="ri-moon-line"></i>
        </button>
      </nav>
    </header>
  )
}

export default Header
