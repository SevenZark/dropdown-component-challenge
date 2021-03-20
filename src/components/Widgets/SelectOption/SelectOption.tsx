import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler; 
    tabIndex?: number;
    value?: number | string;
}

const SelectOption = ({ 
    children, 
    onClick,
    tabIndex, 
    value 
}: Props) => (
    <li
        aria-selected={false}
        onClick={onClick}
        role="option"
        tabIndex={tabIndex}
    >
        {children}
    </li>
);

export default SelectOption;