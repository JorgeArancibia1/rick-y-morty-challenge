import { BootstrapCard } from "../components/Card";
import { Navbar } from "../components/Navbar"
import { useFetch } from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";
import { Container, Row } from 'react-bootstrap';

export const Home = () => {
  const { t } = useTranslation();

  const { loading, results } = useFetch();

  console.log('Home Results =>', loading);

  return (
    loading ?
      <h1>Espere...</h1>
      :
      <>
        <Container>
          <div className="row">
            <Navbar />
          </div>
          <h2>Characters</h2>
          <section className="cards-section pr-5 pl-5">
            <Row xs={1} md={4} className="g-4 d-flex flex-nowrap">
              {
                results.map(card => {
                  return <BootstrapCard {...card} key={card.id} />
                })
              }
            </Row>
          </section>

          <h2>Locations</h2>
          <section className="cards-section pr-5 pl-5">
            <Row xs={1} md={4} className="g-4 d-flex flex-nowrap">
              {
                results.map(card => {
                  return <BootstrapCard {...card} key={card.id} />
                })
              }
            </Row>
          </section>

          <h2>Episodes</h2>
          <section className="cards-section pr-5 pl-5">
            <Row xs={1} md={4} className="g-4 d-flex flex-nowrap">
              {
                results.map(card => {
                  return <BootstrapCard {...card} key={card.id} />
                })
              }
            </Row>
          </section>
          <footer className="container-flex-center-j my-5 ">
            <p>{t('footer.by')}<span>Jorge Arancibia</span></p>
          </footer>
        </Container>
      </>
  )
}
