import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../testUtils';
import CurrentLoansListItem from '../../components/CurrentLoansListItem';
import * as LoansContext from '../../context/loans-context';

const loan = {
    "id": "1",
    "title": "Voluptate et sed tempora qui quisquam.",
    "tranche": "A",
    "available": "11,959",
    "annualised_return": "8.60",
    "term_remaining": "864000",
    "ltv": "48.80",
    "amount": "85,754"
}

const contextValues = {
    loans: [],
    investedLoans: [],
    handleSelectLoan: jest.fn()
}

/**
 * Creates a ShallowWrapper for the CurrentLoansListItem component
 * @function setup
 * @param {object} props - component props 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    return shallow(<CurrentLoansListItem {...props} />)
};

let wrapper

beforeEach(() => {
    jest
        .spyOn(LoansContext, 'useLoansContext')
        .mockImplementation(() => contextValues);
    wrapper = setup({ loan });
});

test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-current-loans-list-item');
    expect(component.length).toBe(1);
});