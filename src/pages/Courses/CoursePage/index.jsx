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

function Index() {
  const { language: paramLanguage, section } = useParams();
  const [module, setModule] = useState([]);

  useEffect(() => {
    if (section === "get") {
      setModule(Lang);
    } else if (section === "syntax") {
      setModule(Syn);
    } else if (section === "output") {
      setModule(Out); 
    }
  }, [section]);

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
