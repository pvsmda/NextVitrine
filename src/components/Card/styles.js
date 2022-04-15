import styled from "styled-components";

export const CardStyles = styled.li`
    margin-bottom: 26px;
    width: 49%;
    min-height: 500px;
    background: var(--dark-200);
    border: 1px solid var(--purple);
    border-radius: 8px;
    padding: 23px;
    display: flex;
    flex-direction: column;
    list-style: none;
    @media only screen and (max-width: 820px) {
        & {
            width: 100%;
        }
}`

export const Imagem = styled.img`
    width: 100%;
    height: 222px;
    margin: 0 auto;
    border-radius: 4px;
    object-fit: cover;
`;

export const TituloCard = styled.h3`
    font-family: var(--font-ibm);
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: var(--light);
    margin: 24px 0;
`;

export const Descricao = styled.p`
    font-family: var(--font-dm);
    font-weight: 500;
    font-size: 18px;
    line-height: 170%;
    color: var(--gray);
    flex: 1;
`;

export const DivButton = styled.div`
    display: flex;
    margin-top: 24px;
    @media only screen and (max-width: 420px) {
        & {
          flex-direction: column;
        }
      }
`