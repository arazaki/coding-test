import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../testUtils';
import CurrentLoansList from '../../components/CurrentLoansList';
import * as LoansContext from '../../context/loans-context';

const loans = [
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

describe('if there are no loans', () => {
    let wrapper;
    const contextValues = {
        loans: []
    }
    beforeEach(() => {
        jest
            .spyOn(LoansContext, 'useLoansContext')
            .mockImplementation(() => contextValues);
        wrapper = shallow(<CurrentLoansList />);
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-current-loans-list');
        expect(component.length).toBe(1);
    });
    test('renders no loans message', () => {
        const message = findByTestAttr(wrapper, 'no-loans-message');
        expect(message.length).toBe(1);
    });
});

describe('if there are loans', () => {
    let wrapper;
    const contextValues = {
        loans
    }
    beforeEach(() => {
        jest
            .spyOn(LoansContext, 'useLoansContext')
            .mockImplementation(() => contextValues);
        wrapper = shallow(<CurrentLoansList />);
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-current-loans-list');
        expect(component.length).toBe(1);
    });
    test('correct number of loan items', () => {
        const loansNodes = findByTestAttr(wrapper, 'current-loans-list-item');
        expect(loansNodes.length).toBe(loans.length);
    });
});