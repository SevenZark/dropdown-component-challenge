import { createUseStyles } from 'react-jss';

const selectStyles = (theme: Theme) => ({
    open: {
        borderRadius: theme.radius,
        boxShadow: theme.boxShadow,
        padding: '0.25rem'
    }
});

export default createUseStyles(selectStyles);