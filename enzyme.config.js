/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
