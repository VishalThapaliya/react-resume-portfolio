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
import testimonialAvatar4 from '../../assets/images/avatar-5.png'
import testimonialAvatar5 from '../../assets/images/avatar-02.png'


import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'


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
        name: 'Nicolas Chabanoles',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
        id: 3,
        image: testimonialAvatar3,
        name: 'Pablo Alonso',
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
        name: 'Nathalie Cotte',
        text: 'Bishal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
]

const About = () => {
    return (
        <article className="about active">
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
            <Services services={services} />

            {/* testimonial section */}
            <Testimonials testimonials={testimonials} />

        </article>
    )
}

export default About