import axios from 'axios';
//these keys will shift into .env file
const API_KEY = 'demo';
const API_BASE_URL = 'https://www.alphavantage.co';

const getDailyTimeSeries = () => {
    return axios.get(
        `${API_BASE_URL}/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`
    );
};

const getIncomeStatement = () => {
    return axios.get(
        `${API_BASE_URL}/query?function=INCOME_STATEMENT&symbol=IBM&apikey=${API_KEY}`
    );
};

const getBalanceSheet = () => {
    return axios.get(
        `${API_BASE_URL}/query?function=BALANCE_SHEET&symbol=IBM&apikey=${API_KEY}`
    );
};

export { getDailyTimeSeries, getIncomeStatement, getBalanceSheet };
