import styled from "styled-components";

export const LinkButton = styled.a`
    text-decoration: none;
    margin-left: 32px;
    width: 248px;
    height: 62px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--purple);
    text-transform: uppercase;
    font-family: var(--font-dm);
    color: var(--light);
    background-color: transparent;
    cursor: pointer;
    transition: 0.2s ease;
    font-size: 15px;
    
    &:hover {
        background-color: var(--purple);
        font-weight: bold;
    }
    @media only screen and (max-width: 465px) {
        & {
          margin: 0;
        }
      }`