import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Navigation from '../components/Template/temg_Navigation';

const Main = (props) => (
  <HelmetProvider>
    <Helmet>
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  // title: null,
  description: "Aditya V. Mangla's personal website.",
};

export default Main;
