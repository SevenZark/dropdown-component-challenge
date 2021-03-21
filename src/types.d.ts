declare type OptionSelectHandler = (value?: string) => void;

declare type Theme = {
    boxShadow: string;
    fontFamily: string;
    fontWeights: {
        medium: number,
        light: number,
        regular: number,
    };
    palette: {
        primary: {
            main: string;
            light: string;
        },
        text: {
            default: string;
            interactive: string;
        }
    },
    radius: string
}