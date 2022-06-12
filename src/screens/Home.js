import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar"
// import { useFetch } from "../hooks/useFetch.tsx";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  // const { loading, results } = useFetch();

  // console.log('Home Results =>', results);

  return (
    <div>
      <h1>hola</h1>
      <Navbar />
      <section className="">
        {/* {
          results.map(card => {
            return <Card {...card} key={card.id} />
          })
        } */}
      </section>
      <footer className="">
        <p>{t('footer.by')}<span>Jorge Arancibia</span></p>
      </footer>
    </div>
  )
}
