import styled from "styled-components";

export const CompetencesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 70rem;
    justify-content: center;
    align-items: center;
    background: #111111;

    @media screen and (max-width: 880px) {
        height: 72rem;
    }
    @media screen and (max-width: 640px) {
        height: 70rem;
    }
`

export const CompetencesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 0 3.125rem;

    @media screen and (max-width: 1218px) {
        max-width: 90%;
    }
    @media screen and (max-width: 1000px) {
        max-width: 100%;
        padding: 0;
    }
`

export const Additionnal = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 0 3.125rem;
`

export const CompetencesCard = styled.div`
    background: #fff;
    border-radius: 10px;
    width: 90%;
    max-width: 96%;
    height: fit-content;
    padding: 2rem;
    margin-left: 2%;

    @media screen and (max-width:750px) {
        max-width: 97%;
        margin-left: 1.5%;
    }
`

export const CompetencesIcon = styled.img`
    height: 9rem;
    width: 9rem;
    margin: 0 auto 10px;

    @media screen and (max-width:815px) {
        height: 7rem;
        width: 7rem;
    }
    @media screen and (max-width:674px) {
        height: 6rem;
        width: 6rem;
    }
`

export const CompetencesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.6rem;
    }


    @media screen and (max-width: 380px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`

export const CompetencesH2 = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 405px) {
        font-size: 1rem;
    }
`

export const CompetencesH3 = styled.h3`
    font-size: 1.1rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 405px) {
        font-size: 0.9rem;
    }
`

export const CompetencesP = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    text-align: left;
    line-height: 1.2;

    @media screen and (max-width:732px) {
        font-size: 0.95rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.9rem;
    }
`
