import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const simpleColumnStyles = (theme: Theme) => ({
    root: {
        marginRight: '3rem'
    }
});

const useSimpleColumnTyles = createUseStyles(simpleColumnStyles);

type Props = {
    children: ReactNode;
}

function LayoutBlock({children}: Props) {
    const styles = useSimpleColumnTyles();
    return <div className={styles.root}>{children}</div>
}

export default LayoutBlock;