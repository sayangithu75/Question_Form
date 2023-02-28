import styled from 'styled-components'
import img from './img1.jpg';


export const Header = styled.h1`

color:#0dd614;
font-size:100px;

`

export const Style = styled.div`
    background-image:url(${img});
    background-size: contain;
    /* background-repeat:no-repeat;  */
    height:100vh;
    display: flex;
    
    justify-content: center;

`

export const Button = styled.button`
padding:15px;
border:2px solid black;
border-radius:25px;
margin-left:250px;
font-size:25px;
background-color:white;
&:hover{
    background-color:red;
    color:white;
}
`

