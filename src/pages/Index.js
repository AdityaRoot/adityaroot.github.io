import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Aditya Mangla's personal website. Hong Kong based student pursuing Computer Science."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            To my small corner of the internet.
          </p>
        </div>
      </header>
      <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>.

        This site exists as a one-stop shop for you to get more color on my {' '}
        <Link to="/resume">resume</Link> and {' '}
        <Link to="/projects">projects</Link>.

        You can also view some of my fascinating <Link to="/stats">statistics</Link>, {' '}
        and <Link to="/contact">contact</Link> me if you have any questions.
      </p>
    </article>
  </Main>
);

export default Index;
