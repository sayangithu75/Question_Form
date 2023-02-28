import styled from 'styled-components'
import img from './img2.png';



export const Style = styled.div`

background-image:url(${img});
    background-size: cover;
    background-repeat:no-repeat; 
    background-attachment: fixed;
    overflow:scroll;
    height:100vh;
    display: flex;
    justify-content: center;
    color:black;

    font-size:25px;
    font-weight:bold;
    
    `

export const Button = styled.button`
padding:15px;
border:2px solid black;
border-radius:25px;
margin-left:250px;
font-size:25px;
 background-color:green;
color:white;
&:hover{
    background-color:red;
    color:white;
}
`


