import React, { MouseEventHandler, useState } from 'react';

// App
import { SelectOption } from 'components/widgets';

const selectPromptText = '-Select an option-';

type Props = {
    id: string,
    options?: string[],
    onSelect?: MouseEventHandler,
    value?: number | string;
}

type State = {
    isOpen: boolean,
    selectedValue?: string
}

function Select({ options, value }: Props) {

    const [state, setState] = useState<State>({
        isOpen: false,
        selectedValue: undefined
    });

    const handleOpen = () => setState({
        ...state,
        isOpen: true
    });

    function Options() {

        if (!options || options.length === 0) return null;

        const optionsComponents = options?.map((option, index) => (
            <SelectOption key={index} tabIndex={index}>
                {option}
            </SelectOption>
        ));

        return <>{optionsComponents}</>;
    }

    function SelectBody() {
        return state.isOpen
            ? <Options />
            : (
                <SelectOption
                    onClick={handleOpen}
                    tabIndex={0}
                >
                    {state.selectedValue || selectPromptText}
                </SelectOption>
            );
    }

    return (
        <ul role="listbox">
            <SelectBody />
        </ul>
    );
}

export default Select;