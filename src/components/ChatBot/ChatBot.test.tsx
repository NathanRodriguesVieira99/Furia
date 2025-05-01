import { render, screen } from '@testing-library/react';
import { ChatBot } from './ChatBot';

describe('ChatBot component tests', () => {
  it('should render ChatBot component ', () => {
    const view = render(<ChatBot />);

    const chatTitle = screen.getByText('Furia AI');

    expect(chatTitle).toBeInTheDocument();
  });
});
