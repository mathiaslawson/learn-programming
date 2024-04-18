import progress from "../../../assets/images/progress.png";
import ad from "../../../assets/images/adevnture.png";

function Row3() {
  return (
    <>
      <div className="mt-5 mb-5">
        <hr style={{ border: "1px solid black" }} />
      </div>

      <div className="d-flex align-items-center justify-content-around gap-0 mb-5">
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div>
            <img src={progress} width={"100"} className="p-1 text-center"></img>
          </div>

          <div>
            <div className="sub-header">My Learning Path</div>
            <div className="sub-header" style={{ fontWeight: "400" }}>
              Click here to see your personal journey through lessons <br />
              games, and quizzes you’ve started or completed
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div
            style={{
              backgroundColor: "#F1F1F1",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
          >
            <div>
              <img
                src={ad}
                width={"100"}
                className="p-1 text-center"
              ></img>
            </div>
          </div>

          <div>
            <div className="sub-header">Today’s Adventure</div>
            <div className="sub-header" style={{ fontWeight: "400" }}>
              Ready for a new challenge? Click here to get <br />
              your fun tasks for the day
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row3;
