import React, { useState } from 'react';
import { Table, Select } from 'antd';
import PropTypes from 'prop-types';

const IncomeStatementComponent = ({ idx, tableCol, statemenData }) => {
    const [tableData, setTableData] = useState(statemenData.quarterlyReports);
    const handleChange = (value) => {
        setTableData(statemenData[value]);
    };
    return (
        <div key={idx}>
            <Select
                defaultValue="quarterlyReports"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'quarterlyReports',
                        label: 'Quarterly',
                    },
                    {
                        value: 'annualReports',
                        label: 'Annual',
                    },
                ]}
            />
            <Table
                key={idx}
                size="medium"
                style={{ height: '400px' }}
                rowKey={(obj) => obj.fiscalDateEnding}
                columns={tableCol}
                dataSource={tableData}
                scroll={{
                    x: 1500,
                    y: 600,
                }}
            />
        </div>
    );
};
//for porps type checking
IncomeStatementComponent.propTypes = {
    idx: PropTypes.number.isRequired,
    tableCol: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            dataIndex: PropTypes.string.isRequired,
            width: PropTypes.number,
        })
    ).isRequired,
    statemenData: PropTypes.shape({
        quarterlyReports: PropTypes.array,
        annualReports: PropTypes.array,
    }).isRequired,
};

export default IncomeStatementComponent;
