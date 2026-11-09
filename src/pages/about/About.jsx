import React from 'react'
import './About.css'

import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'
import testimonialAvatar1 from '../../assets/images/avatar-1.png'
import testimonialAvatar2 from '../../assets/images/avatar-2.png'
import testimonialAvatar3 from '../../assets/images/avatar-3.png'
import testimonialAvatar4 from '../../assets/images/avatar-5.png'
import testimonialAvatar5 from '../../assets/images/avatar-6.png'
import testimonialAvatar6 from '../../assets/images/avatar-4.png'

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
        image: testimonialAvatar1,
        name: 'Anthony Birembaut',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: `J’ai eu la chance de collaborer pendant plusieurs années avec Bishal au sein de la R&D de Bonitasoft. Il connaît très bien la stack web et sait en tirer le meilleur parti. Toujours force de proposition, il a largement contribué à l’amélioration de la qualité de nos applications, avec une attention particulière portée à l’expérience utilisateur. Son regard affûté, sa capacité à questionner les solutions existantes et son expertise technique ont été de vrais atouts. Bishal se distingue également par sa grande capacité d’adaptation : il apprend rapidement, explore de nouveaux domaines fonctionnels et cherche toujours des solutions. Enthousiaste, professionnel, fiable et curieux, il est toujours prêt à aider ses collègues. Je recommande vivement Bishal à toute équipe produit ou qualité.`
    },
    {
        id: 2,
        image: testimonialAvatar2,
        name: 'Nicolas Chabanoles',
        position: 'CTO',
        company: 'Bonitasoft',
        text: 'I hired Bishal several years ago to bring front-end expertise to the team. Over the years, he brought creativity and autonomy to improving the user experience and overall quality of our products. He is easy to work with, takes ownership of his work, and is always willing to learn more to support his teammates and the team’s goals.'
    },
    {
        id: 3,
        image: testimonialAvatar3,
        name: 'Pablo Alonso',
        position: 'Head of R&D',
        company: 'Bonitasoft',
        text: 'I had the pleasure of working with Bishal at Bonitasoft. Beyond his contagious optimism and great team spirit, he brought a sharp eye for design, usability, and product quality. His fresh perspective helped make our product interfaces more modern, intuitive, and impactful. His attention to the user experience is a valuable perspective when assessing how a product works in practice. Any team would be lucky to have him onboard.'
    },
    {
        id: 4,
        image: testimonialAvatar4,
        name: 'Julien Mege',
        position: 'R&D Manager',
        company: 'Bonitasoft',
        text: 'Bishal combines a strong understanding of user-facing products with dependable teamwork. His ability to look at a feature from the user’s perspective, adapt quickly, and support others makes him a valuable contributor to product development and quality.'
    },
    {
        id: 5,
        image: testimonialAvatar5,
        name: 'Benjamin Parisel',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'Bishal has a great understanding of responsive interfaces and the details that make a product feel natural to use. His attention to how an interface behaves and appears across different situations is a real asset when thinking about user experience and product quality.'
    },
    {
        id: 6,
        image: testimonialAvatar6,
        name: 'Thomas Bouffard',
        position: 'Senior R&D Engineer',
        company: 'Bonitasoft',
        text: 'With a strong grasp of modern front-end practices and a humble, team-friendly approach, Bishal is able to understand complex UI challenges and contribute thoughtfully to making applications reliable and easy to use.'
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
            <section className="service" aria-labelledby="quality-approach-title">
                <h3 className="h3 service-title" id="quality-approach-title">How I Approach Quality</h3>
                <div className="about-text">
                    <p>
                        I build test coverage around critical user journeys and regression-prone
                        functionality. My scenarios cover filtering, sorting, pagination, CRUD
                        operations, error handling, and edge cases, using Cucumber/Gherkin,
                        API mocking, and test fixtures.
                    </p>
                    <p>
                        I validate REST API communication, request payloads, HTTP status codes,
                        and frontend/backend synchronization. I also check responsive behavior
                        across Chrome, Firefox, Safari, and Edge, and accessibility through
                        keyboard navigation and semantic HTML.
                    </p>
                    <p>
                        I report, reproduce, prioritize, and track defects in Jira, and use
                        AI-assisted tools to help generate test ideas, investigate automation
                        failures, identify edge cases, and improve test coverage.
                    </p>
                </div>
            </section>

            <p className="about-text" style={{ marginTop: '24px' }}>
                The testimonials below are adapted from original colleague feedback to reflect my
                current QA and product-quality focus; they are not verbatim quotations.
            </p>
            <Testimonials testimonials={testimonials} />
        </article>
    )
}

export default About
