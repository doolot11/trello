import React from 'react';
import styled from 'styled-components';
import bunner from '../assets/bacgrLog.jpg'
import iconTrello from '../assets/icontrello.png'
import google from '../assets/google.png'
import microsoft from '../assets/microsoft.png'
import facebook from '../assets/facebook.png'
import { trelloAction } from '../store/Slices/trellaSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistrationToTrello = () => {
    const { isRegisGmail, isRegisPassword } = useSelector(state => state.trello)
    const dispatch = useDispatch()

    function getValueGmail(e) {
        dispatch(trelloAction.validationGmail(e.target.value))
    }
    function getValuePassword(e) {
        dispatch(trelloAction.validationPass(e.target.value))
    }

    return (
        <>
            <Wrapper>
                <Form >
                    <H1><img src={iconTrello} alt="" width="25px" /> TRELLO</H1>
                    <Input border1={isRegisGmail} onChange={getValueGmail} placeholder='Write your gmail'/>
                    {isRegisGmail && <P first='145px' wrong={isRegisGmail}>Sorry write this gmail (doolot@mail.kg)</P>}
                    <Input1 border2={isRegisPassword} onChange={getValuePassword} placeholder="Write your password" />
                    {isRegisPassword && <P first='215px' wrong={isRegisGmail}>Sorry write number (12345)</P>}
                    <Link to='/reg'><Button variant="contained">Enter</Button></Link>
                    <SingUpWithOther><Img src={google} alt="" width="25px" />Войти через Google</SingUpWithOther>
                    <SingUpWithOther><Img src={microsoft} alt="" width="25px" /> Войти через Microsoft</SingUpWithOther>
                    <SingUpWithOther><Img src={facebook} alt="" width="25px" />   Войти через Facebook</SingUpWithOther>
                </Form>
            </Wrapper>
        </>
    );
}

export default RegistrationToTrello;

const P = styled.p`
    text-align: center;
    color: ${props => props.wrong ? 'red' : ''};
    position: absolute;
    top: ${(props) => props.first};
    left: 85px;
`
const Img = styled.img`
    margin-right: 10px;
`
const SingUpWithOther = styled.div`
    width: 350px;
    height: 40px;
    margin-left: 25px;
    box-shadow: 0px 1px 4px 0px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`
const H1 = styled.h1`
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color: #5757D8;
     text-align: center;
`
const Form = styled.form`
     margin: auto;
     display: flex;
     flex-direction: column;
     width: 400px;
     height: 500px;
     background-color: white;
     border-radius: 10px;
     position: relative;
     button{
     margin-top: 50px;
     margin-bottom: 40px;
     width: 300px;
     margin-left: 50px;
     height: 40px;
     font-weight: 900;
     }
`
const Input = styled.input`
     background-color: white;
     margin-top: 30px;
     height: 40px;
     width: 350px;
     margin-left: 23px;
     outline: none !important;
     border: 1px solid ${props => props.border1 ? "red" : "black"};
`
const Input1 = styled.input`
     background-color: white;
     margin-top: 30px;
     height: 40px;
     width: 350px;
     margin-left: 25px;
     outline: none !important;
     border: 1px solid ${props => props.border2 ? "red" : "black"};

`
const Wrapper = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    background-image: url(${bunner});
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
`