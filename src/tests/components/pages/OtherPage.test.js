import React from 'react';
import { shallow } from 'enzyme';
import OtherPage from '../../../components/pages/OtherPage';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<OtherPage />);
});

describe('OtherPage component', () => {
	it('should render OtherPage component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
