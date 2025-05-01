import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('CardContent component tests', () => {
  it('should render the CardContent component ', () => {
    const view = render(
      <Card.Content>
        <div>Children Test</div>
      </Card.Content>
    );
    const childrenContent = screen.getByText('Children Test');

    expect(childrenContent).toBeInTheDocument();
  });
});
