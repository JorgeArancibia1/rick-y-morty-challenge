import { useFetch } from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";
import { Container, Row } from 'react-bootstrap';
import { RenderList } from "../components/RenderList";

export const Home = () => {
  const { t } = useTranslation();

  const characters = useFetch('character');
  const locations = useFetch('location');
  const episodes = useFetch('episode');

  return (
    characters.loading ?
      <h1>Espere...</h1>
      :
      <>
        <Container>
          {/* SEARCH INPUT */}
          <h2>Characters</h2>
          <Row className="row mt-2 scroll">
            <RenderList results={characters.results} />
          </Row>

          <Row className="scroll">
            <h2>Locations</h2>
            <RenderList typeCard="location" results={locations.results} />
          </Row>

          <h2>Episodes</h2>
          <Row className="scroll">
            <RenderList typeCard="episode" results={episodes.results} />
          </Row>
          <footer className="container-flex-center-j my-5 ">
            <p>{t('footer.by')}<span>Jorge Arancibia</span></p>
          </footer>
        </Container>
      </>
  )
}
