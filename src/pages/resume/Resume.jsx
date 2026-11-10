import React from 'react'
import './Resume.css'

const experiences = [
  {
    id: 1,
    position: 'Frontend QA Engineer',
    company: 'Ofelia (formerly Bonitasoft)',
    location: 'Grenoble, France',
    period: 'Jan 2023 – Dec 2025',
    context: 'Internal Career Transition · React Product Team · Agile Scrum',
    description: [
      'Designed and maintained Playwright and Cypress end-to-end automation suites covering critical user journeys, regression-prone functionality, and key frontend workflows.',
      'Owned frontend quality validation across functional, regression, smoke, integration, exploratory, UI, and accessibility testing throughout the development lifecycle.',
      'Validated REST API communication, request payloads, HTTP status codes, and frontend/backend synchronization, including responsive and cross-browser behavior across Chrome, Firefox, Safari, and Edge.',
      'Built test scenarios covering filtering, sorting, pagination, CRUD operations, error handling, and edge cases, using Cucumber/Gherkin, API mocking, and test fixtures.',
      'Validated accessibility through keyboard navigation and semantic HTML, while reporting, reproducing, prioritizing, and tracking defects in Jira.',
      'Used AI-assisted tools including Claude Code, GitHub Copilot, and ChatGPT to support test-case generation, troubleshoot automation failures, identify edge cases, and improve test coverage.'
    ]
  },
  {
    id: 2,
    position: 'Frontend Engineer',
    company: 'Bonitasoft',
    location: 'Grenoble, France',
    period: 'Apr 2019 – Dec 2022',
    description: [
      'Architected and maintained enterprise React applications for workflow automation, including Bonita Central, a real-time dashboard for CPU and node performance monitoring.',
      'Developed reusable React and TypeScript components and integrated REST APIs while improving asynchronous state management, rendering efficiency, scalability, and maintainability.',
      'Developed unit, component, and end-to-end tests using Jest, React Testing Library, Playwright, and Cypress, including Cypress/Cucumber automation for legacy AngularJS and Vanilla JavaScript applications with REST API mocking.',
      'Embedded automated UI validation into development workflows to identify defects early, reduce post-release regressions, and improve frontend reliability.'
    ]
  },
  {
    id: 3,
    position: 'Frontend Developer',
    company: 'Insiti',
    location: 'Paris, France',
    period: 'Sep 2018 – Feb 2019',
    description: [
      'Developed responsive, production-ready interfaces from Figma mockups using JavaScript, HTML5, CSS3, and Bootstrap.',
      'Built reusable frontend components and integrated REST APIs to display and manage application data.',
      'Worked with designers to deliver accurate UI implementations and improve accessibility, responsiveness, and browser compatibility within an Agile Scrum team.'
    ]
  },
  {
    id: 4,
    position: 'Junior Frontend Developer',
    company: 'Optilian',
    location: 'Paris, France',
    period: 'Jan 2018 – Apr 2018',
    description: [
      'Developed responsive web interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Fixed UI issues, improved browser compatibility, and implemented reusable layouts in collaboration with senior developers.',
      'Tested newly developed features before deployment.'
    ]
  }
]

const educations = [
  {
    id: 1,
    degree: 'Master of Sciences & Technology – Information Systems',
    school: "École supérieure d'ingénieurs en Génie Électrique (ESIGELEC)",
    period: '2015 – 2017',
    place: 'Rouen, France'
  },
  {
    id: 2,
    degree: 'Master of Science in Computer Science (M.Sc. CS)',
    school: 'Sikkim Manipal University',
    period: '2011 – 2013',
    place: 'Kathmandu, Nepal'
  }
]

const skillGroups = [
  {
    id: 1,
    title: 'QA & Testing',
    skills: [
      'Functional Testing',
      'End-to-End Testing',
      'UI Testing',
      'Regression Testing',
      'Smoke & Integration Testing',
      'Exploratory Testing',
      'Test Case & Scenario Design',
      'Cross-Browser Testing',
      'Accessibility Testing',
      'Bug Tracking'
    ]
  },
  {
    id: 2,
    title: 'Test Automation',
    skills: [
      'Playwright',
      'Cypress',
      'Selenium',
      'Jest',
      'React Testing Library',
      'Cucumber / Gherkin',
      'Robot Framework (Basics)'
    ]
  },
  {
    id: 3,
    title: 'Programming',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python (for Test Automation)',
      'SQL (Basics)'
    ]
  },
  {
    id: 4,
    title: 'Frontend Technologies',
    skills: [
      'React',
      'HTML5',
      'CSS3 / SCSS',
      'Tailwind CSS',
      'Bootstrap'
    ]
  },
  {
    id: 5,
    title: 'API & Tools',
    skills: [
      'REST APIs',
      'Postman',
      'JSON',
      'Git',
      'GitHub Actions',
      'Jira / Xray',
      'Slack',
      'Chrome DevTools'
    ]
  }
]

const languages = [
  { id: 1, name: 'English', level: 'Fluent' },
  { id: 2, name: 'French', level: 'A2' },
  { id: 3, name: 'Nepali', level: 'Native' }
]

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="resume-profile" aria-labelledby="resume-profile-title">
        <h3 className="h3" id="resume-profile-title">Professional Profile</h3>
        <p>
          QA Engineer with 6+ years of experience in frontend development and quality
          engineering within Agile product teams. I began my career as a Frontend Engineer
          building React applications while writing automated UI tests alongside feature
          development. This naturally evolved into a Frontend QA Engineering role focused
          on test automation, regression testing, accessibility, API validation, and release quality.
        </p>
      </section>

      <section className="timeline" aria-labelledby="experience-title">
        <div className="title-wrapper">
          <div className="icon-box" aria-hidden="true">
            <ion-icon name="briefcase"></ion-icon>
          </div>
          <h3 className="h3" id="experience-title">Professional Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((exp) => (
            <li className="timeline-item" key={exp.id}>
              <h4 className="h4 timeline-item-title">{exp.position}</h4>
              <h5 className="h5 resume-company">{exp.company}</h5>
              <p className="resume-location">{exp.location}</p>
              <span className="resume-period">{exp.period}</span>
              {exp.context && <p className="resume-context">{exp.context}</p>}
              <ul className="timeline-description-list">
                {exp.description.map((task, index) => (
                  <li className="timeline-text" key={index}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline" aria-labelledby="education-title">
        <div className="title-wrapper">
          <div className="icon-box" aria-hidden="true">
            <ion-icon name="school"></ion-icon>
          </div>
          <h3 className="h3" id="education-title">Education</h3>
        </div>

        <ol className="timeline-list">
          {educations.map((edu) => (
            <li className="timeline-item" key={edu.id}>
              <h4 className="h4 timeline-item-title">{edu.degree}</h4>
              <h5 className="h5 resume-company">{edu.school}</h5>
              <span className="resume-period">{edu.period}</span>
              <p className="timeline-text">{edu.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skills" aria-labelledby="skills-title">
        <h3 className="h3 skills-title" id="skills-title">Technical Skills</h3>
        <div className="resume-skills-grid">
          {skillGroups.map((group) => (
            <section className="resume-skill-group" key={group.id} aria-labelledby={`skill-group-${group.id}`}>
              <h4 className="h4" id={`skill-group-${group.id}`}>{group.title}</h4>
              <ul className="resume-skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="resume-languages" aria-labelledby="languages-title">
        <h3 className="h3" id="languages-title">Languages</h3>
        <ul className="resume-language-list">
          {languages.map((language) => (
            <li key={language.id}>
              <span>{language.name}</span>
              <span>{language.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume
