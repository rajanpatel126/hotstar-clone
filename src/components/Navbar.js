import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <NAV>
        <LOGO>
            <img src='images/logo.svg' alt='Disney+' />
        </LOGO>
    </NAV>
  )
}

const NAV = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    background-color: #090b13;
    padding: 0 36px;
    letter-spacing: 16px;
    display: flex;
    z-index: 3;
`
const LOGO = styled.a`
    padding: 0;
    width: 90px;
    margin-top: 4px;
    max-height: 90px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`

export default Navbar