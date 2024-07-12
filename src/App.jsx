import { BrowserRouter as Router } from "react-router-dom";
import LayoutWrapper from "./layout";
import AllRoutes from "./layout/Rotues";
import { AuthContextProvider } from "./context/AuthContext";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  document.body.style.backgroundColor = "#f0f0f0"; 


  


  return (
    <>
      <Router>
        <AuthContextProvider>
          {/* <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("fr")}>DE</button> */}
          <LayoutWrapper allroutes={AllRoutes} />
          {/* <div>{t("welcome_msg")}</div> */}
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
