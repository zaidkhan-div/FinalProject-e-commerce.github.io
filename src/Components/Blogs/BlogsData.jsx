import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Blogs.css'

const BlogsData = () => {
    const blogs = [
        {
            id: 1,
            title: 'Expect more from your workout clothes',
            image: 'https://neytri.wpengine.com/wp-content/uploads/2023/06/blog-11.jpg',
            excerpt: 'Bibendum at varius vel pharetra vel turpis nunc eget. Maecenas sed enim Ut viverra aliquet.elementum integer enim.',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere elit lacus, nec ultrices felis ullamcorper ac. Vestibulum ac mollis eratut finibus felis. Maecenas porta sodales est, quis consectetur diam suscipit sed. Quisque ullamcorper elementum odio, sit amet gravida eros sodales id. Aenean vel orci placerat vehicula purus id, consequat risus. Nullam volutpat vulputate purus, et preticcccccccum lorem tristique in. Vivamus vel tellus non dolor elementum vulputate et ac est. Nullam vehicul tellus sed ante hendrerit, eget bibendum erat gravida. Quisque dapibus sem sollicitudin risus rutrum molestie. Mauris pretium leo ex, nec luctus dolor molestie at. Vestibulum est lectus, bibendum quis malesuada ultricies, suscipit sit amet lorem.'
        },
        {
            id: 2,
            title: 'Expect more from your workout clothes',
            image: 'https://neytri.wpengine.com/wp-content/uploads/2023/06/blog-7-768x360.jpg',
            excerpt: 'Bibendum at varius vel pharetra vel turpis nunc eget. Maecenas sed enim Ut viverra aliquet.elementum integer enim.',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere elit lacus, nec ultrices felis ullamcorper ac. Vestibulum ac mollis eratut finibus felis. Maecenas porta sodales est, quis consectetur diam suscipit sed. Quisque ullamcorper elementum odio, sit amet gravida eros sodales id. Aenean vel orci placerat vehicula purus id, consequat risus. Nullam volutpat vulputate purus, et preticcccccccum lorem tristique in. Vivamus vel tellus non dolor elementum vulputate et ac est. Nullam vehicul tellus sed ante hendrerit, eget bibendum erat gravida. Quisque dapibus sem sollicitudin risus rutrum molestie. Mauris pretium leo ex, nec luctus dolor molestie at. Vestibulum est lectus, bibendum quis malesuada ultricies, suscipit sit amet lorem.'
        },
        {
            id: 3,
            title: 'Expect more from your workout clothes',
            image: 'https://neytri.wpengine.com/wp-content/uploads/2023/06/blog-10-768x360.jpg',
            excerpt: 'Bibendum at varius vel pharetra vel turpis nunc eget. Maecenas sed enim Ut viverra aliquet.elementum integer enim.',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere elit lacus, nec ultrices felis ullamcorper ac. Vestibulum ac mollis eratut finibus felis. Maecenas porta sodales est, quis consectetur diam suscipit sed. Quisque ullamcorper elementum odio, sit amet gravida eros sodales id. Aenean vel orci placerat vehicula purus id, consequat risus. Nullam volutpat vulputate purus, et preticcccccccum lorem tristique in. Vivamus vel tellus non dolor elementum vulputate et ac est. Nullam vehicul tellus sed ante hendrerit, eget bibendum erat gravida. Quisque dapibus sem sollicitudin risus rutrum molestie. Mauris pretium leo ex, nec luctus dolor molestie at. Vestibulum est lectus, bibendum quis malesuada ultricies, suscipit sit amet lorem.'
        },
        {
            id: 4,
            title: 'Expect more from your workout clothes',
            image: 'https://neytri.wpengine.com/wp-content/uploads/2023/06/blog-3.jpg',
            excerpt: 'Bibendum at varius vel pharetra vel turpis nunc eget. Maecenas sed enim Ut viverra aliquet.elementum integer enim.',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere elit lacus, nec ultrices felis ullamcorper ac. Vestibulum ac mollis eratut finibus felis. Maecenas porta sodales est, quis consectetur diam suscipit sed. Quisque ullamcorper elementum odio, sit amet gravida eros sodales id. Aenean vel orci placerat vehicula purus id, consequat risus. Nullam volutpat vulputate purus, et preticcccccccum lorem tristique in. Vivamus vel tellus non dolor elementum vulputate et ac est. Nullam vehicul tellus sed ante hendrerit, eget bibendum erat gravida. Quisque dapibus sem sollicitudin risus rutrum molestie. Mauris pretium leo ex, nec luctus dolor molestie at. Vestibulum est lectus, bibendum quis malesuada ultricies, suscipit sit amet lorem.'
        }
    ]
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
            // autoplay={{ delay: 2000 }}
            >
                {blogs.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <div key={blog.id} className="blog-list">
                            <img src={blog.image} alt={blog.title} />
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                            <Link to={`/blog/${blog.id}`} className='read-more'>Read More</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BlogsData
