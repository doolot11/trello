import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registration: 'doolot@mail.kg',
    password: '12345',
    isRegisGmail: false,
    isRegisPassword: false
}

export const trelloSlice = createSlice({
    name: 'trello',
    initialState: initialState,
    reducers: {
        validationGmail(state, action) {
            let getmail = action.payload
            if (getmail !== state.registration) {
                state.isRegisGmail = true
            } else {
                state.isRegisGmail = false
            }
        },
        validationPass(state, action) {
            let getPassword = action.payload
            if (getPassword !== state.password) {
                state.isRegisPassword = true
            } else {
                state.isRegisPassword = false
            }
        },
    }
})

export const trelloAction = trelloSlice.actions
export default trelloSlice