import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Awards from '../components/Resume/Awards';
import Certifications from '../components/Resume/Certifications';
import Leadership from '../components/Resume/Leadership';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import awards from '../data/resume/awards';
import certifications from '../data/resume/certifications';
import leadership from '../data/resume/leadership';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Awards',
  'Courses',
  'Certifications',
  'Leadership',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Aditya Mangla's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2> <h3><a href="https://drive.google.com/drive/folders/179fLpc8QHZCwrnEX9sr0D6GMH4-bWjXT?usp=sharing" target="_blank" rel="noreferrer">PDF Link</a></h3>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Awards data={awards} />
      <Courses data={courses} />
      <Certifications data={certifications} />
      <Leadership data={leadership} />
      <References />

    </article>
  </Main>
);

export default Resume;
