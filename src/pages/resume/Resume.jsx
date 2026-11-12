import React from 'react'
import './Resume.css'

// clients logos
import skillHTML from '../../assets/images/skill-html.png'
import skillCSS from '../../assets/images/skill-css.png'
import skillJS from '../../assets/images/skill-js.png'
import skillReact from '../../assets/images/skill-react.png'
import skillNodeJS from '../../assets/images/skill-node.png'
import skillVue from '../../assets/images/skill-vue.png'
import skillTailwind from '../../assets/images/skill-tailwind.png'
import skillBootstrap from '../../assets/images/skill-bootstrap.png'
import skillSaas from '../../assets/images/skill-saas.png'
import skillGit from '../../assets/images/skill-git.png'
import skillGitHub from '../../assets/images/skill-github.png'
import skillCypress from '../../assets/images/skill-cypress.webp'
import skillJest from '../../assets/images/skill-jest.png'
import skillRTL from '../../assets/images/skill-rtl.png'
import skillPlaywright from '../../assets/images/skill-playwright.webp'
import skillSelenium from '../../assets/images/skill-selenium.webp'
import skillRobotFramework from '../../assets/images/skill-robot-framework.png'
import skillPostman from '../../assets/images/skill-postman.png'
import skillTS from '../../assets/images/skill-typescript.png'
import skillPython from '../../assets/images/skill-python.webp'
import skillSQL from '../../assets/images/skill-sql.webp'
import skillJira from '../../assets/images/skill-jira.webp'

const experiences = [
  {
    id: 1,
    position: 'QA Automation Engineer',
    company: 'Ofelia (formerly Bonitasoft)',
    from: 'Jan 2023',
    to: 'Dec 2025',
    description: [
      "Designed and maintained Playwright and Cypress E2E automation suites covering critical user journeys, regression-prone functionality, and key frontend workflows.",
      "Owned frontend quality validation across functional, regression, smoke, integration, exploratory, UI, and accessibility testing throughout the development lifecycle.",
      "Validated REST API communication, payloads, HTTP status codes, and frontend/backend synchronization, including responsive and cross-browser behavior across Chrome, Firefox, Safari, and Edge.",
      "Built comprehensive test scenarios covering filtering, sorting, pagination, CRUD operations, error handling, and edge cases, using Cucumber/Gherkin, API mocking,and test fixtures.",
      "Ensured WCAG accessibility compliance through keyboard navigation and semantic HTML validation, while reporting, reproducing, prioritizing, and tracking defects in Jira.",
      "Leveraged AI-assisted coding tools including Claude Code, GitHub Copilot, and ChatGPT to accelerate test-case generation, troubleshoot automation failures, identify edge cases, and improve test coverage and productivity.",
    ]
  },
  {
    id: 2,
    position: 'R&D Engineer (Frontend)',
    company: 'Bonitasoft',
    from: 'Apr 2019',
    to: 'DEC 2022',
    description: [
      "Architected and maintained enterprise React applications for workflow automation, including Bonita Central, a real-time dashboard for CPU and node performance monitoring.",
      "Developed reusable React and TypeScript components and integrated REST APIs while optimizing asynchronous state management, rendering efficiency, scalability, and maintainability.",
      "Developed unit, component, and E2E tests using Jest, React Testing Library, Playwright , and Cypress, including Cypress/Cucumber automation for legacy AngularJS and Vanilla JavaScript applications with REST API mocking.",
      "Embedded automated UI validation into development workflows, identifying defects early and reducing post-release regressions while improving overall frontend reliability."
    ]
  },
  {
    id: 3,
    position: 'Junior Frontend Developer',
    company: 'Insiti',
    from: 'Sep 2018',
    to: 'Feb 2019',
    description: [
      "Developed responsive production-ready interfaces from Figma mockups using JavaScript, HTML5, CSS3, and Bootstrap.",
      "Built reusable frontend components and integrated REST APIs to display and manage application data.",
      "Worked with designers to deliver accurate UI implementations and improve accessibility, responsiveness, and browser compatibility within an Agile team."
    ]
  },
  {
    id: 4,
    position: 'Junior Frontend Developer',
    company: 'Optilian',
    from: 'Jan 2018',
    to: 'Apr 2018',
    description: [
      "Showcased expertise in responsive frontend development using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Built dynamic, user-friendly, responsive web pages, and user interfaces from design mockups and wireframes.",
      "Acquired hands-on experience designing with Web Services, with a strong focus on working with REST APIs.",
      "Collaborated with backend developers to integrate frontend components with serverside functionality",
      "Fixed UI issues, improved browser compatibility, and implemented reusable layouts in collaboration with senior developers.",
      "Contributed to test automation to verify newly developed features before deployment."
    ]
  },
  {
    id: 5,
    position: 'Software License Management (Internship)',
    company: 'Amadeus',
    from: 'Dec 2016',
    to: 'May 2018',
    description: [
      "Managing software inventory, software asset documentation and administration as well as documenting new software purchases/renewals.",
      "Additionally, producing weekly reports as per software license consumptions, data analysis, data management and improving data quality to documenting errors to find the possible solutions."
    ]
  },
]

