declare type OptionSelectHandler = (value?: string) => void;

declare type Theme = {
    fontFamily: string;
    fontWeights: {
        medium: number,
        thin: number,
    };
    palette: {
        text: {
            default: string;
        }
    }
}