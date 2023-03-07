import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Certifications/Degree';

const Certs = ({ data }) => (
  <div className="education">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications & Licenses</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Certs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Certs.defaultProps = {
  data: [],
};

export default Certs;
