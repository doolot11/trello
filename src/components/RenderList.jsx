import React, { useState } from 'react';
import TextArea from './TextArea';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Text1 from './Text';
import { useSelector } from 'react-redux';
import описание from '../assets/описание.jpg'
import blocknot from '../assets/blocknot.png'

const RenderList = (props) => {
    const { textModalka } = useSelector(state => state.todo)
    const [addText, setAddText] = useState(false);
    const [modal, setModal] = useState(false)
    console.log(textModalka);

    function modalka() {
        setModal(prev => !prev)
    }

    function addtext() {
        setAddText(prev => !prev)
    }

    { props.textarea.map((el) => el) }
    return (
        <>
            {modal && ReactDOM.createPortal(<Modalka>
                <button onClick={modalka}> close </button>
                <span>
                    <span> <img src={blocknot} alt="" width="15px" /> {textModalka}</span>
                    <h6>в калонке To Do</h6>
                    <span><img src={описание} alt="" width='15px' />Описание</span>
                    <textarea placeholder='Добавить более подробное описание...' name="" id="" cols="35" rows="3"></textarea>
                    <button>Сохранить</button><span></span>
                </span>
            </Modalka>, document.getElementById('overlay-bag'))}
            {modal && ReactDOM.createPortal(<Overlay></Overlay>, document.getElementById('overlay'))}
            <Div>
                <Span >{props.todo}</Span>
                {props.textarea.map((el) => {
                    return <Text1 onClick={modalka} text={el.text} key={el.id} />
                })}
                {addText && <TextArea key={props.id} id={props.id} /> || <Button onClick={addtext}><span>➕</span> Добавить карточку</Button>}
            </Div>
        </>
    );
}

export default RenderList;

const Modalka = styled.div`
    background-color: white;
    position: fixed;
    height: 250px;
    width: 400px;
    margin: 10% 0 0 30%;
    border-radius: 5px;
    button{
        border-radius: 5px;
        border: none;
        font-size: 20px;
        margin:  5px;
        background-color: #126bb4;
        color: white;
        height: 30px;
        cursor: pointer;
        position: absolute;
        right: 25px;
        top: 20px;
    }
    span{
       display: flex;
       flex-direction: column;
       margin: 15px 0 0 15px;
       span{
        display: flexbox;
        font-size: 22px;
        margin-left: 0;
        img{
            margin-right: 5px;
        }
           }
           button{
        margin-top: 190px;
        margin-right: 250px;
    }
    }
    h6{
        margin: 3px 0 0 20px;
        color: grey
    }
    textarea{
        margin: 20px 30px 0 0 ;
    }
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`
const Button = styled.button`
    border: none;
    font-size: 15px;
    background-color: white;
    margin:  5px;
    span{
        font-size: 8px;
    }
`
const Span = styled.span`
    width: 217px;
    margin: 4px 0 5px 6px;
    font-size: 20px;
    display: flex;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    margin-bottom: auto;
    background-color: white;
    border-radius: 3px;
`
