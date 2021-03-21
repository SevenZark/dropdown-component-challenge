import React, { useEffect, useState } from 'react';

// App
import useHomeStyles from './useHomeStyles';
import * as data from '../../data';
import {
    Heading,
    Select,
    SimpleColumn,
    SimpleColumnContainer
} from '../widgets';

type State = {
    groupSelected?: string;
    playerSelected?: string;
}

type Group = 'actors' | 'athletes' | 'singers';

function Home() {

    const styles = useHomeStyles();

    const [state, setState] = useState<State>({
        groupSelected: undefined,
        playerSelected: undefined
    });

    const handleGroupSelect = (value?: string) =>
        setState({
            ...state,
            groupSelected: value
        });

    const handlePlayerSelect = (value?: string) =>
        setState({
            ...state,
            playerSelected: value
        });

    const playerOptions = (() => {
        switch (state.groupSelected) {
            case "actors": return data.actors;
            case "athletes": return data.athletes;
            case "singers": return data.singers;
        }
    })();

    // If the user has chosen a player, but then changed to a group
    // the player is not in, we reset player to undefined
    useEffect(() => {

        if (!state.groupSelected || !state.playerSelected) return;

        const groupSubIndex = state.groupSelected as Group;

        if (!data[groupSubIndex].includes(state.playerSelected)) {
            setState({
                ...state,
                playerSelected: undefined
            })
        }
    }, [state, state.groupSelected]);


    return (
        <div className={styles.root}>

            <Heading level={1}>Dropdown Component Challenge</Heading>

            <SimpleColumnContainer>
                <SimpleColumn>
                    <Heading level={2}>Choose your type</Heading>
                    <Select
                        options={data.groups}
                        onSelect={handleGroupSelect}
                        value={state.groupSelected}
                    />
                </SimpleColumn>

                {state.groupSelected && (
                    <SimpleColumn>
                        <Heading level={2}>Choose your player</Heading>
                        <Select
                            options={playerOptions}
                            onSelect={handlePlayerSelect}
                            value={state.playerSelected}
                        />
                    </SimpleColumn>
                )}
            </SimpleColumnContainer>
        </div>
    );
}

export default Home;