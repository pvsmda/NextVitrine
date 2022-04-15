import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1220px;
    margin: 48px auto;
    padding: 0 10px;
    @media only screen and (max-width: 725px) {
        & {
          justify-content: center;
          margin-top: 10px
        }
      }`

export const Logo = styled.img`
    width: 251px;
    height: 49px;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 725px) {
        & {
          justify-content: center;
        }
      }`

export const Li = styled.li`
    list-style: none;
`;

export const UlCard = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1220px;
    margin: 128px auto 0;
    padding: 0 10px;
    @media only screen and (max-width: 480px) {
        & {
            margin: 64px auto 0;;
        }
      }`

export const HeaderGit = styled.a`
    text-decoration: none;
    width: 168px;
    height: 62px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: var(--font-dm);
    color: var(--light);
    cursor: pointer;
    transition: 0.2s ease;
    font-size: 17px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.01em;
    &:hover {
        background-color: var(--dark-200);
        font-weight: bold;
    }
    @media only screen and (max-width: 484px) {
        & {
            margin-bottom: 5px;
            width: 248px;
        }
      }`

export const DesComunidade = styled.section`
    max-width: 1220px;
    margin: 90px auto 0;
    padding: 0 10px;
`;
export const SubTitulo = styled.h1`
    font-family: var(--font-ibm);
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--green);
    max-width: 812px;
`;

export const Titulo = styled.h2`
    font-family: var(--font-ibm);
    font-weight: 600;
    font-size: 64px;
    line-height: 130%;
    color: var(--light);
    margin-top: 12px;
    max-width: 812px;
    @media only screen and (max-width: 725px) {
        & {
            font-size: 48px;
        }
      }`

export const Texto = styled.p`
    font-family: var(--font-dm);
    font-weight: 500;
    font-size: 24px;
    line-height: 170%;
    color: var(--gray);
    margin-top: 32px;
    max-width: 812px;
    @media only screen and (max-width: 480px) {
        & {
            font-size: 20px;
        }
      }`

export const SecCards = styled.section``;

export const Footer = styled.footer`
    margin: 141px auto 48px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1220px;
    padding: 0 10px;
    @media only screen and (max-width: 480px) {
        & {
          justify-content: center;
          margin: 50px 0 25px 0;
          flex-direction: column;
          align-items: center;
        }
      }`

export const LogoP = styled.img`
    width: 50px;
    height: 46px;
`;

export const AutorDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 480px) {
        & {
          justify-content: center;
        }
      }`

export const Autor = styled.p`
    font-family: var(--font-ibm);
    font-size: 18px;
    color: var(--gray);
    margin-left: 48px;
    @media only screen and (max-width: 480px) {
        & {
          margin: 24px 0 0 0;
        }
      }`