import { motion } from "framer-motion";
import { UserAuth } from "../../../context/AuthContext";
import MyCard from "../../../components/Card";
import { Link } from "react-router-dom";
import './Lang.css'

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
    img: "https://media.istockphoto.com/id/1419479750/vector/abstract-orange-and-red-gradient-geometric-shape-circle-background-modern-futuristic.jpg?s=612x612&w=0&k=20&c=lsgkc_BO1sL7ZmJOxr_LN8_hLQPa5Fh6w_1EXsISZYA=" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "HTML basic structures and tags",
    },
    
    { 
      title: "C#",
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/217/276/small/banner-background-colorful-bright-orange-gradation-wave-effect-vector.jpg" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "Intermediate Concepts in HTML",
    },

  //   {title: "Godot  (GD Script)",
  //   img: "https://static.vecteezy.com/system/resources/thumbnails/020/544/792/small_2x/gradient-orange-waves-background-fluid-gradient-shapes-composition-vector.jpg" , 
  //   description: "HTML structures web pages with essential elements. Start here to build web content.", 
  //   overlayText: "Advanced Concepts in HTML"}
  // ,
    
   
  ];

  // const ailanguages = [
  //   {title: "Python",
  //   img: "https://www.freewebheaders.com/gc-abstract-1600x400/thumbs/thumbs_colorful-polygon-shapes-abstract-geometric-vector-banner_gc-banner-1600x400.png" , 
  //   description: "HTML structures web pages with essential elements. Start here to build web content.", 
  //   overlayText: "Advanced Concepts in Pytihon"},
  // ];

  const backendlangs = [
   
    { 
      title: "Rust",
      img: "https://www.publicdomainpictures.net/pictures/390000/nahled/abstrakt-banner-hintergrund-rot.jpg" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "Intermediate Concepts in HTML",
    },
    // { 
    //   title: "GoLang",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWienfCpRK78PZjounWtT4ZpdGRaSeqpdwCNG_WRVLLFtUf_7iVGGzfUJOU56o6VVQgXo&usqp=CAU" , 
    //   description: "HTML structures web pages with essential elements. Start here to build web content.", 
    //   overlayText: "HTML basic structures and tags",
    //   },
      

    {
      title: "JavaScript",
    img: "https://as2.ftcdn.net/v2/jpg/03/29/47/95/1000_F_329479537_ZYwx3KzKAHdMxzy7XwBgHpEbP3X7UnHt.jpg" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "Java",
  img: "https://t3.ftcdn.net/jpg/05/23/16/50/360_F_523165015_dveIG8642m9Ue79gPgm01Lrc4hiukHQ5.jpg" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in Java"
},
{
  title: "TypeScript",
img: "https://as1.ftcdn.net/v2/jpg/03/02/82/72/1000_F_302827252_65eDX6NrRofbFgIraWjq4bq4r4Y8HMeE.jpg" , 
description: "HTML structures web pages with essential elements. Start here to build web content.", 
overlayText: "Advanced Concepts in TS"
}
  ,
  { 
    title: "C++",
    img: "https://media.istockphoto.com/id/1419479750/vector/abstract-orange-and-red-gradient-geometric-shape-circle-background-modern-futuristic.jpg?s=612x612&w=0&k=20&c=lsgkc_BO1sL7ZmJOxr_LN8_hLQPa5Fh6w_1EXsISZYA=" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "HTML basic structures and tags",
    },
    
    { 
      title: "C#",
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/217/276/small/banner-background-colorful-bright-orange-gradation-wave-effect-vector.jpg" , 
      description: "HTML structures web pages with essential elements. Start here to build web content.", 
      overlayText: "Intermediate Concepts in HTML",
    },
    
   
  ];

  const frontendlangs = [
  
    {
      title: "JavaScript",
    img: "https://as2.ftcdn.net/v2/jpg/05/25/23/67/1000_F_525236770_TGLxvQPcXP1CeuPKYHHzBMrfSfLBFRiC.jpg" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in JS"
  }, 
  {
    title: "TypeScript",
  img: "https://as1.ftcdn.net/v2/jpg/03/02/82/72/1000_F_302827252_65eDX6NrRofbFgIraWjq4bq4r4Y8HMeE.jpg" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in TS"
  }
  ,
    
   
  ];


  const mobilelangs = [
    {
      title: "React Native",
    img: "https://img.freepik.com/premium-vector/modern-blue-abstract-background-banner-modern-light-blue-abstract-banner-design-background_181182-28913.jpg" , 
    description: "HTML structures web pages with essential elements. Start here to build web content.", 
    overlayText: "Advanced Concepts in HTML"
  }, 
  {
    title: "Swift",
  img: "https://t3.ftcdn.net/jpg/05/23/16/50/360_F_523165015_dveIG8642m9Ue79gPgm01Lrc4hiukHQ5.jpg" , 
  description: "HTML structures web pages with essential elements. Start here to build web content.", 
  overlayText: "Advanced Concepts in HTML"
   }, 
  ];
  const section = [
    {
      name: "Backend Engineering",
      img: "",
      language: backendlangs,
      des: "   Whether designing a sleek, user-friendly interface or building robust, scalable back-end systems, web development is essential for bringing the digital experience to life."
    },
    {
      name: "Game Development",
      img: "",
      language: languages,
      des: "Whether you’re crafting an immersive, user-friendly game interface or developing robust, scalable systems for seamless gameplay, game development is the cornerstone of bringing interactive digital worlds to life."
    },
    {
      name: "Frontend Engineering",
      img: "",
      language: frontendlangs,
      des: "Crafting user-friendly web interfaces that look great and work flawlessly"
    },
    // {
    //   name: "AI & Maching Learning",
    //   img: "",
    //   language: ailanguages,
    // },
   
  
   
    // {
    //   name: "Mobile Application Development",
    //   img: "",
    //   language: frontendlangs,
    // },
   
   
  ];

  return (
    <>
      {/* <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button> */}
      <div style={{ color: "white" , backgroundColor: '#0a141d', height: '40svh'}} className="p-4">
        <h1
          className="luckiest-guy-regular mt-5"
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "1em",
          }}
        >
          HeLLO, <span style={{color: '#fc787f'}}>{user?.displayName}</span>
        </h1>

        <h1
          className="luckiest-guy-regular "
          style={{ justifyContent: "center", textAlign: "center", color: "white" }}
        >
          WHAT ARe we GOING TO LeARn TODAY?
        </h1>
      </div>

      <div className="">
        {section.map((a, key) => {
          return (
            <>
              <div className="mt-5">
                <div className="mx-3 mt-5">
                  
                <h4
                    className="fw-bolder text-muted mt-5"
                    style={{ color: "white" }}
                  >
                    {a.name}{" "}
                  </h4>
                  <p className="text-muted" style={{letterSpacing: '0.2px', lineHeight: '28px', color: 'white'}}> 
                  {a.des}
                  </p>
                </div>
             
                <div className="grid-container">
      {a.language.map((item, index) => (
        <div className="grid-item" key={item.id || index}>
          <MyCard
            image={item.img}
            title={item.title}
            description={item.description}
            overlayText={item.overlayText}
          />
        </div>
      ))}
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
