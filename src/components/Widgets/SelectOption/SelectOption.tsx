import React, { useEffect } from 'react';

// App
import useSelectOptionStyles from './useSelectOptionStyles';

type Props = {
    children: React.ReactNode;
    onClose?: Function;
    passdownRef?: React.RefObject<HTMLLIElement>;
    onSelect?: OptionSelectHandler;
    value?: string;
}

function SelectOption({
    children,
    passdownRef,
    onClose,
    onSelect,
    value
}: Props) {

    const styles = useSelectOptionStyles();

    useEffect(() => {
        passdownRef?.current?.focus();
    }, [passdownRef]);

    function handleKeyUp(e: React.KeyboardEvent<HTMLLIElement>) {

        if (e.code === 'Space' && onSelect) {
            onSelect(value);
        }

        if (e.code === 'Escape' && onClose) {
            onClose();
        }
    }

    function handleBlur(e: React.FocusEvent<HTMLLIElement>) {

        const el = e?.relatedTarget as HTMLLIElement;
        const newFocusRole = el?.getAttribute('role');
        const newFocusIsNotAnOption = (newFocusRole !== 'option');

        if (newFocusIsNotAnOption) {
            onClose && onClose(e);
        }
    }

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        onSelect && onSelect(value);
    }

    return (
        <li
            aria-selected={false}
            className={styles.root}
            onBlur={handleBlur}
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