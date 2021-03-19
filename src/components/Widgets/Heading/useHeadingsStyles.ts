
import { createUseStyles } from 'react-jss';

// App
import type { Theme } from 'components/theme';

type Props = {
    level: number
}

const useAppStyles = (theme: Theme) => ({
    root: (props: Props) => ({
        fontSize: props.level === 1 ? '2rem' : '1.75rem'
    })
});

export default createUseStyles(useAppStyles);