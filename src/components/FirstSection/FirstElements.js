import styled from "styled-components";
import {MdKeyboardArrowDown, MdArrowDownward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.5;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.5;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroTitle = styled.h2`
    position: relative;
    top: -3rem;
    color: #fff;
    font-size: 2.2rem;
    text-align: center;

    @media screen and (max-width: 950px) {
        display: none
    }
`

export const HeroH3 = styled.h3`
    position: relative;
    top: -3rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;

    margin-bottom: 3rem;

    @media screen and (max-width: 950px) {
        display: none
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-family: 'Parisienne', cursive;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const HeroP = styled.p`
    margin-top: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowDownward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`