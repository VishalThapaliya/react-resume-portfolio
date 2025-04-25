import React from 'react'
import './Resume.css'


// clients logos
import skillImage1 from '../../assets/images/skill-1.png'
import skillImage2 from '../../assets/images/skill-2.png'
import skillImage3 from '../../assets/images/skill-3.png'
import skillImage4 from '../../assets/images/skill-4.png'
import skillImage5 from '../../assets/images/skill-5.png'
import skillImage6 from '../../assets/images/skill-6.png'
import skillImage7 from '../../assets/images/skill-7.png'
import skillImage8 from '../../assets/images/skill-8.png'
import skillImage9 from '../../assets/images/skill-9.png'
import skillImage10 from '../../assets/images/skill-10.png'
import skillImage11 from '../../assets/images/skill-11.webp'
import skillImage12 from '../../assets/images/skill-12.png'
import skillImage13 from '../../assets/images/skill-13.png'
import skillImage14 from '../../assets/images/skill-14.png'

const experiences = [
  {
    id: 1,
    position: 'R&D Engineer (Frontend Developer)',
    company: 'Bonitasoft',
    from: 'Apr 2019',
    to: 'Present',
    description: [
      "Developed innovative UI features for Bonita Living Applications using React, Vue3, Javascript, HTML, SCSS, CSS3, Bootstrap, and Tailwind CSS.",
      "Integrated REST APIs into widgets to enhance functionality and improve user experience.",
      "Designed custom UI widgets in Bonita UI Builder to meet specific client requirements and improve application usability.",
      "Worked closely with the product team to design user-centric interfaces, create wireframes, and build interactive prototypes using Figma.",
      "Improved user experience by revamping UI components and ensuring accessibility compliance.",
      "Collaborated with engineers and stakeholders to refine and enhance UI/UX solutions."
    ]
  },
  {
    id: 2,
    position: 'Junior Frontend Developer',
    company: 'Insiti',
    from: 'Sep 2018',
    to: 'Feb 2019',
    description: [
      "Built responsive web pages and user interfaces from design mockups and wireframes.",
      "Developed frontend functionality using HTML, CSS, JavaScript, and Bootstrap.",
      "Collaborated with designers to ensure precise implementation of visual and interactive elements.",
      "Optimized frontend code for performance and scalability.",
      "Partnered with backend developers to integrate frontend components with serverside functionality"
    ]
  },
  {
    id: 3,
    position: 'Junior Frontend Developer',
    company: 'Optilian',
    from: 'Jan 2018',
    to: 'Apr 2018',
    description: [
      "Showcased expertise in responsive frontend development using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Built dynamic, user-friendly frontend interfaces.",
      "Built responsive web pages and user interfaces from design mockups and wireframes.",
      "Acquired hands-on experience designing with Web Services, with a strong focus on working with REST APIs.",
      "Partnered with backend developers to integrate frontend components with serverside functionality"
    ]
  },
  {
    id: 4,
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
  {
    id: 3,
    school: `Tribhuvan University (TU)`,
    degree: 'Bachelors of Business Studies (BBS)',
    from: '2006',
    to: '2009',
    place: 'Kathmandu, Nepal'
  }
]

const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: skillImage1
  },
  {
    id: 2,
    name: 'CSS',
    icon: skillImage2
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: skillImage3
  },
  {
    id: 4,
    name: 'React JS',
    icon: skillImage4
  },
  {
    id: 5,
    name: 'Node JS',
    icon: skillImage5
  },
  {
    id: 6,
    name: 'Vue',
    icon: skillImage6
  },
  {
    id: 7,
    name: 'Tailwind',
    icon: skillImage7
  },
  {
    id: 8,
    name: 'Bootstrap',
    icon: skillImage8
  },
  {
    id: 9,
    name: 'SCSS',
    icon: skillImage14
  },
  {
    id: 10,
    name: 'Git',
    icon: skillImage9
  },
  {
    id: 11,
    name: 'Github',
    icon: skillImage10
  },
  {
    id: 12,
    name: 'Cypress',
    icon: skillImage11
  },
  {
    id: 13,
    name: 'Jest',
    icon: skillImage12
  },
  {
    id: 14,
    name: 'React Testing Library',
    icon: skillImage13
  },

]

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>


      {/* Experience section */}
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
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
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
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
        <h3 className="h3 skills-title">Skills</h3>

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