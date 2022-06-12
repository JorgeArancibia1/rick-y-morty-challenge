import { BootstrapCard } from "../components/BootstrapCard";
import { Navbar } from "../components/Navbar"
import { useFetch } from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";
import { Container, Row } from 'react-bootstrap';
import { RenderList } from "../components/RenderList";

export const Home = () => {
  const { t } = useTranslation();

  const characters = useFetch('character');
  const locations = useFetch('location');
  const episodes = useFetch('episode');

  console.log('CHARACTERS => ', characters.results);
  console.log('LOCATIONS => ', locations.results);
  console.log('EPISODES => ', episodes.results);

  return (
    characters.loading ?
      <h1>Espere...</h1>
      :
      <>
        <Container>
          <div className="row">
            <Navbar />
          </div>
          {/* SEARCH INPUT */}
          <section className="">
            <h2>Characters</h2>
            <RenderList results={characters.results} />
          </section>

          <section className="">
            <h2>Locations</h2>
            <RenderList typeCard="location" results={locations.results} />
          </section>

          <h2>Episodes</h2>
          <section className="">
            <RenderList typeCard="episode" results={episodes.results} />
          </section>
          <footer className="container-flex-center-j my-5 ">
            <p>{t('footer.by')}<span>Jorge Arancibia</span></p>
          </footer>
        </Container>
      </>
  )
}
