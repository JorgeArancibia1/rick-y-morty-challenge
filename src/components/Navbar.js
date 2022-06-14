import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../redux/actions/authAction";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("en");

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  const handleLogout = () => {
    dispatch(startLogout());
    console.log('Logout');
  };

  return (
    <div className="container-nav flex-wrap">
      <div className="container-ptitle">
        <h1 className="principal-title text-bg-light">Rick & Morty</h1>
      </div>
      <div className="container-nav-out flex-wrap">
        <div className="navlist-container container-flex-center w100">
          <li className="nav-list pt-2 container-flex-center">
            <ul className="mr-3">
              <Link to="/"> {t("nav.home")} </Link>
            </ul>
            <ul className="min-about">
              <a href="https://jorgearancibia1.github.io/CV/">{t("nav.author")}</a>
            </ul>
          </li>
        </div>
      </div>
      <div className="container-translate-button container-flex-center w100 borde">
        <button className="button-translate p-2" onClick={onChangeLanguage}>
          {t("nav.button.translate")}
        </button>
        <button
          className="buttonout ml-3"
          type="button"
          onClick={handleLogout}
        >
          {t("nav.out")}
        </button>
      </div>
    </div>
  );
};
