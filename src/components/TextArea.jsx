import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../store/Slices/uiSlice';
import styled from 'styled-components';

const TextArea = (props) => {
    const dispatch = useDispatch()
    const [textarea, setTextarea] = useState('');

    function onChangeTextarea(e) {
        setTextarea(e.target.value)
    }

    function sendToStore() {
        if (textarea === '') return
        dispatch(todoAction.addTextTotextarea({
            text: textarea,
            textid: Math.random() * 100,
            id: props.id
        }))
        setTextarea('')
    }

    return (
        <Div key={props.id}>
            <textarea value={textarea} onChange={onChangeTextarea} name="" id="" cols="26" rows="2" placeholder='Ввести заголовок для этой карточки' ></textarea><br />
            <Button onClick={sendToStore}> Добавить карточку</Button>
        </Div>
    );
}

export default TextArea;

const Div = styled.span`
    display: inline-block;
`
const Button = styled.button`
    border: none;
    font-size: 15px;
    margin:  5px;
    background-color: #126bb4;
    color: white;
    height: 20px;
    margin: 2px 4px 5px 3px;
    cursor: pointer;
`
