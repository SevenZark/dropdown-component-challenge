import { createUseStyles } from 'react-jss';

const useAppStyles = (theme: Theme) => ({
    h1: {
        fontSize: '2rem',
        fontWeight: theme.fontWeights.thin,
        marginBottom: '2rem'
    },
    h2: {
        fontSize: '1.75rem',
        fontWeight: theme.fontWeights.medium
    }
});

export default createUseStyles(useAppStyles);