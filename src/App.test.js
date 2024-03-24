import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders react app', async () => {
    await act(async () => {
        render(<App />);
    });

    const linkElement = screen.getByText(/IBM Stock and Financial Overview/i);
    expect(linkElement).toBeInTheDocument();
});
