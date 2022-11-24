'use client'

import Link from 'next/link'
import Image from 'next/image'
import HomeImage1 from '../public/img/home1.png'
import HomeImage2 from '../public/img/home2.png'
import NewsImage1 from '../public/img/new1.png'
import NewsImage2 from '../public/img/new2.png'
import NewsImage3 from '../public/img/new3.png'
import CollectionImage1 from '../public/img/collection1.png'
import CollectionImage2 from '../public/img/collection2.png'
import ProductImage1 from '../public/img/product1.png'
import ProductImage2 from '../public/img/product2.png'
import ProductImage3 from '../public/img/product3.png'
import ProductImage4 from '../public/img/product4.png'
import BrandImage1 from '../public/img/logo1.png'
import BrandImage2 from '../public/img/logo2.png'
import BrandImage3 from '../public/img/logo3.png'
import BrandImage4 from '../public/img/logo4.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              New Clothing <br /> Collection
            </h1>
            <p className="home__description">
              The new collection of clothing from <br />
              the best brands this year.
            </p>
            <Link className="button__link" href="/news">
              Explore <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="home__images">
            <div className="home__image">
              <Image
                src={HomeImage1}
                width="650"
                height="900"
                alt="Home Image 1"
              />
            </div>
            <div className="home__image">
              <Image
                src={HomeImage2}
                width="650"
                height="900"
                alt="Home Image 2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="news section" id="news">
        <h2 className="section__title">New Categories</h2>

        <div className="news__container container grid">
          <article className="news__card">
            <div className="news__img">
              <Image
                src={NewsImage1}
                width={550}
                height={791}
                alt="News Image 1"
              />
            </div>

            <Link className="news__link" href="/news">
              <div className="news__data">
                <h2 className="news__title">Hoodie & Sweatshirt</h2>
                <p className="news__subtitle">Winter collection</p>
              </div>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </article>

          <article className="news__card">
            <div className="news__img">
              <Image
                src={NewsImage2}
                width={550}
                height={791}
                alt="News Image 2"
              />
            </div>

            <Link className="news__link" href="/news">
              <div className="news__data">
                <h2 className="news__title">Pants & Jackets</h2>
                <p className="news__subtitle">Winter collection</p>
              </div>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </article>

          <article className="news__card">
            <div className="news__img">
              <Image
                src={NewsImage3}
                width={550}
                height={791}
                alt="News Image 3"
              />
            </div>

            <Link className="news__link" href="/news">
              <div className="news__data">
                <h2 className="news__title">Coats & Coat Sets</h2>
                <p className="news__subtitle">Winter collection</p>
              </div>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </article>
        </div>
      </section>

      <section className="collection section" id="collection">
        <h2 className="section__title">Collections</h2>
        <div className="collection__container container">
          <div className="collection__explore">
            <div className="collection__data-men">
              <h2 className="collection__title">
                Men <br /> Collection
              </h2>
              <Link className="button__link" href="/collection">
                Explore Clothes <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="collection__img">
              <Image
                src={CollectionImage1}
                width={550}
                height={795}
                alt="Collection Image 1"
              />
            </div>
          </div>

          <div className="collection__explore">
            <div className="collection__img">
              <Image
                src={CollectionImage2}
                width={550}
                height={795}
                alt="Collection Image 2"
              />
            </div>

            <div className="collection__data-women">
              <h2 className="collection__title">
                Women <br /> Collection
              </h2>
              <Link className="button__link" href="/collection">
                Explore Clothes <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
        <h2 className="section__title">Best Products</h2>

        <div className="products__container container">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            grabCursor={true}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev'
            }}
            modules={[Navigation]}
            breakpoints={{
              425: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 48
              }
            }}
          >
            <SwiperSlide>
              <article className="products__card">
                <div className="products__img">
                  <Image
                    src={ProductImage1}
                    width={450}
                    height={600}
                    alt="Gotland black Jacket"
                  />
                </div>

                <h2 className="products__title">Gotland black Jacket</h2>
                <span className="products__price">$124.99</span>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="products__card">
                <div className="products__img">
                  <Image
                    src={ProductImage2}
                    width={450}
                    height={600}
                    alt="Black Sports Shorts"
                  />
                </div>

                <h2 className="products__title">Black Sports Shorts</h2>
                <span className="products__price">$34.99</span>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="products__card">
                <div className="products__img">
                  <Image
                    src={ProductImage3}
                    width={450}
                    height={600}
                    alt="Knox Quilted Jacket"
                  />
                </div>

                <h2 className="products__title">Knox Quilted Jacket</h2>
                <span className="products__price">$97.99</span>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="products__card">
                <div className="products__img">
                  <Image
                    src={ProductImage4}
                    width={450}
                    height={600}
                    alt="Blue Sport Pants"
                  />
                </div>

                <h2 className="products__title">Blue Sport Pants</h2>
                <span className="products__price">$69.99</span>
              </article>
            </SwiperSlide>
          </Swiper>

          <div className="next">
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="prev">
            <i className="ri-arrow-left-line"></i>
          </div>
        </div>
      </section>

      <section className="brand section" id="brand">
        <h2 className="section__title">Brands We Sell</h2>
        <div className="brand__container container grid">
          <div className="brand__img">
            <Image
              src={BrandImage1}
              width={200}
              height={217}
              alt="Brand Logo 1"
            />
          </div>
          <div className="brand__img">
            <Image
              src={BrandImage2}
              width={200}
              height={217}
              alt="Brand Logo 2"
            />
          </div>
          <div className="brand__img">
            <Image
              src={BrandImage3}
              width={200}
              height={217}
              alt="Brand Logo 3"
            />
          </div>
          <div className="brand__img">
            <Image
              src={BrandImage4}
              width={200}
              height={217}
              alt="Brand Logo 4"
            />
          </div>
        </div>
      </section>
    </>
  )
}
