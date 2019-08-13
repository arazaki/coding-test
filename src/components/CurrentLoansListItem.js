import React from 'react'
import { useLoansContext } from '../context/loans-context';
import { termRemaining } from '../helpers/index';

const CurrentLoansListItem = (props) => {
    const { handleSelectLoan, investedLoans } = useLoansContext()
    return (
        <div>
            <h4 className="font-weight-bold">{props.loan.title}</h4>
            <div className="row">
                <div className="col-md col-12 my-md-0 my-1">
                    <div>
                        <span>Tranche: </span>
                        <span>{props.loan.tranche}</span>
                    </div>
                    <div>
                        <span>Amount available: </span>
                        <span>£{props.loan.available}</span>
                    </div>
                    <div>
                        <span>Annualised return: </span>
                        <span>{props.loan.annualised_return}%</span>
                    </div>
                    <div>
                        <span>Term remaining: </span>
                        <span>
                            {termRemaining(props.loan.term_remaining)}
                        </span>
                    </div>
                    <div>
                        <span>LTV: </span>
                        <span>{props.loan.ltv}%</span>
                    </div>
                    <div>
                        <span>Total amount: </span>
                        <span>£{props.loan.amount}</span>
                    </div>
                </div>
                <div className="align-self-end col-md-auto col-12">
                    {investedLoans.filter((item) => item.id === props.loan.id).length > 0 && <p className="text-success">Invested</p>}
                    <button className="bg-warning text-uppercase border-0 px-5 py-3 col" onClick={() => handleSelectLoan(props.loan)}>Invest</button>
                </div>
            </div>
        </div>
    )
}

export default CurrentLoansListItem
