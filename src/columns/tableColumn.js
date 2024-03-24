const incomeStatementCol = [
    {
        title: 'FiscalDateEnding',
        dataIndex: 'fiscalDateEnding',
        key: 'fiscalDateEnding',
        width: 150,
        fixed: 'left',
    },
    {
        title: 'ReportedCurrency',
        key: 'reportedCurrency',
        dataIndex: 'reportedCurrency',
        width: 160,
    },
    {
        title: 'GrossProfit',
        dataIndex: 'grossProfit',
        key: 'grossProfit',
        width: 150,
    },
    {
        title: 'TotalRevenue',
        dataIndex: 'totalRevenue',
        key: 'totalRevenue',
        width: 100,
    },
    {
        title: 'CostOfRevenue',
        dataIndex: 'costOfRevenue',
        key: 'costOfRevenue',
        width: 100,
    },
    {
        title: 'CostofGoodsAndServicesSold',
        dataIndex: 'costofGoodsAndServicesSold',
        key: 'costofGoodsAndServicesSold',
        width: 150,
    },
    {
        title: 'OperatingIncome',
        dataIndex: 'operatingIncome',
        key: 'operatingIncome',
        width: 150,
    },
    {
        title: 'SellingGeneralAndAdministrative',
        dataIndex: 'sellingGeneralAndAdministrative',
        key: 'sellingGeneralAndAdministrative',
        width: 150,
    },
    {
        title: 'ResearchAndDevelopment',
        dataIndex: 'researchAndDevelopment',
        key: 'researchAndDevelopment',
        width: 150,
    },
    {
        title: 'OperatingExpenses',
        dataIndex: 'operatingExpenses',
        key: 'operatingExpenses',
        width: 150,
    },
    {
        title: 'InvestmentIncomeNet',
        dataIndex: 'investmentIncomeNet',
        key: 'investmentIncomeNet',
        width: 150,
    },
    {
        title: 'NetInterestIncome',
        dataIndex: 'netInterestIncome',
        key: 'netInterestIncome',
        width: 150,
    },
    {
        title: 'InterestIncome',
        dataIndex: 'interestIncome',
        key: 'interestIncome',

        width: 150,
    },
    {
        title: 'InterestExpense',
        dataIndex: 'interestExpense',
        key: 'interestExpense',
        width: 150,
    },
    {
        title: 'NonInterestIncome',
        dataIndex: 'nonInterestIncome',
        key: 'nonInterestIncome',
        width: 150,
    },
    {
        title: 'OtherNonOperatingIncome',
        dataIndex: 'otherNonOperatingIncome',
        key: 'otherNonOperatingIncome',
        width: 150,
    },
    {
        title: 'Depreciation',
        dataIndex: 'depreciation',
        key: 'depreciation',
        width: 150,
    },
    {
        title: 'DepreciationAndAmortization',
        dataIndex: 'depreciationAndAmortization',
        key: 'depreciationAndAmortization',

        width: 150,
    },
    {
        title: 'IncomeBeforeTax',
        dataIndex: 'incomeBeforeTax',
        key: 'incomeBeforeTax',
        width: 150,
    },
    {
        title: 'IncomeTaxExpense',
        dataIndex: 'incomeTaxExpense',
        key: 'incomeTaxExpense',

        width: 150,
    },
    {
        title: 'InterestAndDebtExpense',
        dataIndex: 'interestAndDebtExpense',
        key: 'interestAndDebtExpense',

        width: 150,
    },
    {
        title: 'NetIncomeFromContinuingOperations',
        dataIndex: 'netIncomeFromContinuingOperations',
        key: 'netIncomeFromContinuingOperations',

        width: 150,
    },
    {
        title: 'ComprehensiveIncomeNetOfTax',
        dataIndex: 'comprehensiveIncomeNetOfTax',
        key: 'comprehensiveIncomeNetOfTax',

        width: 150,
    },
    {
        title: 'Ebit',
        dataIndex: 'ebit',
        key: 'ebit',

        width: 100,
    },
    {
        title: 'Ebitda',
        dataIndex: 'ebitda',
        key: 'ebitda',

        width: 100,
    },
    {
        title: 'NetIncome',
        dataIndex: 'netIncome',
        key: 'netIncome',
        width: 150,
        fixed: 'right',
    },
];

