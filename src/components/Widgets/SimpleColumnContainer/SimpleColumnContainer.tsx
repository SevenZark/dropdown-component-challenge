import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const simpleColumnContainerStyles = {
    root: {
        display: 'flex'
    }
}

const useSimpleColumnContainerStyles = 
    createUseStyles(simpleColumnContainerStyles);

type Props = {
    children: ReactNode;
}

function SimpleColumnContainer({children}: Props) {
    const styles = useSimpleColumnContainerStyles();
    return <div className={styles.root}>{children}</div>
}

export default SimpleColumnContainer;