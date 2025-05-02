import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('CardTitle component tests', () => {
    it('should render the CardTitle component ', () => {
        const view = render(<Card.Title title="Title Test" />);

        const titleContent = screen.getByText('Title Test');

        expect(titleContent).toBeInTheDocument();
    });
});
