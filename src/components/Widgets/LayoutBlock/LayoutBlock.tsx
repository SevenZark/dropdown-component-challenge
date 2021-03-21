import React from 'react';
import { createUseStyles } from 'react-jss';

const layoutBlockStyles = (theme: Theme) => ({
    root: {
        display: 'inline-block'
    }
});

const useLayoutBlockStyles = createUseStyles(layoutBlockStyles);

type Props = {
    children: React.ReactNode;
}

function LayoutBlock({children}: Props) {
    const styles = useLayoutBlockStyles();
    return <div className={styles.root}>{children}</div>
}

export default LayoutBlock;