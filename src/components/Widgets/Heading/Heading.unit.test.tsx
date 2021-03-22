import render from 'util/testRenderWrapper';

// App
import Heading from './Heading';

describe('Heading', () => {
    it('Heading 1 renders without crashing', () => {
        render(<Heading level={1}>My Heading 1</Heading>);
    });
    it('Heading 2 renders without crashing', () => {
        render(<Heading level={2}>My Heading 2</Heading>);
    });
});
