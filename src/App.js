import Card from "./components/Card";
import ButtonConvite from "./components/ButtonHeader";
import { GlobalStyles } from "./styles/globalstyles";
import {
  Autor,
  AutorDiv,
  DesComunidade,
  Footer,
  Header,
  HeaderGit,
  Li,
  Logo,
  LogoP,
  SecCards,
  SubTitulo,
  Texto,
  Titulo,
  Ul,
  UlCard,
} from "./styles/styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Logo src="./images/logo.webp" alt="Codelândia" />
        <nav>
          <Ul>
            <Li><HeaderGit href="https://github.com/pvsmda" target="_blank">meu github</HeaderGit> </Li>
            <Li><ButtonConvite link="https://discord.gg/wNCWTVuxyz" text="entrar na comunidade" target="_blank" /></Li>
          </Ul>
        </nav>
      </Header>
      <DesComunidade>
        <SubTitulo>comunidade dev</SubTitulo>
        <Titulo>Projetos da comunidade Codelândia</Titulo>
        <Texto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec felis ligula, accumsan nec cursus in, eleifend sit
          amet dui.
        </Texto>
      </DesComunidade>
      <SecCards>
        <UlCard>
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/print_Blog.png"}
            titulo="Blog"
            descricao="Página criada durante o desafio 01 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Blog/"}
            link2={"https://github.com/pvsmda/Blog"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/Chiiro.png"}
            titulo="Studio Ghibli"
            descricao="Página criada durante o desafio 05 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Desafio05-Codelandia/"}
            link2={"https://github.com/pvsmda/Desafio05-Codelandia"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/print_OnePage.png"}
            titulo="Landing Page"
            descricao="Página criada durante o desafio 03 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/LandingPageCodelandia/"}
            link2={"https://github.com/pvsmda/LandingPageCodelandia"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/Rachi2.png"}
            titulo="Rachi"
            descricao="Página criada durante o desafio 19 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Rachi/"}
            link2={"https://github.com/pvsmda/Rachi"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/LaPizza2.png"}
            titulo="La Pizza"
            descricao="Página criada durante o desafio 12 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/LaPizza/"}
            link2={"https://github.com/pvsmda/LaPizza"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/Kenai.png"}
            titulo="Kenai"
            descricao="Página criada durante o desafio 17 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Desafio17-Codelandia/"}
            link2={"https://github.com/pvsmda/Desafio17-Codelandia"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/portifolio.png"}
            titulo="Portfólio"
            descricao="Página criada durante o desafio 9 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Portifolio/"}
            link2={"https://github.com/pvsmda/Portifolio"}
          />
          <Card
            src={"https://pvsmda.github.io/VitrineCodelandia/assets/xBox.png"}
            titulo="xBox"
            descricao="Página criada durante o desafio 21 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/desafio21Codelandia/"}
            link2={"https://github.com/pvsmda/desafio21Codelandia"}
          />
          <Card
            src={"https://camo.githubusercontent.com/0d14b46c60b0d02aeac7bdd7a8fd132ce34d818e11d7f60d84a0105c6d79f5d8/68747470733a2f2f696b2e696d6167656b69742e696f2f7a71787968367533796c7a2f56616c6f72616e742f56616c6f72616e745f3253554d685161514e3171712e6a70673f696b2d73646b2d76657273696f6e3d6a6176617363726970742d312e342e33267570646174656441743d31363436393438373435333532"}
            titulo="Valorant"
            descricao="Página criada durante o desafio 07 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/VALORANT/"}
            link2={"https://github.com/pvsmda/VALORANT"}
          />
          <Card
            src={"https://camo.githubusercontent.com/54f11fbde3edaaff5f65d77e0f40f89605621fdc444b5e4ecb69a3ad609cdb7f/68747470733a2f2f696b2e696d6167656b69742e696f2f7a71787968367533796c7a2f436f64654d6f6a692f436f64656d6f6a695f55797139446e3233782e6a70673f696b2d73646b2d76657273696f6e3d6a6176617363726970742d312e342e33267570646174656441743d31363438393330343132313531"}
            titulo="Code Emoji"
            descricao="Página criada durante o desafio 08 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Desafio-08/"}
            link2={"https://github.com/pvsmda/Desafio-08"}
          />
          <Card
            src={"https://camo.githubusercontent.com/fd90e3afd15898cbf1d33bb7917353ce5f6f89b97f0aa4ed3000daf120bcfec6/68747470733a2f2f696b2e696d6167656b69742e696f2f7a71787968367533796c7a2f4c6f6b692f4c6f6b695f6a4473506d334658702e6a70673f696b2d73646b2d76657273696f6e3d6a6176617363726970742d312e342e33267570646174656441743d31363436353137393838343339"}
            titulo="Loki"
            descricao="Página criada durante o desafio 06 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Desafio06/"}
            link2={"https://github.com/pvsmda/Desafio06"}
          />
          <Card
            src={"https://camo.githubusercontent.com/d573713606dbc516bb8ba125701dcb330de907c7a60ff6a04ef400667574588c/68747470733a2f2f696b2e696d6167656b69742e696f2f7a71787968367533796c7a2f4c6f67696e2f4c6f67696e5f2d4c4a4e66786f5f5a2e6a70673f696b2d73646b2d76657273696f6e3d6a6176617363726970742d312e342e33267570646174656441743d31363434333332343339353335"}
            titulo="Tela de Login"
            descricao="Página criada durante o desafio 04 da comunidade Codelândia e com o intuito de praticar HTML e CSS."
            link1={"https://pvsmda.github.io/Desafio04/"}
            link2={"https://github.com/pvsmda/Desafio04"}
          />
        </UlCard>
      </SecCards>
      <Footer>
        <LogoP src="./images/logoP.webp" alt="Codelândia" />
        <AutorDiv>
          <Autor> © - 2022 - Paulo Victor </Autor>
          <Autor>Codelândia</Autor>
        </AutorDiv>
      </Footer>
    </>
  );
}

export default App;