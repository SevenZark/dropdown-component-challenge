import React from 'react';

// App
import useHomeStyles from './useHomeStyles'; 
import {
    Heading1
} from '../Widgets';

function Home() {

    const styles = useHomeStyles(); 

    return (
        <div className={styles.root}>
            <Heading1>Exercise</Heading1>
        </div>
    );
}

export default Home;