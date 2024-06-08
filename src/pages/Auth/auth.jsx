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
      navigate("/chat");
    }
  }, [user]);

  return (
    <div style={{ backgroundColor: "#a282fd" }} className="h-100">
      <div style={{ height: "auto", color: "white" }}>
        <div
          className="d-flex justify-content-around"
          style={{ height: "100svh", flexWrap: "wrap" }}
        >
          <div style={{ alignSelf: "start" }}>
            <img src="https://s3-alpha-sig.figma.com/img/6483/29ea/92580dbaaf7b5f9f9b8daf33a16fe597?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BH052dU3NFfaidyuVQX6Yk8L-6AoWMQq8VWjtEgXQFrEe0GNLYYis0V~CHWO8vEkYQ8nDTBkkV~iSSDl51u3TJuTVMUBt3dJS3m4xWG2GfhJy-Gg5JECEyEAAqQCq8bymQisxFv8jTXnSAEub~pBEgexkvsqkqgrl01s6j5oysziBnZNiImMHN~89goa3b6ZdJmGTIPYU-PKWs8sbYkATlK3kjeUV2-kjXeig4e1jGkidIG5h1aaBR0CJi4WNm5zROXvBkQ6qodmTRDz8ciGJHBBXbIgsA3j2FfsnLD7ECGK122cUYUYpgfoVAW8X5RiQaJXbysGkmiZVDCsCMQ0IA__"></img>
          </div>
          <div style={{ alignSelf: "center", width: "700px" }}>
            <h1
              className="main-header text-center"
              style={{ fontSize: "5rem" }}
            >
              Welcome <br /> to <br /> Giggle Learn
            </h1>
            <p className="sub-header text-center mt-5">
              Begin Your Journey with Giggle learn AI system to enhance your
              studying
              <br /> skills or continue your journey with giggle{" "}
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
                  border: "2px solid #A282FD",
                  // backgroundColor: "white",
                  color: "#A282FD",
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
                Continue with{" "}
                <img
                  src="https://s3-alpha-sig.figma.com/img/9358/a632/fe765206d076c18af39c815b3d7dc61f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QQi1L0rm0KBzwcSZ-bMWCDXQUCKJartIWKFlTMGimVRpZdle9Yt1V1JDUCmNRJpGSlPx-grrHG9uyZ1nYBLvIKIL~adWy426xQ7Fddfcnz8VFrVyb5slbUHKq0nJ9KgfmlK6xh6IXtGTi2XvD~X~w1neN4m~ffFlgZJGukKxC87OuKPwpqDCXz0t5kO7gRxB16C3ghe3GWseaddukSfRduW2Q2JNGYC7bBWA08Y4ohrfSGWJf14mWtZo93Mz-YRxozZFH~1t4xLtL2eVwkFbrUwZyPN0y~IcytpCs7KwmuRNomcC0hLhqX7HCoPXEH4u~sgCbUCgmLCyaPqe-wyXnw__"
                  alt="google"
                  width={"20"}
                  className="mx-2"
                ></img>
              </Button>
            </div>
          </div>
          <div style={{ alignSelf: "end" }}>
            <img src={toy}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
