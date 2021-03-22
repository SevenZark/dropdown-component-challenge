import { ReactNode } from 'react';

// App
import useHeadingsStyles from './useHeadingsStyles';

type Props = {
    children: ReactNode,
    level: number
}

function Heading(props: Props) {

    const { children, level} = props;
    const styles = useHeadingsStyles();

    return level === 1
        ? <h1 className={styles.h1}>{children}</h1>
        : <h2 className={styles.h2}>{children}</h2>
}

export default Heading;