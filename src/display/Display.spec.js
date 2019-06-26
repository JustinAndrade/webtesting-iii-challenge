import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display.js';

describe('<Display />', () => {
	it('should show the controls and display', () => {
		const tree = renderer.create(<Display />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
