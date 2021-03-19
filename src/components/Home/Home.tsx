import React from 'react';

// App
import useHomeStyles from './useHomeStyles'; 
import { Heading } from '../Widgets';

function Home() {

    const styles = useHomeStyles(); 

    return (
        <div className={styles.root}>
            <Heading level={1}>Dropdown Component Challenge</Heading>
        </div>
    );
}

export default Home;