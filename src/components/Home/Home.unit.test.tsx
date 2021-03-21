import React from 'react';
import render from 'util/testRenderWrapper';
import userEvent from '@testing-library/user-event';

// App
import Home from './Home';

const selectPromptText = '-Select an option-';

describe('Home', () => {

    it('Renders without crashing', () => {
        render(<Home />);
    });

    describe('Handling dynamic input', () => {

        it('Initially shows only the group dropdown', () => {
            const documentBody = render(<Home />);
            const prompts = documentBody.getAllByText(selectPromptText);
            expect(prompts.length).toBe(1);
        });

        it('Shows the player dropdown when a group is selected', () => {

            const documentBody = render(<Home/ >);
            const groupPrompt = documentBody.getByText(selectPromptText);
            userEvent.click(groupPrompt);

            const optionActors = documentBody.getByText('actors');
            userEvent.click(optionActors);

            // So now we should have one selection, 'actors', and one prompt, 
            // to pick a player from the actors group
            const chosenGroup = documentBody.getByText('actors');
            const playersPrompt = documentBody.getAllByText(selectPromptText);
            expect(chosenGroup).toBeInTheDocument();
            expect(playersPrompt.length).toBe(1);
        });

        it('Resets the player value if a different group is selected', () => {

            const documentBody = render(<Home/ >);
            const groupPrompt = documentBody.getByText(selectPromptText);
            userEvent.click(groupPrompt);

            const optionActors = documentBody.getByText('actors');
            userEvent.click(optionActors);

            const playersPrompt = documentBody.getByText(selectPromptText);
            userEvent.click(playersPrompt);
            const bellOption = documentBody.getByText('kristen bell');
            userEvent.click(bellOption);

            // We have a group and a player, so we should see no generic prompts now
            const prompts = documentBody.queryAllByText(selectPromptText);
            expect(prompts.length).toBe(0)

            // Now we select a different group Kristen Bell isn't part of...
            const newGroupPrompt = documentBody.getByText('actors');
            userEvent.click(newGroupPrompt);
            const singersOption = documentBody.getByText('singers');
            userEvent.click(singersOption);
            
            // ... and we should no longer see Kristen Bell, but a generic player prompt
            const noBellOption = documentBody.queryByText('kristen bell');
            expect(noBellOption).not.toBeInTheDocument();
            const newPlayerPrompt = documentBody.getByText(selectPromptText);
            expect(newPlayerPrompt).toBeInTheDocument();
        });
    });
});