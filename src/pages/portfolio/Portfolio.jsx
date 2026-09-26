import React, { useMemo, useState } from 'react';
import './Portfolio.css';

// Images

// applications
import bibiFlixImage from '../../assets/images/project-4.png';
import infiniteScrollImage from '../../assets/images/infinite-scroll.gif'
import geminiCloneImage from '../../assets/images/project-gemini-clone.png'
import textToUIImage from '../../assets/images/text-to-ui.png'
import reacticationsImage from '../../assets/images/project-reactications.png'
import avatarGeneratorImage from '../../assets/images/project-avatar-generator.png'
import gradientGeneratorImage from '../../assets/images/project-gradient-generator.png'

// web development
import jonathanTejasImage from '../../assets/images/project-1.png';
import katmandouImage from '../../assets/images/project-2.png';
import himalayanImage from '../../assets/images/project-3.png';
import adminDashboardImage from '../../assets/images/project-5.png';
import peugeotCloneImage from '../../assets/images/project-6.gif';
import productCardImage from '../../assets/images/project-product-card.png';
import fileFolderExplorerImage from '../../assets/images/project-file-folder-explorer.png';

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
  { id: 1, image: jonathanTejasImage, title: 'Jonathan Tejas', category: 'Web development', categoryId: 'web-dev', link: 'https://portfolio-jonathan-tejas.netlify.app/'},
  { id: 2, image: katmandouImage, title: 'Restaurant Katmandou', category: 'Web development', categoryId: 'web-dev', link: 'https://vishalthapaliya.github.io/restaurant-katmandou/' },
  { id: 3, image: manomaImage, title: 'Manoma', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=1-15&t=56A3CCn9lLbXn3St-1' },
  { id: 4, image: artiersImage, title: 'Artiers', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=13-2&t=56A3CCn9lLbXn3St-1' },
  { id: 5, image: bibilonImage, title: 'Bibilon', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=20-2&t=56A3CCn9lLbXn3St-1' },
  { id: 6, image: himalayanImage, title: 'Himalayan Restaurant', category: 'Web development', categoryId: 'web-dev', link: 'https://himalayan.fr/' },
  { id: 7, image: adminDashboardImage, title: 'Task Manager', category: 'Web development', categoryId: 'web-dev', link: 'https://vishalthapaliya.github.io/platform-management-dashboard/' },
  { id: 8, image: bibiFlixImage, title: 'BibiFlix Movies', category: 'Application', categoryId: 'apps', link: 'https://bibiflix-react-movie-app.vercel.app/' },
  { id: 9, image: oculusImage, title: 'Oculus', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=33-34&t=56A3CCn9lLbXn3St-1' },
  { id: 10, image: bibiProductsImage, title: 'Bibi Products', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=47-2&t=56A3CCn9lLbXn3St-1' },
  { id: 11, image: bibiFitImage, title: 'Bibifit', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=52-2&t=56A3CCn9lLbXn3St-1' },
  { id: 12, image: bibiPhoqueImage, title: 'Bibi Phoque', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=67-121&t=56A3CCn9lLbXn3St-1' },
  { id: 13, image: khaanaImage, title: 'Khaana', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=81-4&t=56A3CCn9lLbXn3St-1' },
  { id: 14, image: bibiGemImage, title: 'Bibi Gem', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=99-22&t=56A3CCn9lLbXn3St-1' },
  { id: 15, image: wiseImage, title: 'Wise', category: 'Web design (UI)', categoryId: 'web-design', link: 'https://www.figma.com/proto/QdobAezB4s7WPoYz94u3hT/UI_Design_Challenges?node-id=114-13&t=56A3CCn9lLbXn3St-1' },
  { id: 16, image: peugeotCloneImage, title: 'Peugeot clone', category: 'Web development', categoryId: 'web-dev', link: 'https://bibi-cars.netlify.app/' },
  { id: 17, image: infiniteScrollImage, title: 'Infinite Github Users', category: 'Application', categoryId: 'apps', link: 'https://infinite-github-users.netlify.app/' },
  { id: 18, image: geminiCloneImage, title: 'Google Gemini Clone (AI)', category: 'Application', categoryId: 'apps', link: 'https://bibi-gemini-clone.netlify.app/' },
  { id: 19, image: textToUI, title: 'Text-To-UI', category: 'Application', categoryId: 'apps', link: 'https://text-to-ui.netlify.app/' },
  { id: 20, image: reacticationsImage, title: 'Reactications', category: 'Application', categoryId: 'apps', link: 'https://react-app-examples.netlify.app/' },
  { id: 21, image: productCardImage, title: 'Product Showcase', category: 'Web development', categoryId: 'web-dev', link: 'https://ecommerce-product-card.netlify.app/' },
  { id: 22, image: fileFolderExplorerImage, title: 'File/Folder Explorer', category: 'Web development', categoryId: 'web-dev', link: 'https://react-app-examples.netlify.app/applications/file-folder-explorer' },
  { id: 23, image: avatarGeneratorImage, title: 'Random Avatar Generator', category: 'Application', categoryId: 'apps', link: 'https://react-app-examples.netlify.app/applications/avatar-generator' },
  { id: 24, image: gradientGeneratorImage, title: 'Random Gradient Generator', category: 'Application', categoryId: 'apps', link: 'https://react-app-examples.netlify.app/applications/gradient-generator' },
];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const visibleProjects = useMemo(() => {
    const filtered = selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.categoryId === selectedFilter);
    return [...filtered].sort((a, b) => b.id - a.id);
  }, [selectedFilter]);

  const handleSelect = (category) => {
    setSelectedFilter(category);
  };

  const filteredProjects =
    selectedFilter === 'all'
      ? projects.sort((a, b) => a.id - b.id)
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
                className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                aria-pressed={selectedFilter === filter.id}
                onClick={() => handleSelect(filter.id)}
              >
                {filter.option}
              </button>
            </li>
          ))}
        </ul>

        {/* Filtered project list */}
        <ul className="project-list">
          {visibleProjects.map((project) => (
            <li className="project-item active" key={project.id}>
              <a href={project.link} target='_blank' rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box" aria-hidden="true">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" width="400" height="280"/>
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
