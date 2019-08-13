import React, { useState } from 'react'
import Modal from 'react-modal'
import { useLoansContext } from '../context/loans-context'
import { termRemaining } from '../helpers/index'
import CurrencyFormat from 'react-currency-format'

const InvestModal = () => {
    const { selectedLoan, onInvest, handleClearSelectedLoan } = useLoansContext()
    const [investmentAmount, setInvestmentAmount] = useState('')
    const [error, setError] = useState('');

    const onInvestmentChange = (available, value) => {
        if (!value || value.match(/^\d{1,}(,\d{0,3})?$/)) {
            if (parseInt(value.replace(/,/g, ''), 10) > parseInt(available.replace(/,/g, ''), 10)) {
                setError("The value informed exceeds the available amount to invest.")
            } else {
                setError("")
            }
        } setInvestmentAmount(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (investmentAmount === '') {
            setError('Please inform an investment amount')
        } else {
            if (!error) {
                onInvest(selectedLoan, investmentAmount)
                handleClearSelectedLoan()
                setInvestmentAmount('')
            }
        }
    }

    return (
        <Modal
            isOpen={!!selectedLoan}
            onRequestClose={() => {
                handleClearSelectedLoan()
                setInvestmentAmount('')
                setError('')
            }}
            contentLabel='Invest in Loan'
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
        >
            <h3 className="font-weight-bold">Invest in Loan</h3>
            <h4 className="mb-2">{selectedLoan && selectedLoan.title}</h4>
            <div>
                <span>Amount available: </span>
                <span>£{selectedLoan && selectedLoan.available}</span>
            </div>
            <div>
                <span>Loan ends in: </span>
                <span>{selectedLoan && termRemaining(selectedLoan.term_remaining)}</span>
            </div>
            <form className="mt-2" onSubmit={onSubmit}>
                <p>Investment amount (£)</p>
                {error && <p className="alert alert-danger">{error}</p>}
                <div className="row">
                    <div className="col-md col-12 mb-2 mb-md-0">
                        <CurrencyFormat
                            className="border border-secondary text-right mr-2 py-3 px-3 col"
                            thousandSeparator={','}
                            decimalScale={0}
                            value={investmentAmount} onChange={(e) => onInvestmentChange(selectedLoan && selectedLoan.available, e.target.value)} />
                    </div>
                    <div className="col-md-auto col-12">
                        <button className="bg-warning text-uppercase border-0 px-5 py-3 col">Invest</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default InvestModal
