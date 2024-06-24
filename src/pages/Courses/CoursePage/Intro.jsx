import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Banner from '../../../components/Banner';

const Intro = ({ language }) => {


  console.log(language.name, 'this is the langiage name')


  return (

   

   <div>
     <div className='container mt-5' style={{lineHeight: '2.4rem'}}>
      <h1>Introduction to {language.name}</h1>
      <p>{language.introduction}</p>
      <h2>Key Features of {language.name}:</h2>
      <ul>
        {language.keyFeatures.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}</strong>: {feature.description}
          </li>
        ))}
      </ul>
      <h2>Applications of {language.name}:</h2>
      <p>{language.applications}</p>
      <h2>Learning and Using {language.name}:</h2>
      <p>{language.learningAndUsage}</p>
      <h2>Summary</h2>
      <p>{language.summary}</p>
      
      {language.codeSnippets.map((snippet, index) => (
        <div key={index} style={{ position: 'relative', marginBottom: '1rem' }}>
         <div className='mb-4'>
         <h3>{snippet.title}</h3>
          <CopyToClipboard text={snippet.code}>
            <button style={{ position: 'absolute', right: 0, top: 0,backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }} className=''>Copy</button>
          </CopyToClipboard>

         </div>

          <SyntaxHighlighter language="cpp" style={vscDarkPlus} >
            {snippet.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Intro;
