import React from 'react';
import { shallow } from 'enzyme';
import ReactModal from 'react-modal';
import { findByTestAttr } from '../testUtils';
import InvestModal from '../../components/InvestModal';
import * as LoansContext from '../../context/loans-context';

let wrapper;
const contextValues = {
    loans: []
}
beforeEach(() => {
    jest
        .spyOn(LoansContext, 'useLoansContext')
        .mockImplementation(() => contextValues);
    wrapper = shallow(<InvestModal />);
});
test('modal is closed', () => {
    const component = findByTestAttr(wrapper, 'invest-modal-button');
    component.simulate('click');
    expect(wrapper.find(ReactModal).prop('isOpen')).toEqual(false);
});