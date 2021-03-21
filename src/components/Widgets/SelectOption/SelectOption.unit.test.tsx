import React from 'react';
import render from 'util/testRenderWrapper';

// App
import SelectOption from './SelectOption';

describe('SelectOption', () => {
    it('Renders without crashing', () => {
        render(
            <SelectOption value="my-option">My Option</SelectOption>
        )
    })
});