import React, { useEffect } from 'react';

// App
import useSelectOptionStyles from './useSelectOptionStyles';

type Props = {
    children: React.ReactNode;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    passdownRef?: React.RefObject<HTMLLIElement>;
    onSelect?: OptionSelectHandler;
    value?: string;
}

function SelectOption({
    children,
    passdownRef,
    onBlur,
    onSelect,
    value
}: Props) {

    const styles = useSelectOptionStyles();

    useEffect(() => {
        passdownRef?.current?.focus();
    }, [passdownRef]);

    function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {

        if (e.code === 'Space' && onSelect) {
            onSelect(value);
        }

console.log("FOOP", e.code);
    }

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        onSelect && onSelect(value);
    }

    return (
        <li
            aria-selected={false}
            className={styles.root}
            onBlur={onBlur}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            ref={passdownRef}
            role="option"
            tabIndex={0}
        >
            {children}
        </li>
    );
}

export default SelectOption;