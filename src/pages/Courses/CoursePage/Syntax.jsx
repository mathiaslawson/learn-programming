import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Syntax = ({ language }) => {
  return (
    <div>
      <div className='container mt-5' style={{ lineHeight: '2.4rem' }}>
        <h1>{language.name} Syntax</h1>
        <h2>{language.name} Syntax</h2>
        <p>{language.syntaxDescription}</p>
        
        {language.codeSnippets.map((snippet, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
            <CopyToClipboard text={snippet.code}>
              <button style={{ position: 'absolute', right: 0, top: 0, backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>Copy</button>
            </CopyToClipboard>
            <SyntaxHighlighter language={snippet.language || 'cpp'} style={vscDarkPlus}>
              {snippet.code}
            </SyntaxHighlighter>
            <h4>Result:</h4>
            <pre>{snippet.result}</pre>
            <h4>Example explained</h4>
            {snippet.explanation.map((explanation, index) => (
              <p key={index}>{explanation}</p>
            ))}
          </div>
        ))}

        <h2>Key Features of {language.name}</h2>
        <ul>
          {language.keyFeatures.map((feature, index) => (
            <li key={index}>
              <strong>{feature.title}</strong>: {feature.description}
            </li>
          ))}
        </ul>

        <h2>Applications of {language.name}</h2>
        <p>{language.applications}</p>

        <h2>Learning and Using {language.name}</h2>
        <p>{language.learningAndUsage}</p>

        <h2>Summary</h2>
        <p>{language.summary}</p>

        <h2>{language.name} Exercises</h2>
        <h3>Test Yourself With Exercises</h3>
        {language.exercises.map((exercise, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h4>Exercise:</h4>
            <p>{exercise.description}</p>
            <SyntaxHighlighter language={exercise.language || 'cpp'} style={vscDarkPlus}>
              {exercise.code}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syntax;
