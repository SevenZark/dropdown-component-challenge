import React from 'react';
import { render } from '@testing-library/react';

// App
import App from './App';

describe('App', () => {
    it('Renders without crashing', () => {
        render(<App />);
    });
});