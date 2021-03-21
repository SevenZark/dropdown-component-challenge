import { createUseStyles } from 'react-jss';

const useAppStyles = (theme: Theme) => ({
    h1: {
        borderBottom: `1px solid ${theme.palette.text.default}`,
        fontSize: '2rem',
        fontWeight: theme.fontWeights.light,
        marginBottom: '2.75rem',
        paddingBottom: '1rem'
    },
    h2: {
        fontSize: '1.75rem',
        fontWeight: theme.fontWeights.medium,
        marginBottom: '1.75rem'
    }
});

export default createUseStyles(useAppStyles);