import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from "react-scroll"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: #222222;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '98%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    color: white;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,5rem);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,4.5rem);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #75aff7;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled.a`
    display: flex;
    align-items: center;
    border-radius: 50px;
    background: #75aff7;
    white-space: nowrap;
    padding: 1rem 3.5rem;
    color: #010606;
    font-size: 18px;
    text-decoration: none;
    font-weight: 700;
    width: 200px;
    height: 55px;

    &:hover {
        background: #fff;
        color: #010606;
        font-size: 1rem;
        padding: 16px 34px;
    }
`
