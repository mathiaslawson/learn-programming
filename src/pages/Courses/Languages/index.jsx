import { motion } from "framer-motion";
import { UserAuth } from "../../../context/AuthContext";
import MyCard from "../../../components/Card";

const Languages = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const languages = [
    { 
    title: "C++",
    img: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "HTML basic structures and tags",
    },
    
    { 
      title: "C#",
      img: "https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "Intermediate Concepts in HTML",
    },

    {title: "Godot Engine",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"}
  ,
    
   
  ];

  const ailanguages = [
    {title: "Python Essentials",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"},
    {title: "Python Torch",
    img: "https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"},
    {title: "Hugging Face Essentials",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"},
    {title: "Colab Essentials",
    img: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"},



   
  ];

  const backendlangs = [
   
    { 
      title: "Rust",
      img: "https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "Intermediate Concepts in HTML",
    },
    { 
      title: "Go Lang",
      img: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "HTML basic structures and tags",
      },
      

    {
      title: "JavaScript",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "Java",
  img: "https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in HTML"
}
  ,
    
   
  ];

  const frontendlangs = [
   
    {
      title: "HTML",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "CSS",
  img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in HTML"
}, 
    {
      title: "JavaScript",
    img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "Typesctipt",
  img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in HTML"
  }
  ,
    
   
  ];


  const mobilelangs = [
    {
      title: "React Native",
    img: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "Swift",
  img: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in HTML"
   }, 
  ];
  const section = [
    {
      name: "Game Development",
      img: "",
      language: languages,
    },
    {
      name: "AI & Maching Learning",
      img: "",
      language: ailanguages,
    },
    {
      name: "Backend Engineering",
      img: "",
      language: backendlangs,
    },
    {
      name: "Frontend Engineering",
      img: "",
      language: ailanguages,
    },
   
    {
      name: "Mobile Application Development",
      img: "",
      language: mobilelangs,
    },
   
   
  ];

  return (
    <>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
      <div style={{ color: "#585858" }}>
        <h1
          className="luckiest-guy-regular"
          style={{
            color: "#585858",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "1em",
          }}
        >
          HeLLO, {user?.displayName}
        </h1>

        <h1
          className="luckiest-guy-regular "
          style={{ justifyContent: "center", textAlign: "center", color: "#585858" }}
        >
          WHAT ARe we GOING TO LeARn TODAY?
        </h1>
      </div>

      <div className="d-flex justify-content-start mt-5 gap-3 p-4 flex-wrap">
        {section.map((a, key) => {
          return (
            <>
              <div className="mt-5">
                <div className="mx-3">
                  
                <h4
                    className="fw-bolder text-muted "
                    style={{ color: "red" }}
                  >
                    {a.name}{" "}
                  </h4>
                  <p className="text-muted" style={{letterSpacing: '1px', lineHeight: '28px'}}>
                Whether designing a sleek, user-friendly interface or building robust, scalable back-end systems, web development is essential for bringing the digital experience to life.
                  </p>
                </div>
             
                
                <div className="d-flex justify-content-start mt-5 gap-3 p-4 flex-wrap">
                  {a.language.map((a, key) => {
                    return (
                      <MyCard
          key={key.id}
          image={a.img}
          title={a.title}
          description={a.description}
          overlayText={a.overlayText}
        />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Languages;
