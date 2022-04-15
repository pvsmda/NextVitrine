import styled from "styled-components";

export const LinkStyle = styled.a`
    text-decoration: none;
    margin-right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--green);
    border-radius: 4px;
    width: 165px;
    height: 42px;
    border: none;
    font-family: var(--font-dm);
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease;
    color: var(--black);
    &:hover {
        background: #01803a;
    }
    @media only screen and (max-width: 420px) {
        & {
          margin: 0 0 23px 0;
          width: 100%;
        }
      }`