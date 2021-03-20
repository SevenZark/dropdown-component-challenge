import React, { useState } from 'react';

// App
import { SelectOption } from 'components/widgets';

const selectPromptText = '-Select an option-';

type Props = {
    id: string,
    options?: string[],
    onSelect?: OptionSelectHandler,
    value?: number | string;
}

type State = {
    isOpen: boolean,
    selectedValue?: string
}

function Select({ options, onSelect, value }: Props) {

    const [state, setState] = useState<State>({
        isOpen: false,
        selectedValue: undefined
    });

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

    function Options() {

        if (!options || options.length === 0) return null;

        const optionsComponents = options?.map((option, index) => (
            <SelectOption
                key={index} 
                onSelect={handleSelect}
                tabIndex={index}
                value={option}
            >
                {option}
            </SelectOption>
        ));

        return <>{optionsComponents}</>;
    }

    return (
        <ul role="listbox">
            {
                state.isOpen
                    ? <Options />
                    : (
                        <SelectOption
                            onSelect={handleOpen}
                            tabIndex={0}
                        >
                            {state.selectedValue || selectPromptText}
                        </SelectOption>
                    )
            }
        </ul>
    );
}

export default Select;