import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from './header';

describe('Header component tests', () => {
    it('should render Header component ', () => {
        const view = render(<Header />);

        // a role banner serve para a tag header
        const headerComponent = screen.getByRole('banner');

        expect(headerComponent).toBeInTheDocument();
    });
    it('should click on the links and verify attributes', async () => {
        const view = render(<Header />);

        const headerFirstLink = screen.getByRole('link', { name: 'Jogadores' });
        const headerSecondLink = screen.getByRole('link', {
            name: 'Resultados',
        });

        await userEvent.click(headerFirstLink);
        await userEvent.click(headerSecondLink);

        expect(headerFirstLink).toHaveAttribute('href', '#players_section');
        expect(headerSecondLink).toHaveAttribute('href', '#');
    });
    it('should render Header component and display the logo image', () => {
        const view = render(<Header />);

        const logo = screen.getByAltText('Logo Furia');

        expect(logo).toBeInTheDocument();
    });
});
