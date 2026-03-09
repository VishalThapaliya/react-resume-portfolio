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
        text: `J’ai eu la chance de collaborer pendant plusieurs années avec Bishal au sein de la R&D de Bonitasoft. 
                Il connaît très bien la stack web et sait en tirer le meilleur parti. Toujours force de proposition, il a énormément contribué à 
                l’amélioration du design et de l’ergonomie de nos applications. Son regard affûté sur l’expérience utilisateur, sa capacité à challenger 
                les designs existants et son expertise technique ont permis de faire évoluer significativement la qualité de nos produits. 
                Bishal se distingue également par sa grande capacité d’adaptation. Il apprend rapidement, que ce soit pour monter en compétence sur une 
                nouvelle technologie ou pour explorer un nouveau domaine fonctionnel. En plus de ses compétences techniques, Bishal a un excellent état 
                d'esprit : - enthousiaste et enjoué tout en restant toujours professionnel et fiable - curieux, toujours prêt à aider et à trouver des solutions.
                Je recommande vivement Bishal à toute équipe de développement.`
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
                    I build production-ready React applications with a strong focus on UI quality, performance, and automated testing.
                    Over 6 years of experience on real-world web applications in international teams.
                    Experienced in component-driven architecture, REST API integration, and modern UI development. 
                    Hands-on experience with Cypress, Jest, and React Testing Library to prevent regressions and improve long-term maintainability. 
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