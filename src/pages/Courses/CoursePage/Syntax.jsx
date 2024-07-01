import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Syntax = ({ language }) => {


  const {
    name,
    syntaxDescription,
    codeSnippets,
    keyFeatures,
    applications,
    learningAndUsage,
    summary,
    exercises
  } = language;

  return (
    <div>
     <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
      <h1>Introduction to {name}</h1>
      <p>{syntaxDescription}</p>

      {codeSnippets?.map((snippet, index) => (
        <div key={index} style={{ position: 'relative', marginBottom: '1rem' }}>
          <h2>{snippet.title}</h2>
          <p>{snippet.description}</p>
          <CopyToClipboard text={snippet.code}>
            <button
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: '#1e1e1e',
                color: 'white',
                borderRadius: '10px'
              }}
              className=""
            >
              Copy
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="csharp" style={vscDarkPlus}>
            {snippet.code}
          </SyntaxHighlighter>
          <p><strong>Result:</strong> {snippet.result}</p>
          <ul>
            {snippet.explanation?.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Key Features of {name}:</h2>
      <ul>
        {keyFeatures?.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}</strong>: {feature.description}
          </li>
        ))}
      </ul>

      <h2>Applications of {name}:</h2>
      <p>{applications}</p>

      <h2>Learning and Using {name}:</h2>
      <p>{learningAndUsage}</p>

      <h2>Summary</h2>
      <p>{summary}</p>

      <h2>Exercises</h2>
      {exercises?.map((exercise, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p>{exercise.description}</p>
          <SyntaxHighlighter language="csharp" style={vscDarkPlus}>
            {exercise.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Syntax;
