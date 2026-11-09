import React from 'react'
import './Services.css'

const Services = ({ services }) => {
  return (
    <section className="service" aria-labelledby="service-title">
      <h3 className="h3 service-title" id="service-title">QA & Quality Engineering</h3>

      <ul className="service-list">
        {services.map(service => (
          <li className="service-item" key={service.id}>
            <div className="service-icon-box" aria-hidden="true">
              <ion-icon name={service.iconName}></ion-icon>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
