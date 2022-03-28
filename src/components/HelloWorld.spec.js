import React from 'react';
import { render, configure, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import HelloWorld from './HelloWorld';

configure({ testIdAttribute: 'data-test' });

describe('render', () => {
    it('renders the component', () => {
        const { container } = render(<HelloWorld />);
        expect(container).toMatchSnapshot();
    });

    it('sets the title to blue', () => {
        const { getByText, getByTestId } = render(<HelloWorld />);
        fireEvent.click(getByText('Blue'));
        expect(getByTestId('page-title')).toHaveStyle('color: rgb(15, 200, 242)');
    });
});

describe('addition', () => {
    describe('positive numbers', () => {
        it('should add up', () => {
            expect(1 + 2).toBe(3);
        });
    });
});
