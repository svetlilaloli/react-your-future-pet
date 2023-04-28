import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { CatalogItem } from './CatalogItem';
import { BrowserRouter } from 'react-router-dom';

describe('Catalog Item Component', () => {
    test('Show name', () => {
        const id = 'id';
        const name = 'Pet name';
        const image = 'image-url';

        render(
            <BrowserRouter>
                <CatalogItem _id={id} name={name} image={image} />
            </BrowserRouter>
        );

        expect(screen.queryByText(name)).toBeInTheDocument;
        expect(screen.queryByText(image)).toBeInTheDocument;
    });

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const id = 'id';

        render(
            <BrowserRouter>
                <CatalogItem _id={id} />
            </BrowserRouter>
        );

        userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/catalog/${id}`);
    });
});