import { useState } from "react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";

const ButtonDiv = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 20px;
font-weight: 600;
transition: 0.5s;
  
`

const open = keyframes`
  from {
    opacity: 0;
    height: 0px;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    height: 100px;
    transform: translateY(0px);
  }
`;


const NavbarContainer = ({className}) => {

    const [isOpen, setIsOpen] = useState(false)
    

    return(
        <div className={className} >
           <ButtonDiv>
           <div>
            <p>Меню</p>
           </div>
           <i className={isOpen? 'fa fa-caret-up ': 'fa fa-caret-down'} onClick={() => setIsOpen(!isOpen)}></i>
           </ButtonDiv>
          <ul className={isOpen? 'active' : 'unactive'}>
            <li><Link to={'/'}>Главная</Link></li>
            <li><Link to={'/favorites'}>Избранное</Link></li>
          </ul>
        </div>
    )
}

export const Navbar = styled(NavbarContainer)`

position: absolute;
left: 20px;
width: 150px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: end;
height:35px;
background: #fffdf0;
border-radius: 10px;
border: 2px solid #ffd700;
color: black;
box-shadow: 0 4px 12px rgba(0,0,0,0.06);
& ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 20px;
        margin-top: 20px;
        font-size: 20px;
        background: #fffdf0;
        padding: 10px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        border: 2px solid #ffd700;
    }
  & i{
  font-size: 35px;
  margin-right: 20px;
  color: black;
  
  }

  & a{
    text-decoration: none;
    color: black;
  }    

 & .active {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 20px;
        animation: ${open} 0.5s ease-in-out;
        font-size: 20px;
        background: #fffdf0;
        padding: 10px 20px;
        border-radius: 10px;
        
    }
  & .unactive {
        display: none;
       
        
  }             
`