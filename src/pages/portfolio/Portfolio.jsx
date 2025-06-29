import React, { useState } from 'react';
import './Portfolio.css';

// Images

// applications
import bibiFlixImage from '../../assets/images/project-4.png';
import infiniteScrollImage from '../../assets/images/infinite-scroll.gif'
import geminiCloneImage from '../../assets/images/project-gemini-clone.png'

// web development
import jonathanTejasImage from '../../assets/images/project-1.png';
import katmandouImage from '../../assets/images/project-2.png';
import himalayanImage from '../../assets/images/project-3.png';
import adminDashboardImage from '../../assets/images/project-5.png';
import peugeotCloneImage from '../../assets/images/project-6.gif';

// web design
import manomaImage from '../../assets/images/UI_Design_01.png';
import artiersImage from '../../assets/images/UI_Design_02.png';
import bibilonImage from '../../assets/images/UI_Design_03.png';
import oculusImage from '../../assets/images/UI_Design_04.png';
import bibiProductsImage from '../../assets/images/UI_Design_05.png';
import bibiFitImage from '../../assets/images/UI_Design_06.png';
import bibiPhoqueImage from '../../assets/images/UI_Design_07.png';
import khaanaImage from '../../assets/images/UI_Design_08.png';
import bibiGemImage from '../../assets/images/UI_Design_09.png';
import wiseImage from '../../assets/images/UI_Design_10.png';

// Filters with unique IDs
const filterList = [
  { id: 'all', option: 'All' },
  { id: 'web-dev', option: 'Web development' },
  { id: 'web-design', option: 'Web design (UI)' },
  { id: 'apps', option: 'Application' },
];

// Project Data
const projects = [
  { id: 1, image: jonathanTejasImage, title: 'Jonathan Tejas', category: 'Web development', link: 'https://portfolio-jonathan-tejas.netlify.app/'},
  { id: 2, image: katmandouImage, title: 'Restaurant Katmandou', category: 'Web development', link: 'https://vishalthapaliya.github.io/restaurant-katmandou/' },
  { id: 3, image: manomaImage, title: 'Manoma', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=1-15&t=56A3CCn9lLbXn3St-1' },
  { id: 4, image: artiersImage, title: 'Artiers', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=13-2&t=56A3CCn9lLbXn3St-1' },
  { id: 5, image: bibilonImage, title: 'Bibilon', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=20-2&t=56A3CCn9lLbXn3St-1' },
  { id: 6, image: himalayanImage, title: 'Himalayan Restaurant', category: 'Web development', link: 'https://himalayan.fr/' },
  { id: 7, image: adminDashboardImage, title: 'Task Manager', category: 'Web development', link: 'https://vishalthapaliya.github.io/platform-management-dashboard/' },
  { id: 8, image: bibiFlixImage, title: 'BibiFlix Movies', category: 'Application', link: 'https://bibiflix-react-movie-app.vercel.app/' },
  { id: 9, image: oculusImage, title: 'Oculus', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=33-34&t=56A3CCn9lLbXn3St-1' },
  { id: 10, image: bibiProductsImage, title: 'Bibi Products', category: 'Web design (UI/UX)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=47-2&t=56A3CCn9lLbXn3St-1' },
  { id: 11, image: bibiFitImage, title: 'Bibifit', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=52-2&t=56A3CCn9lLbXn3St-1' },
  { id: 12, image: bibiPhoqueImage, title: 'Bibi Phoque', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=67-121&t=56A3CCn9lLbXn3St-1' },
  { id: 13, image: khaanaImage, title: 'Khaana', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=81-4&t=56A3CCn9lLbXn3St-1' },
  { id: 14, image: bibiGemImage, title: 'Bibi Gem', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=99-22&t=56A3CCn9lLbXn3St-1' },
  { id: 15, image: wiseImage, title: 'Wise', category: 'Web design (UI)', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=114-13&t=56A3CCn9lLbXn3St-1' },
  { id: 16, image: peugeotCloneImage, title: 'Peugeot clone', category: 'Web development', link: 'https://bibi-cars.netlify.app/' },
  { id: 17, image: infiniteScrollImage, title: 'Infinite Github Users', category: 'Application', link: 'https://infinite-github-users.netlify.app/' },
  { id: 18, image: geminiCloneImage, title: 'Google Gemini Clone (AI)', category: 'Application', link: 'https://bibi-gemini-clone.netlify.app/' }
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
            className={`filter-select ${ dropdownOpen ? 'active' : ''}`}
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
              <a href={project.link} target='_blank'>
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
