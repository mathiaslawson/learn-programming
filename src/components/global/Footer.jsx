import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <>
      <div
        className=""
        style={{ backgroundColor: "#0a141d", color: "white", flexWrap: "wrap" , marginTop: '20px'}}        
      >

        <div style={{ width: "" }} className='text-center'>
        <img
                src={logo}
                width={"100px"}
              ></img>
        </div>

      </div>
    </>
  );
}

export default Footer;
