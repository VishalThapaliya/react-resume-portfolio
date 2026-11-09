import React from 'react'
import './About.css'

import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'

const services = [
    {
        id: 1,
        iconName: 'code-slash-outline',
        title: 'E2E Test Automation',
        description: 'Designing and maintaining Playwright and Cypress tests for critical user journeys and regression-prone workflows.'
    },
    {
        id: 2,
        iconName: 'checkmark-done-circle-outline',
        title: 'Functional & Regression Testing',
        description: 'Validating features through functional, smoke, integration, exploratory, UI, and regression testing.'
    },
    {
        id: 3,
        iconName: 'git-network-outline',
        title: 'API & Integration Validation',
        description: 'Checking REST API requests, payloads, HTTP status codes, and frontend/backend synchronization.'
    },
    {
        id: 4,
        iconName: 'accessibility-outline',
        title: 'Accessibility & Cross-browser Quality',
        description: 'Checking keyboard navigation, semantic HTML, responsive behavior, and compatibility across major browsers.'
    }
]

const testimonials = [
    {
        id: 1,
        image: '/src/assets/images/avatar-1.png',
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
        image: '/src/assets/images/avatar-2.png',
        name: 'Nicolas Chabanoles',
        position: 'CTO',
        company: 'Bonitasoft',
        text: 'I hired Bishal several years ago to bring some front-end expertise to the team. Over the years, Bishal has brought his creativity and autonomy to the team to improve the User Experience of our products. Bishal is very easy to work with and is always willing to learn more to help his teammates the best.'
    },
    {
        id: 3,
        image: '/src/assets/images/avatar-3.png',
        name: 'Pablo Alonso',
        position: 'Head of R&D',
        company: 'Bonitasoft',
        text: 'I had the pleasure of working with Bishal at Bonitasoft. Beyond his contagious optimism and great team spirit, he brought real value with his sharp eye for design and user experience. His fresh perspective transformed our product interfaces, making them more modern, intuitive, and impactful. Any team would be lucky to have him onboard.'
    },
    {
        id: 4,
        image: '/src/assets/images/avatar-5.png',
        name: 'Julien Mege',
        position: 'R&D Manager',
        company: 'Bonitasoft',
        text: 'Bishal is a rare blend of creative UI craftsmanship and dependable teamwork—his ability to quickly adapt and support others makes him a valuable asset on any project.'
    },
    {
        id: 5,
        image: '/src/assets/images/avatar-6.png',
        name: 'Benjamin Parisel',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'Whether it’s responsive design or pixel-perfect execution, Bishal excels at building interfaces that look great and feel natural to use.'
    },
    {
        id: 6,
        image: '/src/assets/images/avatar-4.png',
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
                    I’m a QA Engineer with 6+ years of experience in frontend development and quality
                    engineering within Agile product teams. I began my career building React applications
                    while writing automated UI tests alongside feature development. This naturally evolved
                    into a Frontend QA Engineering role focused on test automation, regression testing,
                    accessibility, API validation, and release quality.
                </p>

                <p>
                    I design and maintain end-to-end test suites with Playwright and Cypress, create
                    test scenarios using Cucumber/Gherkin, and validate REST API behavior and
                    frontend/backend integration. My frontend background helps me investigate issues
                    across the UI and API layers, understand application behavior, and work closely
                    with developers to improve product quality.
                </p>
            </section>

            <Services services={services} />
            <Testimonials testimonials={testimonials} />
        </article>
    )
}

export default About
