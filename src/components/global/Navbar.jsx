import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Container fluid className="px-5">
        <div className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/443a/d4f5/6ebb778fd03bfc31925a296b051b34fc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BuImSPhWQ94wxLXNQutsmN-1-bCvgBHPgK6aWkHBFugjCjSt7N5xGAq9zaQX2yjhcnThxw-kpB~K-3gvPOosVOamr5giLsHyB-DN7piodbUdqdUDQVo5gxN1iiNwTKBLB3PSeUV1dCfgTkBfK~CK5n3hCBbdk9QyO3XHzAWhh8IqXR9KROE4~r6ZjASbztcErwR6as1kEcJaofTDWEI98~dKfRZjm9PZriOOQiGcSk1NItKteV8JtgJYI7P7L~4BigkJGNYuYKLShronKML1ahRolMhWohqkgoQ-lB7vW8u5SNplPtjQ~DvNYl2~SITPFV4~N71x4FryGdbbWbACKg__"
                  className="img-fluid"
                  width={"90"}
                ></img>
              </div>
              <div>
                <h5 className="main-header" style={{ color: "#705AB4" }}>
                  Giggle Learn
                </h5>
                <p
                  className="text-center fw-bolder"
                  style={{ fontSize: "0.6rem" }}
                >
                  AI SYSTEM
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
            <div className="d-flex justify-content-around gap-2 justify-content-lg-end gap-4 align-items-center">
              <p className="nav-links" type="submit">
                Subjects
              </p>
              <p className="nav-links" type="submit">
                Teams
              </p>
              <p className="nav-links" type="submit">
                Help
              </p>
              <p className="nav-links" type="submit">
                Subjects
              </p>
              <p className="nav-links" type="submit">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f5c0/3bf6/1e915a089bfdc1ad90cafbd4848e8357?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lfxr-I0DkWCOzy6kKd59~VH2wZi6BUaWRLXrf59G6KH2x9aGiHi1AyxAOSdrLt0OJBLWp2E7yGqUvdkfocN7vKd-gqil8PHO1IcE3N6QfbZUaD017KUJs3TalfdPsnZw2lMuyqmvgCAK3~NvVFdM1djnIQQkoeXAuu3UIrVUEniRDSNYyQr08ILJ5m12--7d1XvQh5pT3edZSATd45mQ6-uW22VXf7fRBAovptTU10UxoC~vV9pRl7FV~-fpI514~9T3AjsxG7-hzwlboOn48YmGRothds-hNqVBMNVKRtHSjBA7tksgFpd0CEOEJfHmzOq3gP0YEwYwvqt5SFxvRw__"
                  style={{
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                  }}
                  className="mx-2"
                ></img>
                EN
              </p>
              <Link to="/chat">
                <p className="nav-links" type="submit">
                  Login
                </p>
              </Link>
              {
                <Link to="/auth">
                  <p
                    className="nav-links p-1 px-4"
                    type="submit"
                    style={{
                      border: "2px solid #705AB4",
                      borderRadius: "10px",
                    }}
                  >
                    Sign Up
                  </p>
                </Link>
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
