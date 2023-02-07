import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
import NoImgCell from '../components/Projects/NoImgCell';
// import data from '../data/projects';
import noimgdata from '../data/projects2';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Aditya's Projects"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A collection of some cool projects that I&apos;ve been a part of.
            Titles are hyperlinked where available.
          </p>
        </div>
      </header>
      {noimgdata.map((project) => (
        <NoImgCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
