import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import {BsTelephone, BsTelephoneFill} from 'react-icons/bs'

export const Nav = styled.nav`
    background: #111111;
    height: 5rem;
    margin-top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    -webkit-box-shadow: 0px 5px 10px 0px #000000; 
    box-shadow: 0px 5px 10px 0px #000000;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;

    @media screen and (max-width: 950px) {
        margin-left: 0;
    }
`

export const NavName = styled.span`
    display: none;
    
    @media screen and (max-width: 950px) {
        display: block;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        margin-left: auto;  
        margin-right: auto;
        left: 1.5rem;
        right: 0;
        top: 1.6rem;
        text-align: center;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 950px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.2rem;

    @media screen and (max-width: 950px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 5rem;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin: 0 10px;
    font-size: 1.15rem;

    &.active {
        border-bottom: 3px solid #75aff7;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 950px){
        display: none;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: #75aff7;
    white-space: nowrap;
    padding: 0.75rem 1.875rem;
    color: #010606;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 1.5rem;

    width: 8.8769375rem;
    height: 2.9375rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        font-size: 0.8rem;
        padding: 1.5rem;
        font-weight: normal;
    }
`

export const EmptyPhone = styled(BsTelephone)`
    font-size: 1rem;
    margin-right: 0.4rem;
`

export const FilledPhone = styled(BsTelephoneFill)`
    font-size: 0.8rem;
    margin-right: 0.3rem;
`
