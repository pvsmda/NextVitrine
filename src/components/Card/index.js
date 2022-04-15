import { CardStyles, Imagem, TituloCard, Descricao, DivButton } from "./styles";
import ButtonGreen from "../ButtonGreen";
import ButtonTransparent from "../ButtonTransparent";

function Card({ src, titulo, descricao, link1, link2 }) {
  return (
    <>
      <CardStyles>
        <Imagem src={src} alt={titulo} />
        <TituloCard>{titulo}</TituloCard>
        <Descricao>{descricao}</Descricao>
        <DivButton>
          <ButtonGreen link={link1} text="demo" />
          <ButtonTransparent link={link2} text="github" />
        </DivButton>
      </CardStyles>
    </>
  );
}

export default Card;