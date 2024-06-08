function Footer() {
  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center py-5 mt-5"
        style={{ backgroundColor: "#A282FD", color: "white", flexWrap: "wrap" }}
      >
        <div style={{ width: "200px" }}>
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/443a/d4f5/6ebb778fd03bfc31925a296b051b34fc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BuImSPhWQ94wxLXNQutsmN-1-bCvgBHPgK6aWkHBFugjCjSt7N5xGAq9zaQX2yjhcnThxw-kpB~K-3gvPOosVOamr5giLsHyB-DN7piodbUdqdUDQVo5gxN1iiNwTKBLB3PSeUV1dCfgTkBfK~CK5n3hCBbdk9QyO3XHzAWhh8IqXR9KROE4~r6ZjASbztcErwR6as1kEcJaofTDWEI98~dKfRZjm9PZriOOQiGcSk1NItKteV8JtgJYI7P7L~4BigkJGNYuYKLShronKML1ahRolMhWohqkgoQ-lB7vW8u5SNplPtjQ~DvNYl2~SITPFV4~N71x4FryGdbbWbACKg__"
                width={"280"}
              ></img>
              <div>
                <h5
                  className="main-header text-center"
                  style={{ color: "white", marginTop: "-50px" }}
                >
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
          </div>
        </div>

        <div style={{ flex: "1" }}>
          <div className="d-flex justify-content-around gap-3">
            <div>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                Terms of Use
              </p>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </p>
            </div>
            <div>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </p>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                About Us
              </p>
            </div>
            <div>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                Cookie
              </p>
              <p
                className="sub-header text-center"
                style={{ cursor: "pointer" }}
              >
                Newsletter Signup
              </p>
            </div>
          </div>
          <div className="text-center sub-header mt-5">
            &#9400; GIGGLE LEARN AI SYSTEM 2024
          </div>
          <div className="text-center sub-header mt-5">
            <p className="fw-lighter">
              All rights reserved. Reproduction in whole or part without
              permission is prohibited. Use of this site
              <br /> constitutes acceptance of our Terms of Service and Privacy
              Policy.
            </p>
          </div>
          <div className="text-center sub-header ">
            <p className=" fw-lighter">
              Happy Learning! Keep exploring and giggling with us at Giggle
              Learn. Remember, every day is a new adventure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
