import React from 'react';

// App
import useSelectOptionStyles from './useSelectOptionStyles';

type Props = {
    children: React.ReactNode;
    onSelect?: OptionSelectHandler;
    tabIndex?: number;
    value?: string;
}

function SelectOption({
    children,
    onSelect,
    tabIndex,
    value
}: Props) {

    const styles = useSelectOptionStyles();

    function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        e.code === 'Space' && onSelect && onSelect(value)
    }

    function handleClick() {
        onSelect && onSelect(value);
    }

    return (
        <li
            aria-selected={false}
            className={styles.root}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            role="option"
            tabIndex={tabIndex}
        >
            {children}
        </li>
    );
}

export default SelectOption;