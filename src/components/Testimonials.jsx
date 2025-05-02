import React, { useState } from 'react'
import quoteIcon from '../assets/images/icon-quote.svg'
import './Testimonials.css'


const Testimonials = ({ testimonials }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedTestimonial(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map(testimonial => (
                        <li className="testimonials-item" key={testimonial.id}>
                            <div
                                className="content-card"
                                onClick={() => openModal(testimonial)}
                            >

                                <figure className="testimonials-avatar-box">
                                    <img src={testimonial.image} alt={testimonial.name} width='60' data-testimonials-avatar />
                                </figure>

                                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>

                                <div className="testimonials-text">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Testimonial modal */}

            {
                isModalOpen && selectedTestimonial && (

                    <div className="modal-container active">
                        <div className="overlay active"></div>
                        <section className="testimonials-modal">
                            <button className="modal-close-btn" onClick={closeModal}>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>

                            <div className="modal-img-wrapper">
                                <figure className="modal-avatar-box">
                                    <img src={selectedTestimonial.image} alt={selectedTestimonial.name} width="80" />
                                </figure>

                                <img src={quoteIcon} alt="quote icon" />
                            </div>

                            <div className="modal-content">
                                <h3 className="h3 modal-title">{selectedTestimonial.name}</h3>
                                <span className='modal-subtitle'>{selectedTestimonial.position} - {selectedTestimonial.company}</span>
                                <div>
                                    <p>{selectedTestimonial.text}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                )

            }
        </>

    )
}

export default Testimonials