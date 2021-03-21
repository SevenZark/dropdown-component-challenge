import { createUseStyles } from 'react-jss';

const selectOptionStyles = (theme: Theme) => ({
    root: {
        borderRadius: theme.radius,
        color: theme.palette.text.interactive,
        cursor: 'pointer',
        padding: '0.75rem',
        textTransform: 'capitalize',
        '&:hover': {
            background: theme.palette.primary.light
        }
    },
    solo: {
        background: 'none',
        border: `1px solid ${theme.palette.primary.main}`,
        '&:focus': {
            border: 'none',
            boxShadow: theme.boxShadow,
            outline: `1px solid ${theme.palette.primary.main}`,
        }
    },
    selected: {
        background: theme.palette.primary.light
    }
});

export default createUseStyles(selectOptionStyles);