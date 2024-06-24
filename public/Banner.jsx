import React from 'react'

function Banner() {
  return (
   <>
     <div style={{ color: "white" , backgroundColor: '#252b32', height: '40svh'}} className="p-4">
        <h1
          className="mt-5 fw-bolder"
          style={{
            color: "#fc787f",
            textAlign: "left",
            fontWeight: "500",
            // fontSize: "1em",
          }}
        >
         C++
        </h1>

        <h1
          className="fw-lighter"
          style={{ justifyContent: "center", textAlign: "left", color: "white" }}
        >
          Basic Concepts of C++ Programming
        </h1>
      </div>
   
   </>
  )
}

export default Banner