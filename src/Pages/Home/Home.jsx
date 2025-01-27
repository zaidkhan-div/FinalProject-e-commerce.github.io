import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Cart-Sidebar/Sidebar'
import Gallery from '../../Components/Product-Gallery/Gallery'
import Carousal from '../../Components/Swiper-Slider/Swiper'
import TestimonialCarousel from '../../Components/Testimonial/Testimonial'
import BlogsData from '../../Components/Blogs/BlogsData'

const Home = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>A great contemporary <br /> ankle crop jeans</h1>
          <p>Enteger neque felis, egestas a euismod in, pulvinar et nisl Aliquam ullam. Nulla <br />tincidunt convallis bibendum. Duis sed risus suscipit justo maximus pulvinar. </p>
          <Link to='/products'><button>SHOP COLLECTION</button></Link>
        </div>
      </div>
      <Gallery />
      <div className="signle-image">
        <h2>Classically Beautiful Outfits</h2>
        <button><Link to='/products'>SHOP COLLECTION</Link></button>
      </div>
      <div className="Swiper-carousal">
        <div className="swiper-text">
          <h2>Essential Collections</h2>
          <p>Lectus mauris ultrices eros in cursus. Viverra <br />adipiscing at in tellus integer feuat scel.</p>
        </div>
        <Carousal />
        <button className='swiper-btn'><Link to='/products'>VIEW ALL</Link></button>
      </div>
      <div className="testimonial">
        <TestimonialCarousel />
      </div>
      <div className="blogs">
        <div className="blogs-content">
          <h2>Latest News & Blog</h2>
          <p>Mollis aliquam ut porttitor leo a diam. Imperdiet sed <br /> euismod nisi porta lorem mollis.</p>
        </div>
        <BlogsData />
      </div>
    </div>
  )
}

export default Home
