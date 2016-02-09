import React, { Component } from 'react';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';
import markdownToHTML from '../utils/markdown';

const projects = [
  {
    name: 'Lantern',
    url: 'https://github.com/brandonlilly/lantern',
    html: markdownToHTML(require('raw!../data/lantern.md'))
  },
  {
    name: 'Product Pains',
    url: 'http://productpains.com',
    html: markdownToHTML(require('raw!../data/product-pains.md'))
  },
];

const ProjectCard = ({ name, children, html, url }) => {
  return (
    <article className="projectCard">
      <h3><a href={url}>{name}</a></h3>
      <span
        className="markdown-body"
        dangerouslySetInnerHTML={{__html: html}} />
      {children}
    </article>
  );
}

class Projects extends Component {
  render() {
    return (
      <section className="projects contentSection">
        <h2>Recent Projects</h2>
        {projects.map(project => (
          <ProjectCard {...project} key={project.name}/>
        ))}
      </section>
    );
  }
}

export default Projects;
