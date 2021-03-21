import React, { 
    useEffect, 
    useState 
} from 'react';
import clsx from 'clsx';

// App
import useSelectStyles from './useSelectStyles';
import { SelectOption } from 'components/widgets';

const selectPromptText = '-Select an option-';

type Props = {
    options?: string[];
    onSelect?: OptionSelectHandler;
    value?: string
}

type State = {
    isOpen: boolean;
    selectedValue?: string;
}

function Select({
    options,
    onSelect,
    value
}: Props) {

    const [state, setState] = useState<State>({
        isOpen: false,
        selectedValue: value
    });

    // Update local state value if changed in props.
    // NOTE: ESLint complains about state being a missing dependency,
    // but any attempts to please ESLint here seemed more complex 
    // than beneficial, to me, as they risk an infinite loop of
    // re-renders. If I had more time I'd investigate further, though.
    useEffect(() => {
        setState({
            ...state,
            selectedValue: value
        });
    }, [value]);

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