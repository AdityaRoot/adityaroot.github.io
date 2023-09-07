import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/temg_Main';

const Stats = () => (
  <Main
    title="Pricing History"
    description=""
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">TEMG Pricing History</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Stats;
