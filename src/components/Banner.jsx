import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Banner({send_language}) {


  const { language, section  } = useParams();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };


  const handleSectionChange = (newSection) => {
   
    const currentUrl = window.location.pathname;
   
    const urlParts = currentUrl.split('/');
  
    urlParts[urlParts.length - 1] = newSection;
   
    const newUrl = urlParts.join('/');
   
    navigate(newUrl);
  };

  const links = [
    { name: "Getting Started", set: "get" },
    { name: "Syntax", set: "syntax" },
    { name: "Output", set: "output" },
    { name: "Comments", set: "comments" },
    { name: "Variables", set: "variables" },
    { name: "User Input", set: "user-input" },
    { name: "Data Types", set: "data-types" },
    { name: "Operators", set: "operators" },
    { name: "Strings", set: "strings" },
    { name: "Math", set: "math" },
    { name: "Booleans", set: "booleans" },
    { name: "Conditions", set: "conditions" },
    { name: "Switch", set: "switch" },
  ]


  return (
   <>
     <div style={{ color: "white" , backgroundColor: '#0a141d', height: '40svh'}} className="p-4">
        
        <div className='container'>
        <div style={{cursor: "pointer"}} onClick={handleGoBack}>
        <FaArrowLeft />
        </div>
        <h1
          className="mt-5 fw-bolder"
          style={{
            color: "#fc787f",
            textAlign: "left",
            fontWeight: "500",
            // fontSize: "1em",
          }}
        >
         {send_language}
        </h1>

        <h1
          className="fw-lighter"
          style={{ justifyContent: "center", textAlign: "left", color: "white" }}
        >
          Basic Concepts of {send_language} Programming
        </h1>


        <div className='d-flex justify-content-between align-items-center mt-5'>
           {
            links?.map((link) => (
              <div
                key={link.name}
                className="btn btn-outline-light"
                style={{ color: section === link.set ? "#1e1e1e" : "white", backgroundColor: section === link.set ? "#fc787f" : "#1e1e1e", border: "none", fontSize: "1em", padding: "0.5em 1em", borderRadius: '30px' }}
                onClick={() => {
                  handleSectionChange(link.set)
                  // window.location.reload()
                }}
              >
                {link.name}
              </div>
            ))
           }
           
          
            
        </div>
        </div>


      
      </div>
   
   </>
  )
}

export default Banner