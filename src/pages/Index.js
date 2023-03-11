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
            To my small, self-centered corner of the internet.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view some of my fascinating <Link to="/stats">statistics</Link>, {' '}
        and <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
