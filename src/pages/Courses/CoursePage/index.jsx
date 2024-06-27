import React, { useEffect, useState } from 'react'
import Intro from './Intro'
import {Lang, Syn} from '../../../data/index'
import { useParams } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Syntax from './Syntax';
import WhileLoop from './WhileLoop';
import Variables from './Variables';
import UserInput from './UserInput';
import Switch from './Switch';
import Strings from './Strings';
import Recursion from './Recursion';
import Output from './Output';
import Operators from './Operators';
import Math from './Math';
import Functions from './Functions';
import FunctionParameters from './FunctionParameters';
import ForLoop from './ForLoop';
import Enums from './Enums';
import DataTypes from './DataTypes';
import Conditions from './Conditions';
import Comments from './Comments';
import BreakContinue from './BreakContinue';
import Booleans from './Booleans';
import Arrays from './Arrays';

function Index() {

  const { language: paramLanguage, section } = useParams();

  console.log(encodeURIComponent(paramLanguage), "eyeyeye")

Lang.filter((language) => {
    encodeURIComponent(language.name) === encodeURIComponent(paramLanguage)
    console.log(language.name, 'not encoded')
    console.log(encodeURIComponent(language.name), "eyeyey")
  })

   const [module, setModule] = useState()



   console.log(section, 'from above')


   useEffect(()=>{
  
    if(section === "get") {
      setModule(Lang)
   } 

   if(section === "syntax") {
    
    console.log('happende')
    setModule(Syn)
 } 
 
   }, [section])


  return (
   <>
   {
    module?.filter((language) => encodeURIComponent(language.name) === encodeURIComponent(paramLanguage) || [])?.map((language, index) => (
     <>
    <Banner send_language={language.name}  />
    {
      section === "get" ? 
      <Intro  key={index} language={language} /> 
      :section === "syntax" ? <Syntax key={index} language={language} /> 
      :section === "arrays" ? <Arrays key={index} language={language} /> 
      :section === "booleans" ? <Booleans key={index} language={language} /> 
      :section === "breakcontinue" ? <BreakContinue key={index} language={language} /> 
      :section === "comments" ? <Comments key={index} language={language} /> 
      :section === "conditions" ? <Conditions key={index} language={language} /> 
      :section === "data-types" ? <DataTypes key={index} language={language} /> 
      :section === "enumns" ? <Enums key={index} language={language} /> 
      :section === "forloop" ? <ForLoop key={index} language={language} /> 
      :section === "functionparameters" ? <FunctionParameters key={index} language={language} /> 
      :section === "functions" ? <Functions key={index} language={language} /> 
      :section === "intro" ? <Intro key={index} language={language} /> 
      :section === "math" ? <Math key={index} language={language} /> 
      :section === "operators" ? <Operators key={index} language={language} /> 
      :section === "output" ? <Output key={index} language={language} /> 
      :section === "recursion" ? <Recursion key={index} language={language} /> 
      :section === "strings" ? <Strings key={index} language={language} /> 
      :section === "switch" ? <Switch key={index} language={language} /> 
      :section === "user-input" ? <UserInput key={index} language={language} /> 
      :section === "variables" ? <Variables key={index} language={language} /> 
      :section === "whileloop" ? <WhileLoop key={index} language={language} /> 
      :<Intro key={index} language={language} 
      />                                                                                                             
   }
     </>
   ))
   }
   </>
  )
}

export default Index