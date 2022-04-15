import styled from "styled-components";

export const LinkStyle = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 4px;
    width: 165px;
    height: 42px;
    font-family: var(--font-dm);
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid var(--green);
    color: var(--light);
    transition: 0.2s ease;
    
    &:hover {
        background: var(--dark);
    }
    
    @media only screen and (max-width: 420px) {
        & {
          width: 100%;
          margin: 0;
        }
}`