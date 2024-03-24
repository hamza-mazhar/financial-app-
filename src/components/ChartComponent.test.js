import React from 'react';
import { render } from '@testing-library/react';
import ChartComponent from './ChartComponent';
import { getDailyTimeSeries } from '../api/financial-data'; // Assuming this is the correct path to your API function

jest.mock('../api/financial-data'); // Mocking the API function

describe('ChartComponent', () => {
    test('renders chart with stock data', async () => {
        // Mock data returned by the API function
        const mockData = {
            'Meta Data': {
                '1. Information':
                    'Daily Prices (open, high, low, close) and Volumes',
                '2. Symbol': 'IBM',
                '3. Last Refreshed': '2024-03-22',
                '4. Output Size': 'Compact',
                '5. Time Zone': 'US/Eastern',
            },
            'Time Series (Daily)': {
                // Add your mock time series data here
                '2023-10-30': {
                    '1. open': '143.1900',
                    '2. high': '144.5000',
                    '3. low': '142.5800',
                    '4. close': '142.6300',
                    '5. volume': '4204190',
                },
                '2023-10-29': {
                    '1. open': '143.1900',
                    '2. high': '144.5000',
                    '3. low': '142.5800',
                    '4. close': '142.6300',
                    '5. volume': '4204190',
                },
            },
        };

        // Mock the implementation of getDailyTimeSeries to return the mock data
        getDailyTimeSeries.mockResolvedValue({ status: 200, data: mockData });

        const { getByText } = render(<ChartComponent />);

        // Check if the component renders loading state
        expect(getByText('IBM Stock Data')).toBeInTheDocument();
    });
});
