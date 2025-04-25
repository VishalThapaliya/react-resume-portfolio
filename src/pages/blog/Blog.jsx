import React from 'react';
import './Blog.css';

// blog images
import clockImage from '../../assets/images/widgetClock.gif'
import searchImage from '../../assets/images/widgetSearch.webp'
import typewriterImage from '../../assets/images/widgetTypewriter.gif'
import clipPathImage from '../../assets/images/widgetClipPath.gif'
import loginPageImage from '../../assets/images/widgetLoginPage.png'

const blogs = [
  { id: 1, 
    link: 'https://dev.to/vishalthapaliya/build-a-custom-clock-widget-in-bonita-ui-designer-1617', 
    image: clockImage, 
    category: 'Frontend, Custom widget', 
    publishedDate: 'Jun 9, 2021', 
    title: 'Build a Custom Clock Widget in Bonita UI Designer', 
    content: 'You’ll see how to create an analog clock widget, change the appearance of the widget when you drag and drop it onto the whiteboard in Bonita UI Designer, and how to add some CSS and JavaScript to make the clock widget functional to the end-users.'
  },
  { id: 2, 
    link: 'https://dev.to/vishalthapaliya/build-a-custom-search-widget-in-bonita-ui-designer-4m0j', 
    image: searchImage, 
    category: 'Frontend, Custom widget', 
    publishedDate: 'Oct 15, 2020', 
    title: 'Build a Custom Search Widget in Bonita UI Designer', 
    content: 'As a web developer, I love to provide users with good UX. In my opinion, this means, at the minimum, to have consistent pages, layouts, and consistent widgets within pages.'
  },
  { 
    id: 3, 
    link: 'https://dev.to/vishalthapaliya/how-to-create-a-typing-animation-with-css-in-bonita-ui-designer-2ld5', 
    image: typewriterImage, 
    category: 'Frontend, Custom widget', 
    publishedDate: 'Jul 27, 2020', 
    title: 'How to create a typing animation with CSS in Bonita UI Designer', 
    content: 'CSS allows us to add animation without using JavaScript to the HTML elements to change incrementally from one style to another as many times as we want.'
  },
  { 
    id: 4, 
    link: 'https://dev.to/vishalthapaliya/how-to-create-a-circle-clip-path-hover-effect-in-bonita-ui-designer-1fn1', 
    image: clipPathImage, 
    category: 'UI Design, Frontend', 
    publishedDate: 'Jul 21, 2020', 
    title: 'How to create a circle clip-path hover effect in Bonita UI Designer', 
    content: 'The CSS clip-path property allows us to set the area of an element we want to display. This cool property is very handy to create complex shapes in CSS, such as a circle, polygon, ellipse, star, pentagon, hexagon - and many more.'
  },
  { 
    id: 5, 
    link: 'https://dev.to/vishalthapaliya/12-simple-steps-to-build-a-neumorphic-login-page-with-bonita-ui-designer-27nh', 
    image: loginPageImage, 
    category: 'UI Design, Frontend', 
    publishedDate: 'May 22, 2020', 
    title: '12 simple steps to build a neumorphic login page with Bonita UI Designer', 
    content: 'The interface style known as neumorphic (a combination of skeumorphic and realistic design) has been gaining in popularity, and I think we\'ll see it being used more and more in 2020.'
  }
]

const Blog = () => {
  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {
            blogs.map((blog) => (
              <li className="blog-post-item" key={blog.id}>
                <a href={blog.link} target='_blank'>
                  <figure className="blog-banner-box">
                    <img src={blog.image} alt={blog.title} loading='lazy'/>
                  </figure>

                  <div className="blog-content">
                    
                    <div className="blog-meta">
                      <p className="blog-category">{blog.category}</p>
                      <span className="dot"></span>

                      <time dateTime={blog.publishedDate}>{blog.publishedDate}</time>
                    </div>

                    <h4 className="h4 blog-item-title">{blog.title}</h4>

                    <p className="blog-text">{blog.content}</p>

                  </div>
                </a>
              </li>
            ))
          }
          
          
        </ul>
      </section>

    </article>
  )
}

export default Blog;