import React from 'react'
import './About.css'

import Services from '../../components/Services'

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
        </article>
    )
}

export default About
