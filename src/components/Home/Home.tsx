import React, { useState } from 'react';

// App
import useHomeStyles from './useHomeStyles';
import * as data from '../../data';
import {
    Heading,
    LayoutBlock,
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

    const handleSelect = (value?: string) =>
        setState({
            ...state,
            groupSelected: value
        });

    return (
        <div className={styles.root}>

            <Heading level={1}>Dropdown Component Challenge</Heading>

            <LayoutBlock>

                <Heading level={2}>Choose your type</Heading>

                <Select
                    id='groups'
                    options={data.groups}
                    onSelect={handleSelect}
                />
            </LayoutBlock>
        </div>
    );
}

export default Home;