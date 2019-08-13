import { createContext, useContext } from 'react'

export const useLoansContext = () => useContext(LoansContext);

const LoansContext = createContext();

export default LoansContext;