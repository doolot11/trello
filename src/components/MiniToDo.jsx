import { useDispatch } from "react-redux/es/exports"
import { useState } from "react"
import { todoAction } from "../store/Slices/uiSlice"
import styled from "styled-components"

const MiniToDo = (props) => {
    const [value, setvalue] = useState('')
    const dispatch = useDispatch()

    function onChangeHandler(event) {
        const text = event.target.value
        setvalue(text)
    }
    function addText(e) {
        e.preventDefault()
        if (value === '') return
        dispatch(todoAction.addTextToTrello({
            value: value,
            id: Math.random() * 100
        }))
        setvalue('')
    }

    return (
        <Span>
            <Input value={value} type="text" onChange={onChangeHandler} placeholder='TODO' />
            <Button onClick={addText} >Добавить список</Button>
            <Spanx>X</Spanx>
        </Span>
    )
}
export default MiniToDo

const Spanx = styled.span`
    cursor: pointer;
`
const Button = styled.button`
    background-color: #126bb4;
    border: none;
    color: white;
    height: 20px;
    margin: 2px 4px 2px 3px;
    cursor: pointer;
`
const Input = styled.input`
    width: 205px;
    height: 25px;
    margin: 2px;
    outline-color: #126bb4;
`
const Span = styled.span`
    margin: 10px 0 0 10px;
    width: 218px;
    height: 60px;
    background-color: white;
    border-radius: 3px;
`
