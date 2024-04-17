import { Button } from "reactstrap";

function Row1() {
  return (
    <div className="mt-5">
      <div className="text-center main-header " style={{ marginTop: "7rem" }}>
        <h1 style={{ color: "#423F4C" }}>
          Adventure Academy Explore <br /> Learning with AI Buddies!
        </h1>
      </div>
      <div className="mt-5 text-center">
        <p className="sub-header">
          Unlock a World of Knowledge with Interactive Games, Quizzes, and AI
          Guides Tailored
          <br /> Just for You!
        </p>
      </div>

      <div className="mt-5 text-center d-flex justify-content-center gap-2">
        <Button
          style={{
            border: "2px solid #A282FD",
            backgroundColor: "white",
            color: "#A282FD",
            borderRadius: "14px",
            boxShadow: "0px 4px 1px #dbdbdb ",
          }}
          className="px-4 fw-bolder"
        >
          Let&apos;s Learn
        </Button>
        <Button
          style={{
            border: "2px solid #A282FD",
            backgroundColor: "#A282FD",
            color: "white",
            borderRadius: "14px",
            boxShadow: "0px 4px 3px #705AB4 ",
          }}
          className="px-4 fw-bolder py-2"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}

export default Row1;