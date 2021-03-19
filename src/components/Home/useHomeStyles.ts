import { createUseStyles } from 'react-jss';

// App
import type { Theme } from '../theme';

const useAppStyles = (theme: Theme) => ({
    root: {
        fontFamily: theme.fontFamily,
        fontSize: '1rem',
        padding: '2rem'
    }
});

export default createUseStyles(useAppStyles);