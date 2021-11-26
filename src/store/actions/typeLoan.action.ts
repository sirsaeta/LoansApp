import { TypeLoan } from "../../interfaces";

export const SELECT_LOAN_TYPE = 'SELECT_LOAN_TYPE';
export const LOAD_LOAN_TYPE = 'LOAD_LOAN_TYPE';

export const selectLoanType = (value: string) => ({
  type: SELECT_LOAN_TYPE,
  payload: value,
});

export const loadLoanTypes = (value: TypeLoan[]) => ({
  type: LOAD_LOAN_TYPE,
  payload: value,
});