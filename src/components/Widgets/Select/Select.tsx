import React, { useRef, useState } from 'react';

// App
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

    const firstLiInDom = useRef<HTMLLIElement>(null);

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

    const handleOptionBlur = () => setState({
        ...state,
        isOpen: false
    });

    function Options() {

        if (!options || options.length === 0) return null;

        const optionsComponents = options?.map((option, index) => (
            <SelectOption
                key={index}
                onBlur={handleOptionBlur}
                onSelect={handleSelect}
                passdownRef={index === 0 ? firstLiInDom : undefined}
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
                            passdownRef={firstLiInDom}
                        >
                            {state.selectedValue || selectPromptText}
                        </SelectOption>
                    )
            }
        </ul>
    );
}

export default Select;