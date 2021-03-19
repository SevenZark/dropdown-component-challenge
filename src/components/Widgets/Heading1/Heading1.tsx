import React from 'react';

type Props = {
    children: React.ReactNode
}

function Heading1(props: Props) {

    const { children } = props;

    return (<h1>{children}</h1>)
}

export default Heading1;