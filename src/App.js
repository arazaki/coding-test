import React, { useState } from 'react';
import LoansContext from './context/loans-context';
import CurrentLoansList from './components/CurrentLoansList';
import InvestModal from './components/InvestModal';
import Modal from 'react-modal';
import { decreaseAvailable, formatCurrency } from './helpers/index';

const App = (props) => {
  const [loans, setLoans] = useState(props.loans);
  const [selectedLoan, setSelectedLoan] = useState(undefined);
  const [investedLoans, setInvestedLoans] = useState([]);

  const onInvest = (item, investmentAmount) => {
    setLoans(loans.map((loan) => {
      if (loan.id === item.id) {
        return {
          ...loan,
          "available": formatCurrency(decreaseAvailable(item.available, investmentAmount))
        }
      }
      return loan
    }))
    handleInvestedLoans(item);
  }

  const handleSelectLoan = (loan) => {
    Modal.setAppElement('#root');
    setSelectedLoan(loan);
  }

  const handleClearSelectedLoan = () => {
    setSelectedLoan(undefined)
  }

  const handleInvestedLoans = (loan) => {
    setInvestedLoans([
      ...investedLoans,
      loan
    ])
  }

  return (
    <div className="container">
      <LoansContext.Provider value={
        {
          loans,
          selectedLoan,
          investedLoans,
          onInvest,
          handleSelectLoan,
          handleClearSelectedLoan
        }}>
        <CurrentLoansList />
        <InvestModal />
      </LoansContext.Provider>
    </div>
  );
}

App.defaultProps = {
  "loans": [
    {
      "id": "1",
      "title": "Voluptate et sed tempora qui quisquam.",
      "tranche": "A",
      "available": "11,959",
      "annualised_return": "8.60",
      "term_remaining": "864000",
      "ltv": "48.80",
      "amount": "85,754"
    },
    {
      "id": "5",
      "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
      "tranche": "B",
      "available": "31,405",
      "annualised_return": "7.10",
      "term_remaining": "1620000",
      "ltv": "48.80",
      "amount": "85,754"
    },
    {
      "id": "12",
      "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      "tranche": "C",
      "available": "12,359",
      "annualised_return": "4.80",
      "term_remaining": "879000",
      "ltv": "48.80",
      "amount": "85,754"
    }
  ]
}

export default App;
