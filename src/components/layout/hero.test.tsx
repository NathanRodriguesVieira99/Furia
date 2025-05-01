import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero component tests', () => {
  it('should render Hero Image ', () => {
    const view = render(<Hero />);

    const image = screen.getByAltText('Jogadores da Furia de CS');

    expect(image).toBeInTheDocument();
  });
});
