import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveTextContent
import IncomeStatementComponent from './IncomeStatementComponent'; // Update the path as per your project structure
import { incomeStatementCol } from '../columns/tableColumn';

describe('IncomeStatementComponent', () => {
    const statemenData = {
        quarterlyReports: [
            {
                fiscalDateEnding: '2023-12-31',
                reportedCurrency: 'USD',
                grossProfit: '10267000000',
                totalRevenue: '17381000000',
                costOfRevenue: '7114000000',
                costofGoodsAndServicesSold: '112000000',
                operatingIncome: '3876000000',
                sellingGeneralAndAdministrative: '4791000000',
                researchAndDevelopment: '1748000000',
                operatingExpenses: '6391000000',
                investmentIncomeNet: 'None',
                netInterestIncome: '-405000000',
                interestIncome: '143000000',
                interestExpense: '405000000',
                nonInterestIncome: '-412000000',
                otherNonOperatingIncome: '108000000',
                depreciation: '541000000',
                depreciationAndAmortization: '611000000',
                incomeBeforeTax: '3762000000',
                incomeTaxExpense: '474000000',
                interestAndDebtExpense: '405000000',
                netIncomeFromContinuingOperations: '3285000000',
                comprehensiveIncomeNetOfTax: '624000000',
                ebit: '4167000000',
                ebitda: '4778000000',
                netIncome: '3288000000',
            },
        ],
        annualReports: [
            {
                fiscalDateEnding: '2023-12-31',
                reportedCurrency: 'USD',
                grossProfit: '34300000000',
                totalRevenue: '61860000000',
                costOfRevenue: '27560000000',
                costofGoodsAndServicesSold: '245000000',
                operatingIncome: '6979000000',
                sellingGeneralAndAdministrative: '19003000000',
                researchAndDevelopment: '6775000000',
                operatingExpenses: '27321000000',
                investmentIncomeNet: 'None',
                netInterestIncome: '-1607000000',
                interestIncome: '591000000',
                interestExpense: '1607000000',
                nonInterestIncome: '-77000000',
                otherNonOperatingIncome: '266000000',
                depreciation: '2109000000',
                depreciationAndAmortization: '2287000000',
                incomeBeforeTax: '8678000000',
                incomeTaxExpense: '1176000000',
                interestAndDebtExpense: '1607000000',
                netIncomeFromContinuingOperations: '7514000000',
                comprehensiveIncomeNetOfTax: '5481000000',
                ebit: '10285000000',
                ebitda: '12572000000',
                netIncome: '7502000000',
            },
        ],
    };

    test('renders IncomeStatementComponent with default quarterly data', () => {
        const { getByText, getByRole } = render(
            <IncomeStatementComponent
                idx={1}
                tableCol={incomeStatementCol}
                statemenData={statemenData}
            />
        );

        // Assert that Quarterly is selected by default
        expect(getByText('Quarterly')).toBeInTheDocument();

        // Assert that the table renders with the default quarterly data
        expect(getByRole('table')).toBeInTheDocument();
    });

    test('changes data when selecting Annual option', () => {
        const { getByText, getByRole } = render(
            <IncomeStatementComponent
                idx={1}
                tableCol={incomeStatementCol}
                statemenData={statemenData}
            />
        );

        // Change the Select to Annual
        fireEvent.change(getByRole('combobox'), {
            target: { value: 'annualReports' },
        });

        // Assert that Annual is selected
        expect(getByText('Annual')).toBeInTheDocument();

        // Assert that the table renders with the annual data
        expect(getByRole('table')).toBeInTheDocument();
    });
});
