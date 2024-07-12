import { useEffect } from "react";
import toy from "../../assets/images/toy.png";
import { Button } from "reactstrap";
// import { IoRemoveOutline } from "react-icons/io5";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/courses");
    }
  }, [user]);

  return (
    <div style={{ backgroundColor: "#0a141d" }} className="h-100">
      <div style={{ height: "auto", color: "white" }}>
        <div
          className="d-flex justify-content-around"
          style={{ height: "100svh", flexWrap: "wrap" }}
        >
         
          <div style={{ alignSelf: "center", width: "700px" }}>
            <h1
              className="main-header text-center"
              style={{ fontSize: "5rem" }}
            >
              Welcome <br /> to <br /> Surge Code
            </h1>
            <p className="sub-header text-center mt-5">
              Begin Your Journey with the Surge code system to enhance your
              coding skills
              <br />
            </p>

            {/* <div className="mt-5 text-center d-flex justify-content-center gap-2">
              <Button
                style={{
                  border: "2px solid #A282FD",
                  backgroundColor: "white",
                  color: "#A282FD",
                  borderRadius: "14px",
                  boxShadow: "0px 4px 1px gray ",
                }}
                className="px-4 fw-bolder"
              >
                Let&apos;s Learn
              </Button>
              <Button
                style={{
                  border: "2px solid white",
                  backgroundColor: "#A282FD",
                  color: "white",
                  borderRadius: "14px",
                  boxShadow: "0px 4px 3px #705AB4 ",
                }}
                className="px-4 fw-bolder py-2"
              >
                Register Now
              </Button>
            </div> */}

            {/* <div className="text-center sub-header mt-5 d-flex justify-content-center gap-2">
              <div>
                <IoRemoveOutline />
              </div>
              <div>OR</div>
              <div>
                <IoRemoveOutline />
              </div>
            </div> */}

            <div className="text-center mt-5">
              <Button
                onClick={handleGoogleSignIn}
                style={{
                  border: "2px solid #0a141d",
                  // backgroundColor: "white",
                  color: "#0a141d",
                  borderRadius: "14px",
                  boxShadow: "0px 4px 1px gray ",
                }}
                className="px-5 fw-bolder buttons-normal-invert btn-light"
                // onClick={() => {
                //   firebase.OAuthSignIn().then((user) => {
                //     console.log(user.email); // The user's email
                //   });
                // }}
              >
                Continue with Google
               
              </Button>
            </div>
          </div>
          {/* <div style={{ alignSelf: "end" }}>
            <img src={toy}></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Auth;