const educations = [
  {
    id: 1,
    school: `École supérieure d'ingénieurs en Génie Électrique (ESIGELEC)`,
    degree: 'Master of Sciences & Technology - Information Systems',
    from: '2015',
    to: '2017',
    place: 'Rouen, France'
  },
  {
    id: 2,
    school: `Sikkim Manipal University (SMU)`,
    degree: 'Master of Science in Computer Science (M.Sc. CS)',
    from: '2011',
    to: '2013',
    place: 'Kathmandu, Nepal'
  },
  // {
  //   id: 3,
  //   school: `Tribhuvan University (TU)`,
  //   degree: 'Bachelors of Business Studies (BBS)',
  //   from: '2006',
  //   to: '2009',
  //   place: 'Kathmandu, Nepal'
  // }
]

const skills = [
  {
    id: 1,
    name: 'Playwright',
    icon: skillPlaywright
  },
  {
    id: 2,
    name: 'Cypress',
    icon: skillCypress
  },
  {
    id: 3,
    name: 'Selenium',
    icon: skillSelenium
  },
  {
    id: 4,
    name: 'Jest',
    icon: skillJest
  },
  {
    id: 5,
    name: 'React Testing Library',
    icon: skillRTL
  },
  {
    id: 6,
    name: 'Robot Framework',
    icon: skillRobotFramework
  },
  {
    id: 7,
    name: 'Postman',
    icon: skillPostman
  },
  {
    id: 8,
    name: 'JavaScript',
    icon: skillJS
  },
  {
    id: 9,
    name: 'TypeSCript',
    icon: skillTS
  },
  {
    id: 10,
    name: 'React JS',
    icon: skillReact
  },
  {
    id: 11,
    name: 'Python',
    icon: skillPython
  },
  {
    id: 12,
    name: 'SQL',
    icon: skillSQL
  },
  {
    id: 13,
    name: 'Git',
    icon: skillGit
  },
  {
    id: 14,
    name: 'Github',
    icon: skillGitHub
  },
  {
    id: 15,
    name: 'Jira',
    icon: skillJira
  },
  {
    id: 16,
    name: 'HTML',
    icon: skillHTML
  },
  {
    id: 17,
    name: 'CSS',
    icon: skillCSS
  },
   {
    id: 18,
    name: 'Tailwind',
    icon: skillTailwind
  },
  {
    id: 19,
    name: 'Bootstrap',
    icon: skillBootstrap
  },
  {
    id: 20,
    name: 'SCSS',
    icon: skillSaas
  },
  {
    id: 21,
    name: 'Node JS',
    icon: skillNodeJS
  },
  {
    id: 22,
    name: 'Vue',
    icon: skillVue
  },
];

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="resume-profile" aria-labelledby="resume-profile-title">
        <h3 className="h3" id="resume-profile-title">Professional Profile</h3>
        <p className="resume-profile-description">
          QA Engineer with 6+ years of experience in frontend development and quality
          engineering within Agile product teams. I began my career as a Frontend Engineer
          building React applications while writing automated UI tests alongside feature
          development. This naturally evolved into a Frontend QA Engineering role focused
          on test automation, regression testing, accessibility, API validation, and release quality.
        </p>
      </section>

      {/* Experience section */}
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box" aria-hidden="true">
            <ion-icon name="briefcase"></ion-icon>
          </div>

          <h3 className="h3">Professional Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((exp) => (

            <li className="timeline-item" key={exp.id}>
              <h4 className="h4 timeline-item-title">{exp.position}</h4>
              <h5 className="h5">{exp.company}</h5>
              <span>{exp.from} - {exp.to}</span>
              <ul className="timeline-description-list">
                {exp.description.map((task, index) => (
                  <li className="timeline-text" key={index}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>


      {/* timeline section */}
      <section className="timeline" aria-labelledby="education-title">

        <div className="title-wrapper">
          <div className="icon-box" aria-hidden="true">
            <ion-icon name="school"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {educations.map((edu) => (
            <li className="timeline-item" key={edu.id}>
              <h4 className="h4 timeline-item-title">{edu.degree}</h4>

              <span>{edu.from} - {edu.to}</span>

              <h5 className="h5">{edu.school}</h5>

              <p className="timeline-text">{edu.place}</p>
            </li>
          ))}
        </ol>
      </section>


      {/* skills section */}
      <section className="skills">
        <h3 className="h3 skills-title">Technical Skills</h3>

        <ul className="skills-list has-scrollbar">
          {skills.map(skill => (
            <li className="skills-item" key={skill.id}>
              <img src={skill.icon} alt="skill icon" />
              <span className='tooltip'>{skill.name}</span>
            </li>
          ))}
        </ul>

      </section>

    </article>
  )
}

export default Resume