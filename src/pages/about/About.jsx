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
import testimonialAvatar5 from '../../assets/images/avatar-6.png'
import testimonialAvatar6 from '../../assets/images/avatar-4.png'


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
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'Bishal consistently delivers elegant, responsive, and user-centric UI solutions—his attention to detail and commitment to usability make him an outstanding front-end developer.'
    },
    {
        id: 2,
        image: testimonialAvatar2,
        name: 'Nicolas Chabanoles',
        position: 'CTO',
        company: 'Bonitasoft',
        text: 'I hired Bishal several years ago to bring some front-end expertise to the team. Over the years, Bishal has brought his creativity and autonomy to the team to improve the User Experience of our products. Bishal is very easy to work with and is always willing to learn more to help his teammates the best.'
    },
    {
        id: 3,
        image: testimonialAvatar3,
        name: 'Pablo Alonso',
        position: 'Head of R&D',
        company: 'Bonitasoft',
        text: 'I had the pleasure of working with Bishal at Bonitasoft. Beyond his contagious optimism and great team spirit, he brought real value with his sharp eye for design and user experience. His fresh perspective transformed our product interfaces, making them more modern, intuitive, and impactful. Any team would be lucky to have him onboard.'
    },
    {
        id: 4,
        image: testimonialAvatar4,
        name: 'Julien Mege',
        position: 'R&D Manager',
        company: 'Bonitasoft',
        text: 'Bishal is a rare blend of creative UI craftsmanship and dependable teamwork—his ability to quickly adapt and support others makes him a valuable asset on any project.'
    },
    {
        id: 5,
        image: testimonialAvatar5,
        name: 'Benjamin Parisel',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'Whether it\'s responsive design or pixel-perfect execution, Bishal excels at building interfaces that look great and feel natural to use.'
    },
    {
        id: 6,
        image: testimonialAvatar6,
        name: 'Thomas Bouffard',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'With a strong grasp of modern front-end practices and a humble, team-friendly demeanor, Bishal turns complex UI challenges into smooth, beautiful solutions.'
    }
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