import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls.js';

describe('<Controls />', () => {
	it('should show the controls and display', () => {
		const tree = renderer.create(<Controls />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
