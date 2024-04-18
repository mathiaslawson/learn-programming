import { Button } from "reactstrap";
import books from "../../../assets/images/books.png";

function Row2() {
  return (
    <>
    
      <div
        className="d-flex"
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          backgroundColor: "#a282fd",
        }}
      >
        <div
          style={{ width: "1000px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <div className="text-end">
              <p
                className="main-header text-light text-center"
                style={{ fontSize: "3.5rem" }}
              >
                Your Learning <br />
                Lounge Chat, Choose,
                <br /> and Explore with AI
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-center text-light sub-header mt-5 px-5"
                style={{
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
                Step into your Learning Lounge where fun meets curiosity Chat
                with your AI pal or pick today’s subject. Ready, set, learn This
                compact description still captures the essence of an
                interactive, personalized educational experience, encouraging
                active participation and excitement about learning.
              </p>
            </div>

            <div
              className="text-center mx-5 mt-5"
              style={{ justifyContent: "center" }}
            >
              <Button
                className="px-5"
                style={{
                  color: "black",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  border: "none",
                  fontWeight: "500",
                }}
              >
                Chat with Giggle
              </Button>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }} className="d-flex justify-content-center">
          <p className="text-light">
            <img
              src={books}
              alt="build"
              width={"530"}
              style={{}}
              className="img-fluid"
            ></img>
          </p>
        </div>
      </div>
    </>
  );
}

export default Row2;
