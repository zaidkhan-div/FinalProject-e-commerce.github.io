import React from "react";
import './Blogs.css'
import { blogs } from "../../Components/Blogs/Blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div>
            <div className="blogs-container">
                <div className="blog-image">
                    <img src='https://neytri.wpengine.com/wp-content/uploads/2023/06/blog-11.jpg' alt="" />
                </div>
                <h1>Blogs title</h1>
                <p>Paragraph</p>
                <Link></Link>
            </div>
        </div>
    )
}

export default Blogs