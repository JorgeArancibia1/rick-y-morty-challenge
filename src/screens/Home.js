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

          <section className="cards-section pr-5 pl-5 container-flex-center-a container-flex-center-j flex-wrap ">
            <Row xs={1} md={4} className="g-4 flex-wrap">
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
