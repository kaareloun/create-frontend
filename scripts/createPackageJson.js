/* eslint-disable object-shorthand */
const path = require('path');

function getCurrentVersion() {
  const appPackage = require(path.resolve(__dirname, '..', 'package.json'));
  return `^${appPackage.version}`;
}

// prettier-ignore
module.exports = ({ name, isDev }) => {
  const json = {
    'name': name,
    'version': '0.1.0',
    'private': true,
    'create-frontend': {},
    'scripts': {
      'dev': 'frontend-scripts dev',
      'build': 'frontend-scripts build',
      'build:debug': 'frontend-scripts build --debug',
    },
    'dependencies': {
      '@optimistdigital/create-frontend': isDev ? path.resolve(__dirname, '..') : getCurrentVersion(),
      'babel-polyfill': '^6.26.0',
      'eslint': '^4.19.0',
      'eslint-plugin-flowtype': '^2.46.1',
      'eslint-plugin-import': '^2.10.0',
      'eslint-plugin-react': '^7.7.0',
      'normalize.css': '8.x.x'
    },
  };

  return JSON.stringify(json, null, 2);
};
