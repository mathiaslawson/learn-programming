import { motion } from "framer-motion";
import { UserAuth } from "../../context/AuthContext";

const Chat = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
      <div style={{ color: "#A282FD" }}>
        <h1
          className="luckiest-guy-regular"
          style={{
            color: "#A282FD",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "1em",
          }}
        >
          HeLLO, {user?.displayName}
        </h1>

        <h1
          className="luckiest-guy-regular "
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          WHAT ARe we GOING TO LeARn TODAY?
        </h1>
        <div>
          <div className="d-flex luckiest-guy-regular">
            <img
              style={{
                width: "300px",
                height: "350px",
                paddingBottom: "100px",
                marginTop: -59,
                marginLeft: 0,
                textAlign: "center",
              }}
              src="https://s3-alpha-sig.figma.com/img/6483/29ea/92580dbaaf7b5f9f9b8daf33a16fe597?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BH052dU3NFfaidyuVQX6Yk8L-6AoWMQq8VWjtEgXQFrEe0GNLYYis0V~CHWO8vEkYQ8nDTBkkV~iSSDl51u3TJuTVMUBt3dJS3m4xWG2GfhJy-Gg5JECEyEAAqQCq8bymQisxFv8jTXnSAEub~pBEgexkvsqkqgrl01s6j5oysziBnZNiImMHN~89goa3b6ZdJmGTIPYU-PKWs8sbYkATlK3kjeUV2-kjXeig4e1jGkidIG5h1aaBR0CJi4WNm5zROXvBkQ6qodmTRDz8ciGJHBBXbIgsA3j2FfsnLD7ECGK122cUYUYpgfoVAW8X5RiQaJXbysGkmiZVDCsCMQ0IA__"
            />
          </div>
          <motion.div
            className="luckiest-guy-regular"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 15,
              textAlign: "center",
              marginTop: "-15rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#A282FDB8",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "white",
                borderRadius: "40px",
                width: "20rem",
                height: "25rem",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              <h1 className="">TALK WITH GIGGLe</h1>
            </div>
            <div
              style={{
                background: "#D3119C",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "white",
                borderRadius: "40px",
                width: "20rem",
                height: "25rem",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              <h1>
                ADDITIOn <br /> AnD <br />
                SUBSTRACTIOn
              </h1>
            </div>
            <div
              style={{
                background: "#E241B4E0",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "white",
                borderRadius: "40px",
                width: "20rem",
                height: "25rem",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              <h1>
                LeARn ABOUT <br />
                THe eARTH
              </h1>
            </div>
          </motion.div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 30px",
          }}
        >
          <div className="" style={{ marginLeft: "20rem" }}>
            <input
              className="input-length luckiest-guy-regular"
              placeholder="Type"
              type="text"
              style={{
                justifyContent: "center",
                border: "2px solid gray",
                paddingTop: "12px",
                backgroundColor: "white",
                color: "#808080",
                borderRadius: "14px",
                boxShadow: "0px 4px 1px #808080 ",
                outline: "none",
                fontSize: "20px",
                lineHeight: "40px",
                columnWidth: "300rem",
              }}
            />
          </div>
          <img
            style={{ width: "300px", height: "350px", marginTop: -70 }}
            src="https://s3-alpha-sig.figma.com/img/6483/29ea/92580dbaaf7b5f9f9b8daf33a16fe597?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BH052dU3NFfaidyuVQX6Yk8L-6AoWMQq8VWjtEgXQFrEe0GNLYYis0V~CHWO8vEkYQ8nDTBkkV~iSSDl51u3TJuTVMUBt3dJS3m4xWG2GfhJy-Gg5JECEyEAAqQCq8bymQisxFv8jTXnSAEub~pBEgexkvsqkqgrl01s6j5oysziBnZNiImMHN~89goa3b6ZdJmGTIPYU-PKWs8sbYkATlK3kjeUV2-kjXeig4e1jGkidIG5h1aaBR0CJi4WNm5zROXvBkQ6qodmTRDz8ciGJHBBXbIgsA3j2FfsnLD7ECGK122cUYUYpgfoVAW8X5RiQaJXbysGkmiZVDCsCMQ0IA__"
          />
        </div>
      </div>
      <div className="relative">
        <motion.div
          className=""
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          style={{
            background:
              "radial-gradient(56.67% 56.67% at 34.17% 31.67%, rgba(162, 130, 253, 0.72) 0%, #8066CD 100%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            position: "absolute",
            top: "13rem",
            right: "13rem",
          }}
        >
          <h1></h1>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          style={{
            background:
              "radial-gradient(56.67% 56.67% at 34.17% 31.67%, rgba(226, 65, 180, 0.31) 0%, #D3119C 100%",
            width: "140px",
            height: "150px",
            borderRadius: "50%",
            position: "absolute",
            top: "13rem",
            left: "25rem",
          }}
        >
          <h1></h1>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          style={{
            background:
              "radial-gradient(56.67% 56.67% at 34.17% 31.67%, rgba(226, 65, 180, 0.31) 0%, #D3119C 100%",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            position: "absolute",
            top: "42rem",
            left: "27rem",
          }}
        >
          <h1></h1>
        </motion.div>
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          style={{
            background:
              "radial-gradient(56.67% 56.67% at 34.17% 31.67%, rgba(162, 130, 253, 0.72) 0%, #8066CD 100%",
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            position: "absolute",
            top: "43rem",
            right: "26rem",
          }}
        >
          <h1></h1>
        </motion.div>
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className="hidden d-sm-none d-lg-block"
          style={{
            background:
              "radial-gradient(56.67% 56.67% at 34.17% 31.67%, rgba(162, 130, 253, 0.72) 0%, #8066CD 100%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            position: "absolute",
            top: "43rem",
            left: "-5rem",
          }}
        >
          <h1></h1>
        </motion.div>
      </div>
    </>
  );
};

export default Chat;