const blanceSheetCol = [
    {
        title: 'FiscalDateEnding',
        dataIndex: 'fiscalDateEnding',
        width: 150,
        fixed: 'left',
    },
    {
        title: 'ReportedCurrency',
        dataIndex: 'reportedCurrency',
        width: 160,
    },
    {
        title: 'TotalAssets',
        dataIndex: 'totalAssets',
        width: 150,
    },
    {
        title: 'TotalCurrentAssets',
        dataIndex: 'totalCurrentAssets',
        width: 150,
    },
    {
        title: 'CashAndCashEquivalentsAtCarryingValue',
        dataIndex: 'cashAndCashEquivalentsAtCarryingValue',
        width: 150,
    },
    {
        title: 'CashAndShortTermInvestments',
        dataIndex: 'cashAndShortTermInvestments',
        width: 150,
    },
    {
        title: 'Inventory',
        dataIndex: 'inventory',
        width: 150,
    },
    {
        title: 'CurrentNetReceivables',
        dataIndex: 'currentNetReceivables',
        width: 150,
    },
    {
        title: 'TotalNonCurrentAssets',
        dataIndex: 'totalNonCurrentAssets',
        width: 150,
    },
    {
        title: 'PropertyPlantEquipment',
        dataIndex: 'propertyPlantEquipment',
        width: 150,
    },
    {
        title: 'AccumulatedDepreciationAmortizationPPE',
        dataIndex: 'accumulatedDepreciationAmortizationPPE',
        width: 150,
    },
    {
        title: 'IntangibleAssets',
        dataIndex: 'intangibleAssets',
        width: 150,
    },
    {
        title: 'IntangibleAssetsExcludingGoodwill',
        dataIndex: 'intangibleAssetsExcludingGoodwill',
        width: 150,
    },
    {
        title: 'Goodwill',
        dataIndex: 'goodwill',
        width: 150,
    },
    {
        title: 'Investments',
        dataIndex: 'investments',
        width: 150,
    },
    {
        title: 'LongTermInvestments',
        dataIndex: 'longTermInvestments',
        width: 150,
    },
    {
        title: 'ShortTermInvestments',
        dataIndex: 'shortTermInvestments',
        width: 150,
    },
    {
        title: 'OtherCurrentAssets',
        dataIndex: 'otherCurrentAssets',
        width: 150,
    },
    {
        title: 'OtherNonCurrentAssets',
        dataIndex: 'otherNonCurrentAssets',
        width: 150,
    },
    {
        title: 'TotalLiabilities',
        dataIndex: 'totalLiabilities',
        width: 150,
    },
    {
        title: 'TotalCurrentLiabilities',
        dataIndex: 'totalCurrentLiabilities',
        width: 150,
    },
    {
        title: 'CurrentAccountsPayable',
        dataIndex: 'currentAccountsPayable',
        width: 150,
    },
    {
        title: 'DeferredRevenue',
        dataIndex: 'deferredRevenue',
        width: 150,
    },
    {
        title: 'CurrentDebt',
        dataIndex: 'currentDebt',
        width: 150,
    },
    {
        title: 'ShortTermDebt',
        dataIndex: 'shortTermDebt',
        width: 150,
    },
    {
        title: 'TotalNonCurrentLiabilities',
        dataIndex: 'totalNonCurrentLiabilities',
        width: 150,
    },
    {
        title: 'CapitalLeaseObligations',
        dataIndex: 'capitalLeaseObligations',
        width: 150,
    },
    {
        title: 'LongTermDebt',
        dataIndex: 'longTermDebt',
        width: 150,
    },
    {
        title: 'CurrentLongTermDebt',
        dataIndex: 'currentLongTermDebt',
        width: 150,
    },
    {
        title: 'LongTermDebtNoncurrent',
        dataIndex: 'longTermDebtNoncurrent',
        width: 150,
    },
    {
        title: 'ShortLongTermDebtTotal',
        dataIndex: 'shortLongTermDebtTotal',
        width: 150,
    },
    {
        title: 'OtherCurrentLiabilities',
        dataIndex: 'otherCurrentLiabilities',
        width: 150,
    },
    {
        title: 'OtherNonCurrentLiabilities',
        dataIndex: 'otherNonCurrentLiabilities',
        width: 150,
    },
    {
        title: 'TotalShareholderEquity',
        dataIndex: 'totalShareholderEquity',
        width: 150,
    },
    {
        title: 'TreasuryStock',
        dataIndex: 'treasuryStock',
        width: 150,
    },
    {
        title: 'RetainedEarnings',
        dataIndex: 'retainedEarnings',
        width: 150,
    },
    {
        title: 'CommonStock',
        dataIndex: 'commonStock',
        width: 150,
    },
    {
        title: 'CommonStockSharesOutstanding',
        dataIndex: 'commonStockSharesOutstanding',
        width: 150,
    },
];

export { incomeStatementCol, blanceSheetCol };
