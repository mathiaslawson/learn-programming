import { Button } from "reactstrap";
import Translate from "../../../Hooks/Internalization";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/globe.png';

function Row1() {
  return (
    <div className="mt-5" style={{ height: "auto" }}>
      <div className="text-center main-header " style={{ marginTop: "7rem" }}>
        <h1 style={{ color: "#423F4C" }}>
         <Translate key={"welcome_msg"} />
        </h1>
      </div>
      <div className="mt-5 text-center">
        <p className="sub-header">
        Learn Code the Right way, the fun way. 
          <br /> Just for You!
        </p>
      </div>

      <div className="mt-5 text-center d-flex justify-content-center gap-2">
        <Link to="/auth">
        <Button
          style={{
            border: "2px solid #0a141d",
            backgroundColor: "white",
            color: "#0a141d",
            borderRadius: "14px",
            boxShadow: "0px 4px 1px #0a141d ",
          }}
          className="px-4 fw-bolder"
        >
          Let&apos;s Learn
        </Button>
        </Link>
      
      </div>

      <div className="mt-5 text-center d-flex justify-content-center">
        <img src={logo} alt="Your image" style={{ width: '100%', maxWidth: '800px' }} />
      </div>
    </div>
  );
}

export default Row1;
