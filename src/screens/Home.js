import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar"
import { useFetch } from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const { loading, results } = useFetch();

  console.log('Home Results =>', loading);

  return (
    loading ?
      <h1>Espere...</h1>
      :
      <>
        <div className="container">
          <div className="row">
            <Navbar />
          </div>

          <section className="cards-section pr-5 pl-5 container-flex-center-a container-flex-center-j flex-wrap ">
            <div className="row">
              {
                results.map(card => {
                  return <Card {...card} key={card.id} />
                })
              }
            </div>
          </section>
          <footer className="container-flex-center-j my-5 ">
            <p>{t('footer.by')}<span>Jorge Arancibia</span></p>
          </footer>
        </div>
      </>
  )
}
