import React, { useState } from 'react';
import './Portfolio.css';

// Images
import financeImage from '../../assets/images/project-1.jpg';
import orizonImage from '../../assets/images/project-2.png';
import fundoImage from '../../assets/images/project-3.jpg';
import brawlhallaImage from '../../assets/images/project-4.png';
import dsmImage from '../../assets/images/project-5.png';
import metaSparkImage from '../../assets/images/project-6.png';
import summaryImage from '../../assets/images/project-7.png';
import taskManagerImage from '../../assets/images/project-8.jpg';
import arrivalImage from '../../assets/images/project-9.png';

// Filters with unique IDs
const filterList = [
  { id: 'all', option: 'All' },
  { id: 'web-dev', option: 'Web development' },
  { id: 'web-design', option: 'Web design' },
  { id: 'apps', option: 'Applications' },
];

// Project Data
const projects = [
  { id: 1, image: financeImage, title: 'Finance', category: 'Web development' },
  { id: 2, image: orizonImage, title: 'Orizon', category: 'Web development' },
  { id: 3, image: fundoImage, title: 'Fundo', category: 'Web design' },
  { id: 4, image: brawlhallaImage, title: 'Brawlhalla', category: 'Applications' },
  { id: 5, image: dsmImage, title: 'DSM', category: 'Web design' },
  { id: 6, image: metaSparkImage, title: 'MetaSpark', category: 'Web design' },
  { id: 7, image: summaryImage, title: 'Summary', category: 'Web development' },
  { id: 8, image: taskManagerImage, title: 'Task Manager', category: 'Applications' },
  { id: 9, image: arrivalImage, title: 'Arrival', category: 'Web development' },
  { id: 10, image: financeImage, title: 'Finance v2', category: 'Web development' },
];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (category) => {
    setSelectedFilter(category);
    setDropdownOpen(false);
  };

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((proj) => proj.category === selectedFilter);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons */}
        <ul className="filter-list">
          {filterList.map((filter) => (
            <li className="filter-item" key={filter.id}>
              <button
                className={`filter-btn ${
                  selectedFilter === filter.option ? 'active' : ''
                }`}
                onClick={() => handleSelect(filter.option)}
              >
                {filter.option}
              </button>
            </li>
          ))}
        </ul>

        {/* Custom dropdown */}
        <div className="filter-select-box">
          <button
            className="filter-select"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="select-value">{selectedFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          {dropdownOpen && (
            <ul className="select-list">
              {filterList.map((filter) => (
                <li className="select-item" key={filter.id}>
                  <button onClick={() => handleSelect(filter.option)}>
                    {filter.option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Filtered project list */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item active" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
