import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {Header} from '../components';

afterEach(cleanup);

describe('Render Logo', () => {
	test('Find Logo', async () => {
		const {findByText} = render(<Header />);

		const testSentence = await findByText('Logo');
		expect(testSentence).toBeInTheDocument();
	});
});
