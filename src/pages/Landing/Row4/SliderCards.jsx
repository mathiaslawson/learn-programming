import { Button } from "reactstrap";
import Science from "../../../assets/images/science.png";

function SliderCards() {
  return (
    <>
      <div className="d-flex gap-2">
        <div
          className="mt"
          style={{
            width: "490px",
            backgroundColor: "#a282fd",
            borderRadius: "20px",
            flexDirection: "row",
          }}
        >
          <div style={{ marginTop: "0rem" }} className="text-center">
            <img
              src={Science}
              className=""
              style={{
                width: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                // marginTop: "14px",
              }}
            ></img>
          </div>

          <div className="p-3 py-4" style={{ marginTop: "0rem" }}>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "50px",
              }}
            >
              <p className="main-header py-3 px-3">START YOUR QUEST</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCards;
