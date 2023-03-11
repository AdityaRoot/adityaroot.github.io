import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-09-11T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Locations',
    value: 'Hong Kong and London',
  },
  {
    label: 'Typing speed (on a good day)',
    value: '135 WPM',
  },
  {
    label: 'Number of cats desired',
    value: '5',
  },
  {
    label: 'Number of cats acquired',
    value: '0',
  },
];

export default data;
