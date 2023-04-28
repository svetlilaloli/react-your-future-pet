import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { About } from './About';
import { BrowserRouter } from 'react-router-dom';

describe('About Component', () => {
    test('Click on the catalog button', async () => {
        const button = 'Find your best friend!'
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        userEvent.click(screen.queryByText(button));

        expect(global.window.location.pathname).toContain(`/catalog`);
    });
});