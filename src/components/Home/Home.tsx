import React, { useState } from 'react';

// App
import useHomeStyles from './useHomeStyles';
import * as data from '../../data';
import {
    Heading,
    Select
} from '../widgets';

type State = {
    groupSelected?: string;
}

function Home() {

    const styles = useHomeStyles();

    const [state, setState] = useState<State>({
        groupSelected: undefined
    });

    function handleSelect(e: React.MouseEvent<HTMLElement>) {

        if (!e.currentTarget) return;

        e.currentTarget &&
            setState({
                ...state,
                groupSelected: (e.currentTarget as HTMLElement).id
            });
    }

    return (
        <div className={styles.root}>
            <Heading level={1}>Dropdown Component Challenge</Heading>
            <Select
                id='groups'
                options={data.groups}
                onSelect={handleSelect}
            />
        </div>
    );
}

export default Home;