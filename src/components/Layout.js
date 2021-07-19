import React, { useState } from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import "../styles/style.css"
import styled from "styled-components"
import navStyles from "../components/layout.module.css"
import SEO from "./SEO"


const MenuIcon = styled.button`
  outline: 0;
  position: fixed;
  flex-direction: column;
  justify-content: space-around;
  top: 1rem;
  left: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #f1f1f1,
    #e3e3e3,
    #d5d5d5,
    #c7c7c7
  );
  border: 2px solid black;
  border-radius: 50%;
  animation: menuButton 1s ease;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 99999;
  :hover {
    outline: 0;
    background-color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
    transition: color 0.5s, 0.21s linear;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  /*layer impportant to click!! the menu button*/
  .firstLine, .thirdLine {
    width: 1.5rem;
    height: 0.23rem;
    background: black;
    border-radius: 5px;
    transform-origin: 3px;
    margin: 1px;
  }

.secondLine{
  width: 1.5rem;
    height: 0.23rem;
    background: var(--color-main);
    border-radius: 5px;
    transform-origin: 3px;
    margin: 1px;

}


  @media (min-width: 1070px) {
    display: none;
  }
`


const MobileMenu = styled.nav`

  background-color: #eee;
  height: 100vh;
  width: 100%;
  z-index: 5;
  overflow-x: hidden; /* Disable horizontal scroll */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease-in;

  li {
    margin-bottom: 3rem;
    list-style: none;
  }

  a {
    list-style: none;
    text-decoration: none;
    font-size: 3rem;
    color:  rgb(247, 141, 54);
  }
  a:hover, a:focus {
    color:green;
  }

  @media (min-width: 1070px) {
    display: none;
  }
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1.5rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const [nav, showNav] = useState(false)

  return (
    <>
      <SEO />
      <div className={navStyles.mainContainer}>
        <div className={navStyles.articleContainer}>
          <Header />
          <MenuIcon onClick={() => showNav(!nav)}>
            <div className={'firstLine'}></div>
            <div className={'secondLine'}></div>
            <div className={'thirdLine'}></div>
          </MenuIcon>

          <MobileMenu  nav={nav}>
            <ul>

              <li style={{  lineHeight:`1.0`}}>
                <Link to="/">Home</Link>
              </li>

              <li style={{  lineHeight:`1.0`}}>
                <Link to="/about">About</Link>
              </li>

              <li style={{  lineHeight:`1.0`}}>
                <Link to="/contact">Contact</Link>
              </li>

              <li style={{  lineHeight:`1.0`}}>
                <Link to="/thingtodo">Todo</Link>
                </li>

                  <li style={{ lineHeight:`1.0`}}>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
              </MobileMenu> 
            
            
          
          
      

          <nav style={{ marginBottom: `1.5rem` }}>
           
            <ul
              className={navStyles.navContainer}
              style={{ listStyle: `none`, float: `right` }}
            >
              <ListLink className={navStyles.navText} to="/">
                Home
              </ListLink>
              <ListLink className={navStyles.navLink} to="/about/">
                About
              </ListLink>
              <ListLink className={navStyles.navLink} to="/contact/">
                Contact
              </ListLink>
              <ListLink className={navStyles.navLink} to="/thingtodo/">
                Todo
              </ListLink>
              <ListLink className={navStyles.navLink} to="/blog/">
                Blog
              </ListLink>
            </ul>
          </nav>

          {children}
           
        </div>
       <Footer />
      </div>
    </>
  )
}
