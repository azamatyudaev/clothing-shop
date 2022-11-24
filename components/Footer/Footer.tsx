import Link from 'next/link'
import ScrollUp from '../ScrollUp/ScrollUp'

const Footer = () => {
  return (
    <>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <Link className="footer__logo" href="/">
              Shop.
            </Link>

            <p className="footer_description">
              Committed to bringing you the <br /> best clothing from popular{' '}
              <br /> brands.
            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">Company</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Shop
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Category
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Contact info
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Blog</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Events
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Popular news
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="">
                    Recent news
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Office</h3>
              <p className="footer__information">
                Monday - Saturday <br /> 9AM - 10PM
              </p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" href=""></Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href=""></Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href=""></Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Contact us</h3>
              <ul className="footer__social-list">
                <li className="footer__social-item">
                  <Link className="footer__social-link" href="" target="_blank">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="footer__social-item">
                  <Link className="footer__social-link" href="" target="_blank">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </li>
                <li className="footer__social-item">
                  <Link className="footer__social-link" href="" target="_blank">
                    <i className="ri-whatsapp-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__info container">
          <span className="footer__copy">&#169; Shop. All Rights reserved</span>
          <Link className="footer__privacy" href="">
            Terms & Conditions
          </Link>
        </div>
      </footer>

      <ScrollUp />
    </>
  )
}

export default Footer
