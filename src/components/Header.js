import React from 'react'
import styled from "styled-components"
import headerStyles from "../components/header.module.css"
import { Link } from "gatsby"

const LogoImage = styled.img`
margin:0;
background-color:black;
padding:2px;
border-radius:5px;
align-items:left;
display: flex;
justify-content:left;
right:30rem;
position:relative;

@media (max-width: 1070px) {
   
    display: none;
  
}
`
const Header = () => {



    return (
        
        <div className={ headerStyles.headerContainer }>
        <Link 
              to="/">
           <LogoImage style={{position:'relative', }} src={"beba32x32.png"} alt="logo" />
            </Link>

        </div>
    )
}

export default Header
