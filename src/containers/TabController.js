// App.js
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import ChartComponent from '../components/ChartComponent';
import IncomeStatementComponent from '../components/IncomeStatementComponent';
import { getBalanceSheet, getIncomeStatement } from '../api/financial-data';
import { incomeStatementCol, blanceSheetCol } from '../columns/tableColumn';

const TabRenderer = () => {
    const [incomeStatement, setIncomeStatement] = useState({});
    const [balanceSheet, setBalanceSheet] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [incomeResponse, balanceResponse] = await Promise.all([
                getIncomeStatement(),
                getBalanceSheet(),
            ]);
            setIncomeStatement(incomeResponse.data);
            setBalanceSheet(balanceResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const items = [
        {
            key: 'daily',
            label: 'Daily Report',
            children: <ChartComponent />,
        },
        {
            key: 'income',
            label: 'Income Statement',
            children: (
                <IncomeStatementComponent
                    idx={1}
                    tableCol={incomeStatementCol}
                    statemenData={incomeStatement}
                />
            ),
        },
        {
            key: 'balance',
            label: 'Balance Sheet',
            children: (
                <IncomeStatementComponent
                    idx={2}
                    tableCol={blanceSheetCol}
                    statemenData={balanceSheet}
                />
            ),
        },
    ];

    return (
        <div>
            <h1>IBM Stock and Financial Overview</h1>
            <Tabs defaultActiveKey="daily" items={items} />
        </div>
    );
};

export default TabRenderer;
