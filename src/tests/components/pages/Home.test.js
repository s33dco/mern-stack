import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../components/pages/Home';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Home />);
});

describe('Home component', () => {
	it('should render Home component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
