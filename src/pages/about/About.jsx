import React, { useState } from 'react'
import './About.css'

// services icons
import designIcon from '../../assets/images/icon-design.svg'
import devIcon from '../../assets/images/icon-dev.svg'
import appIcon from '../../assets/images/icon-app.svg'
import cameraIcon from '../../assets/images/icon-photo.svg'


// testimonial icons
import testimonialAvatar1 from '../../assets/images/avatar-1.png'
import testimonialAvatar2 from '../../assets/images/avatar-2.png'
import testimonialAvatar3 from '../../assets/images/avatar-3.png'
import testimonialAvatar4 from '../../assets/images/avatar-4.png'
import testimonialAvatar5 from '../../assets/images/my-avatar.png'
import quoteIcon from '../../assets/images/icon-quote.svg'

// clients logos
import clientLogo1 from '../../assets/images/logo-1-color.png'
import clientLogo2 from '../../assets/images/logo-2-color.png'
import clientLogo3 from '../../assets/images/logo-3-color.png'
import clientLogo4 from '../../assets/images/logo-4-color.png'
import clientLogo5 from '../../assets/images/logo-5-color.png'
import clientLogo6 from '../../assets/images/logo-6-color.png'

const services = [
    {
        id: 1,
        icon: designIcon,
        title: 'Web design',
        description: 'The most modern and high-quality design made at a professional level.'
    },
    {
        id: 2,
        icon: devIcon,
        title: 'Web development',
        description: 'High-quality development of sites at the professional level.'
    },
    {
        id: 3,
        icon: appIcon,
        title: 'Mobile apps',
        description: 'Professional development of applications for iOS and Android'
    },
    {
        id: 4,
        icon: cameraIcon,
        title: 'Photography',
        description: 'I make high-quality photos of any category at a professional level.'
    }
]

const testimonials = [
    {
        id: 1,
        image: testimonialAvatar1,
        name: 'Anthony Birembaut',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
        id: 2,
        image: testimonialAvatar2,
        name: 'Nathalie Cotte',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
        id: 3,
        image: testimonialAvatar3,
        name: 'Nicolas Chabanoles',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
        id: 4,
        image: testimonialAvatar4,
        name: 'Julien Mege',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
        id: 5,
        image: testimonialAvatar5,
        name: 'Pablo Alonso',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
]

const clients = [
    {
        id: 1,
        icon: clientLogo1
    },
    {
        id: 2,
        icon: clientLogo2
    },
    {
        id: 3,
        icon: clientLogo3
    },
    {
        id: 4,
        icon: clientLogo4
    },
    {
        id: 5,
        icon: clientLogo5
    },
    {
        id: 6,
        icon: clientLogo6
    }
]

const About = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonidal, setSelectedTestimonidal] = useState(null);

    const openModal = (testimonial) => {
        setSelectedTestimonidal(testimonial);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedTestimonidal(null);
        setIsModalOpen(false);
    }

  return (
    <article className="about active" data-page="about">
        <header>
            <h2 className="h2 article-title">About Me</h2>
        </header>

        <section className="about-text">
            <p>
                I'm Highly skilled Frontend Developer with over 5 years of experience in building responsive, highperformance web applications, 
                including 2 years specializing in React.js. Passionate about new technologies, best practices, and UI/UX design, 
                with a detail-oriented, curious, and problem-solving mindset. 
            </p>

            <p>
                Expertise in modern frontend technologies, agile teamwork, and delivering scalable, 
                userfriendly solutions while continuously striving for improvement.
            </p>
        </section>

        {/* service section */}

        <section className="service">
            <h3 className="h3 service-title">What I'm doing</h3>

            <ul className="service-list">
                { services.map(service => (
                    <li className="service-item" key={service.id}>
                        <div className="service-icon-box">
                            <img src={service.icon} alt={service.title} width='40' />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">{service.title}</h4>

                            <p className="service-item-text">
                                {service.description}
                            </p>
                        </div>
                    </li>
                )) }
            </ul>
        </section>

        {/* testimonial section */}

        <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>

            <ul className="testimonials-list has-scrollbar">
                { testimonials.map(testimonial => (
                    <li className="testimonials-item" key={testimonial.id}>
                        <div 
                            className="content-card" 
                            onClick={() => openModal(testimonial)}
                        >

                            <figure className="testimonials-avatar-box">
                                <img src={testimonial.image} alt={testimonial.name} width='60' data-testimonials-avatar/>
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

        {/* testimonial modal */}

        {isModalOpen && selectedTestimonidal && (
            
        <div className="modal-container active">
            <div className="overlay active"></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" onClick={closeModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={selectedTestimonidal.image} alt={selectedTestimonidal.name} width="80"/>
                        </figure>

                        <img src={quoteIcon} alt="quote icon" />
                    </div>

                    <div className="modal-content">
                        <h3 className="h3 modal-title">{selectedTestimonidal.name}</h3>

                        <div>
                            <p>{selectedTestimonidal.text}</p>
                        </div>
                    </div>
                </section>
        </div>
        )
        
        }


        {/* clients section */}

        {/* <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>

            <ul className="clients-list has-scrollbar">
                { clients.map(client => (
                   <li className="clients-item" key={client.id}>
                        <a href="#">
                            <img src={client.icon} alt="client logo" />
                        </a>
                   </li> 
                )) }
            </ul>
        </section> */}
        

    </article>
  )
}

export default About