import { SELECT_LOAN_TYPE, LOAD_LOAN_TYPE } from '../actions/typeLoan.action';
import { TypeLoan } from '../../interfaces/index';

export type TypeInitialState = {
    loanTypes: TypeLoan[],
    selected: string | null
}

type typeActions = {
    type: string,
    payload?: any
}

const initialState = {
    loanTypes: Array<TypeLoan>(),
    selected: null
}

export const LoanTypesReducer = (state: TypeInitialState = initialState, action: typeActions) => {
    switch (action.type) {
        case SELECT_LOAN_TYPE:
            return {
                ...state,
                selected: action.payload,
            };
        case LOAD_LOAN_TYPE:
            return {
                ...state,
                loanTypes: action.payload,
            };
        default:
            return state;
    }
}
