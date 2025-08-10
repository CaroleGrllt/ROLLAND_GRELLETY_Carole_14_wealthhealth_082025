import { ADD_FAIL, ADD_SUCCESS } from "../actions/employee.action"

const initialState = {
    employees: [], 
    error: null,
}

export default function employeeReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_SUCCESS:
            return {
                ...state,
                employees: [
                    ...state.employees,
                    {
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        birthDate: action.payload.birthDate,
                        street: action.payload.street,
                        city: action.payload.city,
                        zip: action.payload.zip,
                        selectedState: action.payload.selectedState,
                        startDate: action.payload.startDate,
                        selectedDepartment: action.payload.selectedDepartment,
                    }
                ],
                error: null,
            }        
            case ADD_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};