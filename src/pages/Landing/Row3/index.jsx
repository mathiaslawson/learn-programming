import progress from "../../../assets/images/progress.png";
import ad from "../../../assets/images/adevnture.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Row3() {
  return (
    <>
      <div className="mt-5 mb-5 px-5">
        <hr style={{ border: "1px solid black", marginTop: "8rem" }} />
      </div>

      <div
        className="d-flex align-items-center justify-content-around gap-0 mb-5"
        style={{ flexWrap: "wrap" }}
      >
        <div
          className="d-flex align-items-center justify-content-center gap-3"
          style={{ width: "500px" }}
        >
          <div>
            <img src={progress} width={"100"} className="p-1 text-center"></img>
          </div>

          <div>
            <div className="sub-header">My Learning Path</div>
            <div className="sub-header" style={{ fontWeight: "400" }}>
              Click here to see your personal journey through lessons games, and
              quizzes you’ve started or completed
            </div>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center gap-3"
          style={{ width: "500px" }}
        >
          <div>
            <img src={ad} width={"100"} className="p-1 text-center"></img>
          </div>

          <div>
            <div className="sub-header">Today’s Adventure</div>
            <div className="sub-header" style={{ fontWeight: "400" }}>
              Ready for a new challenge? Click here to get your fun tasks for
              the day
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5" style={{ marginTop: "12rem" }}>
        <div
          className="d-flex justify-content-around"
          style={{ flexWrap: "wrap" }}
        >
          <div className="text-center" style={{ width: "500px" }}>
            <p
              className="main-header text-center"
              style={{ fontSize: "5rem", color: "#423F4C" }}
            >
              Video <br /> Voyage ,Dive <br /> Into Learning <br /> Adventures
            </p>

            <div className="mt-5 d-flex justify-content-center gap-5">
              <div>
                <FaArrowLeft
                  className=""
                  style={{ fontSize: "3rem", color: "#CFCED1" }}
                />
              </div>
              <div>
                <FaArrowRight
                  className=""
                  style={{ fontSize: "3rem", color: "#CFCED1" }}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "500px" }}>d</div>
        </div>
      </div>
    </>
  );
}

export default Row3;
