import { 
    KeyboardEvent, 
    MouseEvent, 
    ReactNode 
} from 'react';
import clsx from 'clsx';

// App
import useSelectOptionStyles from './useSelectOptionStyles';

type Props = {
    children: ReactNode;
    isSelected?: boolean;
    isSolo?: boolean;
    onClose?: Function;
    onSelect?: OptionSelectHandler;
    value?: string;
}

function SelectOption({
    children,
    isSelected = false,
    isSolo = false,
    onClose,
    onSelect,
    value
}: Props) {

    const styles = useSelectOptionStyles();

    function handleKeyUp(e: KeyboardEvent<HTMLLIElement>) {

        if (e.code === 'Space' && onSelect) {
            onSelect(value);
        }

        if (e.code === 'Escape' && onClose) {
            onClose();
        }
    }

    function handleClick(e: MouseEvent<HTMLElement>) {
        onSelect && onSelect(value);
    }

    return (
        <li
            aria-selected={isSelected}
            className={clsx(
                styles.root,
                isSelected && styles.selected,
                isSolo && styles.solo
            )}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            role="option"
            tabIndex={0}
        >
            {children}
        </li>
    );
}

export default SelectOption;