import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../store/Slices/uiSlice';
import pen from '../assets/pen.png'

const Text1 = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todoAction.textModal(props.text))
    }, [])

    return (
        <Text onClick={props.onClick}>
            <span> <span>{props.text}</span> <img src={pen} alt="" width='15px' /></span>
        </Text>
    );
}

export default Text1;

const Text = styled.div`
    border: none;
    padding-left: 5px;
    border-radius: 5px;
    margin: 3px 4px 4px 4px;
    width: 212px;
    height: 25px;
    box-shadow: 1px 1px 4px 1px #bebebe;
    span{
       display: flex;
       justify-content: space-between;
       padding-right: 5px;
       padding-top: 2px;
    }
`
