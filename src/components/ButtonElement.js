import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary? '#75aff7' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 3rem' : '0.75rem 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '1rem')};
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary? '#fff' : '#75aff7')};
    }
`