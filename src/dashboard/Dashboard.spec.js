import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
	it('should show the controls and display', () => {
		const tree = renderer.create(<Dashboard />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
