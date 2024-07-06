import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const codeSamples = [
  {
    title: 'Single-line Comment Before Code',
    code: `// This is a comment
cout << "Hello World!";`
  },
  {
    title: 'Single-line Comment at End of Code',
    code: `cout << "Hello World!"; // This is a comment`
  },
  {
    title: 'Multi-line Comment',
    code: `/* The code below will print the words Hello World!
to the screen, and it is amazing */
cout << "Hello World!";`
  }
];

const Comments = () => {
  return (
    <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
      <h1>C++ Comments</h1>
      <p>Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be single-lined or multi-lined.</p>

      <h2>Single-line Comments</h2>
      <p>Single-line comments start with two forward slashes (<code>//</code>).</p>
      <p>Any text between <code>//</code> and the end of the line is ignored by the compiler (will not be executed).</p>

      {codeSamples.slice(0, 2).map((sample, index) => (
        <div key={index} style={{ position: 'relative', marginBottom: '1rem' }}>
          <h3>{sample.title}</h3>
          <CopyToClipboard text={sample.code}>
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
          <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
            {sample.code}
          </SyntaxHighlighter>
        </div>
      ))}

      <h2>C++ Multi-line Comments</h2>
      <p>Multi-line comments start with <code>/*</code> and end with <code>*/</code>.</p>
      <p>Any text between <code>/*</code> and <code>*/</code> will be ignored by the compiler:</p>

      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <h3>{codeSamples[2].title}</h3>
        <CopyToClipboard text={codeSamples[2].code}>
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
        <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
          {codeSamples[2].code}
        </SyntaxHighlighter>
      </div>

      <h2>Single or multi-line comments?</h2>
      <p>It is up to you which you want to use. Normally, we use <code>//</code> for short comments, and <code>/* */</code> for longer.</p>
    </div>
  );
};

export default Comments;