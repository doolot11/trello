import styled from "styled-components"
import MiniToDo from "./MiniToDo"
import { useSelector } from "react-redux/es/exports"
import { Link } from "react-router-dom"
import { useState } from "react"
import RenderList from "./RenderList"
import backgroundProfile from '../assets/backgroundProfile.jpg'
import search from '../assets/searchIcon.png'

const YourProfile = () => {
    const [add, setAdd] = useState(false);
    const { todo } = useSelector(state => state.todo)

    function addToDo() {
        setAdd(prev => !prev)
    }

    return (
        <div >
            <Header>
                <select name="" id="">
                    <option value="">Monday</option>
                </select>
                <select name="" id="">
                    <option value="">Tuesday</option>
                </select>
                <select name="" id="">
                    <option value="">Wednesday</option>
                </select>
                <select name="" id="">
                    <option value="">Thursday</option>
                </select>
                <select name="" id="">
                    <option value="">Friday</option>
                </select>
                <select name="" id="">
                    <option value="">Saturday</option>
                </select>
                <select name="" id="">
                    <option value="">Sunday</option>
                </select>
                <Input type="text" placeholder="Search..." /><img src={search} alt="" width='22px' />
            </Header>
            <Link to='/'><Span className="go">go out</Span></Link>
      <DivBody>
            {todo.map((el) => {
                return <RenderList key={el.id} todo={el.todo} id={el.id} textarea={el.textarea} />
            })}
            {add && <MiniToDo /> || <Button onClick={addToDo}>+ Добавьте еще одну колонку</Button>}
      </DivBody>
        </div>
    )
}
export default YourProfile

const Input = styled.input`
    font-size: 20px;
    margin-left: 500px;
    width: 140px;
    height: 20px;
    background-color: #fff;
    outline: none !important;
    border: none;
`
const Span = styled.span`
    position: absolute;
    right: 60px;
    top: 90px;
    height: 40px;
    width: 90px;
    background-color: #6ca5d4;
    color: white;
    border-radius: 5px;
    z-index: 1;
    font-size: 30px;
    padding-left: 10px;
`
const Button = styled.button`
    width: 205px;
    height: 30px;
    border: none;
    opacity: 0.7;
    color: #fff;
    background-color: #000000;
    margin: 10px 0 0 10px;
`
const DivBody = styled.div`
    display: flex;
    justify-content: flex-start;
    background-image: url(${backgroundProfile});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    background-attachment: fixed;
`
const Header = styled.header`
    display: flex;
    height: 50px;
    width: 100%;
    background-color: #6ca5d4;
    align-items: center;
    margin: 0;
    select{
        background-color: #6ca5d4;
        border: none;
        font-weight: bold;
        color: white;
        width: auto;
        margin-right: 10px;
    }
`

