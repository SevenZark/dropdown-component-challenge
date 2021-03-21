import React, { useState } from 'react';
import clsx from 'clsx';

// App
import useSelectStyles from './useSelectStyles';
import { SelectOption } from 'components/widgets';

const selectPromptText = '-Select an option-';

type Props = {
    id: string;
    options?: string[];
    onSelect?: OptionSelectHandler;
}

type State = {
    isOpen: boolean;
    selectedValue?: string;
}

function Select({ options, onSelect }: Props) {

    const [state, setState] = useState<State>({
        isOpen: false,
        selectedValue: undefined
    });

    const styles = useSelectStyles();

    const handleOpen = () => setState({
        ...state,
        isOpen: true
    });

    function handleSelect(value?: string) {

        setState({
            ...state,
            isOpen: false,
            selectedValue: value
        });

        onSelect && onSelect(value);
    }

    const handleOptionClose = () => setState({
        ...state,
        isOpen: false
    });

    function Options() {

        if (!options || options.length === 0) return null;

        const optionsComponents = options?.map((option, index) => (
            <SelectOption
                key={index}
                isSelected={option === state.selectedValue}
                onClose={handleOptionClose}
                onSelect={handleSelect}
                value={option}
            >
                {option}
            </SelectOption>
        ));

        return <>{optionsComponents}</>;
    }

    return (
        <ul
            className={clsx(state.isOpen && styles.open)}
            role="listbox"
        >
            {
                state.isOpen
                    ? <Options />
                    : (
                        <SelectOption
                            isSolo
                            onSelect={handleOpen}
                        >
                            {state.selectedValue || selectPromptText}
                        </SelectOption>
                    )
            }
        </ul>
    );
}

export default Select;