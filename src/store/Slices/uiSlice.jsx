import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todo: [],
    textModalka: ''
}

const uiSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTextToTrello(state,action){
            state.todo.push({
                todo: action.payload.value,
                id: action.payload.id,
                textarea: []
            })
        },
        addTextTotextarea(state,action){
            state.todo.find((el)=>el.id===action.payload.id).textarea.push({text:action.payload.text,textid:action.payload.textid})
        },
        textModal(state,action){
          state.textModalka = action.payload
          console.log(state.textModalka);
        }
    }
})

export const todoAction = uiSlice.actions
export default uiSlice