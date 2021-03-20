import { createUseStyles } from 'react-jss';

const appStyles = (theme: Theme) => ({
    root: {
        color: theme.palette.text.default,
        fontFamily: theme.fontFamily,
        fontSize: '1rem',
        padding: '2rem'
    }
});

export default createUseStyles(appStyles);