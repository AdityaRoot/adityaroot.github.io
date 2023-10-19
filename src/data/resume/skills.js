const skills = [

  // Languages Primarily
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'kdb+ Q',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Lua',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'LaTeX',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C(#/++)',
    competency: 4,
    category: ['Languages'],
  },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'Bash/Shell',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  // Tools primarily
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services (AWS), Google Cloud, Microsoft Azure',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MySQL/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'phpMyAdmin',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  // {
  //   title: 'Google Cloud Compute',
  //   competency: 4,
  //   category: ['Tools', 'Web Development'],
  // },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'TensorFlow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Statsmodels',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  //
  // Coloors one
  '#694053',
  '#0E4A59',
  '#6E6362',
  '#54525B',
  '#4CAE7A',
  '#C78283',
  // Old
  // '#6968b3',
  // '#37b1f5',
  // '#40494e',
  // '#515dd4',
  // '#e47272',
  // // '#cc7b94',
  // '#3896e2',
  // '#c3423f',
  // '#40494e',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
