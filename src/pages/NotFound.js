import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
      <p>Were you hunting around and/or made a typo? If this was an error on my part, email me at <a href="mailto:report@adityavmangla.com">report@adityavmangla.com</a>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
