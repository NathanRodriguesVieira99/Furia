import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('CardDescription component tests', () => {
    it('should render the CardDescription component ', () => {
        const view = render(
            <Card.Description description="Description Test" />
        );

        const descriptionContent = screen.getByText('Description Test');

        expect(descriptionContent).toBeInTheDocument();
    });
});
