import React from 'react'
import { useLoansContext } from '../context/loans-context';
import { totalAmountAvailable, formatCurrency } from '../helpers/index';
import CurrentLoansListItem from './CurrentLoansListItem';

const CurrentLoansList = () => {
    let contents;

    const { loans } = useLoansContext();

    if (loans.length === 0) {
        contents = (
            <span data-test="no-loans-message">
                Sorry. We are out of loans!
            </span>
        )
    } else {
        const loansItems = loans.map((item) => (
            <div className="list-group-item mb-md-4 mb-2" data-test="current-loans-list-item" key={item.id}>
                <CurrentLoansListItem loan={item} />
            </div>
        ));
        contents = (
            <React.Fragment>
                <h1 className="mb-2 mb-md-4 pl-3 pl-md-0 font-weight-bold">Current Loans</h1>
                <div className="list-group">
                    {loansItems}
                    <p className="text-center">
                        Total amount available for investments: <strong>£{formatCurrency(totalAmountAvailable(loans))}</strong>
                    </p>
                </div>
            </React.Fragment>
        );
    }
    return (
        <div className="current-loans-list px-md-5 py-4 bg-light" data-test="component-current-loans-list">
            {contents}
        </div>
    )
}

export default CurrentLoansList
