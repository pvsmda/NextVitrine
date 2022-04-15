import { LinkStyle } from "./styles";

function ButtonTransparent({ link, text }) {
  return (
    <>
      <LinkStyle href={link} target="_blank">
        {text}
      </LinkStyle>
    </>
  );
}

export default ButtonTransparent;