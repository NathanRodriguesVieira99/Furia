import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('CardImage component tests', () => {
    it('should render the CardImage component ', () => {
        const mockImage = {
            src: '/test-src',
            alt: 'Test-alt',
        };

        const view = render(
            <Card.Image alt={mockImage.alt} src={mockImage.src} />
        );

        const imageAltMock = screen.getByAltText(mockImage.alt);
        const imageMock = screen.getByRole('img', { name: mockImage.alt });

        expect(imageAltMock).toBeInTheDocument();
        expect(imageMock).toBeInTheDocument();
    });
});
