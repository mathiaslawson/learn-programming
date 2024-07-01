import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Syntax = ({ data }) => {
  const {
    title,
    introduction,
    examples,
    newLines,
    escapeSequences
  } = data;

  return (
    <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
      <h2>{title}</h2>
      <p>{introduction}</p>

      {examples.map((example, index) => (
        <div key={index}>
          <h3>{example.title}</h3>
          <p>{example.description}</p>
          <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
            {example.code}
          </SyntaxHighlighter>
        </div>
      ))}

      <h3>{newLines.title}</h3>
      <p>{newLines.description}</p>

      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {newLines.code}
      </SyntaxHighlighter>

      <h3>{escapeSequences.title}</h3>
      <p>{escapeSequences.description}</p>

      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {escapeSequences.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Syntax;
