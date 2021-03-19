import React from 'react';

// App
import useHeadingsStyles from './useHeadingsStyles';

type Props = {
    children: React.ReactNode,
    level: number
}

function Heading(props: Props) {

    const { children, level} = props;
    const styles = useHeadingsStyles({level});

    const headingProps = {
        className: styles.root,
    }

    return level === 1
        ? <h1 {...headingProps}>{children}</h1>
        : <h2 {...headingProps}>{children}</h2>
}

export { Heading };