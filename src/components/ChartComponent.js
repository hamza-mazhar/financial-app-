import React, { useEffect, useState } from 'react';
import { getDailyTimeSeries } from '../api/financial-data';
import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

const ChartComponent = () => {
    const [stockData, setStockData] = useState({});
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        getDailyTimeSeries()
            .then((result) => {
                if (result.status === 200) {
                    const { data } = result;
                    let dataArr = [];
                    setStockData(data);
                    let requireData = data['Time Series (Daily)'];
                    Object.entries(requireData).map(([key, value]) =>
                        dataArr.push({
                            label: key,
                            open: value['1. open'],
                            high: value['2. high'],
                            low: value['3. low'],
                            close: value['4. close'],
                            volume: value['5. volume'],
                        })
                    );
                    setChartData(dataArr.reverse());
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    return (
        <React.Fragment>
            <h1>IBM Stock Data</h1>
            {!!stockData['Meta Data'] &&
                Object.entries(stockData['Meta Data']).map(([key, value]) => (
                    <div key={key}>
                        {' '}
                        <strong>{key}:</strong>
                        {value}
                    </div>
                ))}
            <div style={{ height: '400px' }}>
                <Line
                    data={{
                        labels: chartData.map((data) => data.label),
                        datasets: [
                            {
                                label: 'Open',
                                data: chartData.map((data) => data.open),
                                backgroundColor: '#FF3030',
                                borderColor: '#FF3030',
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        interaction: {
                            intersect: false,
                        },
                        elements: {
                            line: {
                                tension: 0.5,
                            },
                        },
                        plugins: {
                            title: {
                                text: 'Time Series (Daily)',
                            },
                            tooltip: {
                                callbacks: {
                                    afterLabel: (context) => {
                                        const { label } = context;
                                        const associateData =
                                            stockData['Time Series (Daily)'][
                                                label
                                            ];
                                        return `\nHigh: ${associateData['2. high']}\nLow: ${associateData['3. low']}\nClose: ${associateData['4. close']}\nVolume: ${associateData['5. volume']}`;
                                    },
                                },
                            },
                        },
                    }}
                />
            </div>
        </React.Fragment>
    );
};

export default ChartComponent;
