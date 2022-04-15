import { LinkButton } from "./styles";

function ButtonConvite({ link, text }) {
  return (
    <>
      <LinkButton href={link} target="_blank">
        {text}
      </LinkButton>
    </>
  );
}

export default ButtonConvite;