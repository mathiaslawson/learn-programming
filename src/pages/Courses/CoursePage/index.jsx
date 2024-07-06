import React, { useEffect, useState } from 'react';
import { Lang, Syn } from '../../../data/index';
import { useParams } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Intro from './Intro';
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
import Out from '../../../data/output';
import { createClient } from 'contentful';
import { fetchEntry } from '../../../data/ContentfullData';

function Index() {
  const { language: paramLanguage, section } = useParams();
  const [module, setModule] = useState([]);




  const [data,setData] = useState([])


  useEffect(() => {

    const fetchData = async (id) => {
       const data = await fetchEntry(`${id === 'get' ? '2qen7rTXJuUV6QCTK5qgAu' : id === "syntax" ?  '7FpDCIfAysW7CzJtb2JKap' : id === "output" ? "2LIDIGI27Dn2jzk8A6y9Bt" : id === 'comments' ? "5ZRs5jrRpc97a6esOCG2t3" : id === 'variables' ? "2qen7rTXJuUV6QCTK5qgAu" : ""}`);
      setData(data)
      setModule(data);
    }


    if (section === "get") {
      fetchData("get");    
    } else if (section === "syntax") {
      fetchData("syntax");
    } else if (section === "output") {
      fetchData("output");
    }else if (section === "comments") {
      fetchData("comments"); 
    } else if (section === "variables") {
      fetchData("variables"); 
    }


  }, [section, data]);

  return (
    <>
      {module
        .filter(language => encodeURIComponent(language.name) === encodeURIComponent(paramLanguage))
        .map((language, index) => (
          <React.Fragment key={index}>
            <Banner send_language={language.name} />
            {renderComponent(section, language)}
          </React.Fragment>
        ))}
    </>
  );
}

function renderComponent(section, language) {

 


  const components = {
    get: <Intro language={language} />,
    syntax: <Syntax language={language} />,
    arrays: <Arrays language={language} />,
    booleans: <Booleans language={language} />,
    breakcontinue: <BreakContinue language={language} />,
    comments: <Comments language={language} />,
    conditions: <Conditions language={language} />,
    'data-types': <DataTypes language={language} />,
    enums: <Enums language={language} />,
    forloop: <ForLoop language={language} />,
    functionparameters: <FunctionParameters language={language} />,
    functions: <Functions language={language} />,
    intro: <Intro language={language} />,
    math: <Math language={language} />,
    operators: <Operators language={language} />,
    output: <Output language={language} />,
    recursion: <Recursion language={language} />,
    strings: <Strings language={language} />,
    switch: <Switch language={language} />,
    'user-input': <UserInput language={language} />,
    variables: <Variables language={language} />,
    whileloop: <WhileLoop language={language} />,
  };

  return components[section] || <Intro language={language} />;
}

export default Index;
