import React from "react";
import './Faqs.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGreaterThan, faL } from "@fortawesome/free-solid-svg-icons";
import FaqsCompo from "../../Components/Faqs-Component/FaqsCompo";

const Faqs = () => {
    const faqsItem = [
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
    ];
    return (
        <>
            <div className="cart-hero">
                <h1>Contact Us</h1>
                <div className="cart-breadcrumbs">
                    <div className="cart-crumbs-text">
                        <Link to='/'><p>Home</p></Link>
                        <FontAwesomeIcon icon={faGreaterThan} />
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className="faqs-container">
                {faqsItem.map((item, index) => (
                    <FaqsCompo key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </>
    )

}
export default Faqs