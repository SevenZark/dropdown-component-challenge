import React from 'react';
import render from 'util/testRenderWrapper';

// App
import SimpleColumnContainer from './SimpleColumnContainer';

describe('Heading', () => {
    it('Renders without crashing', () => {
        render(<SimpleColumnContainer>Some content</SimpleColumnContainer>);
    });
});