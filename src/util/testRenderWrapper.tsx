import React from 'react';
import { ThemeProvider } from 'react-jss';
import { render } from '@testing-library/react';

// App
import theme from 'components/theme';

function testRenderWrapper(children: React.ReactNode) {
    return render(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default testRenderWrapper;