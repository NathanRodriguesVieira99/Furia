import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('CardRoot component tests', () => {
    it('should render the CardRoot component ', () => {
        const view = render(
            <Card.Root>
                <div>Children Test</div>
            </Card.Root>
        );
        const childrenContent = screen.getByText('Children Test');

        expect(childrenContent).toBeInTheDocument();
    });
});
