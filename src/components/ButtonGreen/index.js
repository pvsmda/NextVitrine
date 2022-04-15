import { LinkStyle } from "./styles";

function ButtonGreen({ link, text }) {
  return (
    <>
      <LinkStyle href={link} target="_blank">
        {text}
      </LinkStyle>
    </>
  );
}

export default ButtonGreen;