import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../../assets/images/logo.png'

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Container fluid className="px-5" style={{backgroundColor: '#0a141d'}}>
        <div className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <div>
                <img
                 src={logo}
                  className="img-fluid"
                  width={"90"}
                ></img>
              </div>
              <div>
                <h5 className="main-header" style={{ color: "gold" }}>
                  {"Surge Learn"}
                </h5>
                <p
                  className="text-center fw-bolder"
                  style={{ fontSize: "0.6rem", color: "white" }}
                >
                  {"Learn to Code"}
                </p>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0 "></div>
         
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
