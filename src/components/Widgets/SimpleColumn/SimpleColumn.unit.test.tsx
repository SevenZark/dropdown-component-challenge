import render from 'util/testRenderWrapper';

// App
import SimpleColumn from './SimpleColumn';

describe('Heading', () => {
    it('Renders without crashing', () => {
        render(<SimpleColumn>Some content</SimpleColumn>);
    });
});