import { render, screen } from '@testing-library/react';
import { HeroText } from './heroText';

describe('HeroText component tests', () => {
  it('should render Hero Text ', () => {
    const view = render(<HeroText />);

    const heroTextTitle = screen.getByTestId('hero_text_title');
    const heroTextParagraphI = screen.getByTestId('hero_text_paragraphI');
    const heroTextParagraphII = screen.getByTestId('hero_text_paragraphII');
    const furiaSpans = screen.getAllByText('FURIA');

    expect(heroTextTitle).toBeInTheDocument();
    expect(heroTextParagraphI).toBeInTheDocument();
    expect(heroTextParagraphII).toBeInTheDocument();
    expect(furiaSpans.length).toBe(2);
  });
});
