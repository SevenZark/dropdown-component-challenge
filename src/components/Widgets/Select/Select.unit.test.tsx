import React from 'react';
import render from 'util/testRenderWrapper';
import userEvent from '@testing-library/user-event';

// App
import Select from './Select';

const selectPromptText = '-Select an option-';

type testDocumentBody = {
    getByText: Function;
    queryByText: Function;
}

describe('Select', () => {

    const mockOptions = [
        "one",
        "two",
        "three"
    ]

    // Some helper functions to eliminate biolerplate
    function expectAllOptionsNotInDoc(documentBody: testDocumentBody) {
        const optionOne = documentBody.queryByText('one');
        const optionTwo = documentBody.queryByText('two');
        const optionThree = documentBody.queryByText('three');
        expect(optionOne).not.toBeInTheDocument();
        expect(optionTwo).not.toBeInTheDocument();
        expect(optionThree).not.toBeInTheDocument();
    }

    function expectAllOptionsInDoc(documentBody: testDocumentBody) {
        const optionOne = documentBody.getByText('one');
        const optionTwo = documentBody.getByText('two');
        const optionThree = documentBody.getByText('three');
        expect(optionOne).toBeInTheDocument();
        expect(optionTwo).toBeInTheDocument();
        expect(optionThree).toBeInTheDocument();
    }

    function expectOnlyOptionOneInDoc(documentBody: testDocumentBody) {

        const optionOne = documentBody.getByText('one');
        expect(optionOne).toBeInTheDocument();

        const optionTwo = documentBody.queryByText('two');
        const optionThree = documentBody.queryByText('three');
        expect(optionTwo).not.toBeInTheDocument();
        expect(optionThree).not.toBeInTheDocument();
    }

    it('Renders without crashing', () => {
        render(<Select options={mockOptions} />);
    });

    describe('Handling open', () => {

        it('Opens when clicked', () => {

            const documentBody = render(
                <Select options={mockOptions} />
            );

            expectAllOptionsNotInDoc(documentBody);

            const prompt = documentBody.getByText(selectPromptText);
            expect(prompt).toBeInTheDocument();
            userEvent.click(prompt);

            expectAllOptionsInDoc(documentBody);
        });

        it('Opens from keyboard actions', () => {

            const documentBody = render(
                <Select options={mockOptions} />
            );

            expectAllOptionsNotInDoc(documentBody);

            const prompt = documentBody.getByText(selectPromptText);
            userEvent.tab();
            expect(prompt).toHaveFocus();

            userEvent.type(prompt, ' ');

            expectAllOptionsInDoc(documentBody);
        });
    });

    describe('Handling Selection', () => {

        it('Selects with mouse', () => {

            const documentBody = render(
                <Select options={mockOptions} />
            );

            expectAllOptionsNotInDoc(documentBody);

            const prompt = documentBody.getByText(selectPromptText);
            userEvent.click(prompt);
            const optionOne = documentBody.getByText('one');
            userEvent.click(optionOne);

            expectOnlyOptionOneInDoc(documentBody);
        });

        it('Selects with keyboard', () => {

            const documentBody = render(
                <Select options={mockOptions} />
            );

            expectAllOptionsNotInDoc(documentBody);

            // First, open the menu
            const prompt = documentBody.getByText(selectPromptText);
            userEvent.tab();
            userEvent.type(prompt, ' ');

            // Now, choose option one
            userEvent.tab();
            userEvent.type(prompt, ' ')

            expectOnlyOptionOneInDoc(documentBody);
        });
    });
});