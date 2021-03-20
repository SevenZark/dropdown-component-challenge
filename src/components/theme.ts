const theme = {
    fontFamily: "'Roboto', 'sans-serif'",
    fontWeights: {
        medium: 500,
        thin: 300,
    },
    palette: {
        text: {
            default: '#333'
        }
    }
}

type Theme = typeof theme;

export default theme;
export type { Theme };