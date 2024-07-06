import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const codeSamples = [
  {
    title: 'Declaring and Assigning a Variable',
    code: `int myNum = 15;\ncout << myNum;`
  },
  {
    title: 'Declaring and Assigning a Variable Later',
    code: `int myNum;\nmyNum = 15;\ncout << myNum;`
  },
  {
    title: 'Overwriting a Variable Value',
    code: `int myNum = 15;  // myNum is 15\nmyNum = 10;  // Now myNum is 10\ncout << myNum;  // Outputs 10`
  },
  {
    title: 'Other Types of Variables',
    code: `int myNum = 5;               // Integer (whole number without decimals)\ndouble myFloatNum = 5.99;    // Floating point number (with decimals)\nchar myLetter = 'D';         // Character\nstring myText = "Hello";     // String (text)\nbool myBoolean = true;       // Boolean (true or false)`
  },
  {
    title: 'Displaying Variables',
    code: `int myAge = 35;\ncout << "I am " << myAge << " years old.";`
  },
  {
    title: 'Adding Variables Together',
    code: `int x = 5;\nint y = 6;\nint sum = x + y;\ncout << sum;`
  },
  {
    title: 'Declaring Multiple Variables',
    code: `int x = 5, y = 6, z = 50;\ncout << x + y + z;`
  },
  {
    title: 'Assigning One Value to Multiple Variables',
    code: `int x, y, z;\nx = y = z = 50;\ncout << x + y + z;`
  },
  {
    title: 'Using Descriptive Names for Variables',
    code: `// Good\nint minutesPerHour = 60;\n\n// OK, but not so easy to understand what m actually is\nint m = 60;`
  },
  {
    title: 'Declaring Constants',
    code: `const int myNum = 15;  // myNum will always be 15\nmyNum = 10;  // error: assignment of read-only variable 'myNum'`
  },
  {
    title: 'Declaring Constants with Initial Values',
    code: `const int minutesPerHour = 60;\nconst float PI = 3.14;`
  },
  {
    title: 'Incorrect Constant Declaration',
    code: `const int minutesPerHour;\nminutesPerHour = 60; // error`
  }
];

const Variables = () => {
  return (
    <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
      <h1>C++ Variables</h1>
      <p>Variables are containers for storing data values.</p>
      <p>In C++, there are different types of variables (defined with different keywords), for example:</p>
      <ul>
        <li><code>int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
        <li><code>double</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
        <li><code>char</code> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
        <li><code>string</code> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
        <li><code>bool</code> - stores values with two states: true or false</li>
      </ul>

      <h2>Declaring (Creating) Variables</h2>
      <p>To create a variable, specify the type and assign it a value:</p>

      <h3>Syntax</h3>
      <pre><code>type variableName = value;</code></pre>
      <p>Where <code>type</code> is one of C++ types (such as <code>int</code>), and <code>variableName</code> is the name of the variable (such as <code>x</code> or <code>myName</code>). The equal sign is used to assign values to the variable.</p>
      <p>To create a variable that should store a number, look at the following example:</p>

      {codeSamples.slice(0, 3).map((sample, index) => (
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

      <h2>Other Types</h2>
      <p>A demonstration of other data types:</p>

      {codeSamples.slice(3, 4).map((sample, index) => (
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

      <h2>Display Variables</h2>
      <p>The <code>cout</code> object is used together with the <code>&lt;&lt;</code> operator to display variables.</p>
      <p>To combine both text and a variable, separate them with the <code>&lt;&lt;</code> operator:</p>

      {codeSamples.slice(4, 5).map((sample, index) => (
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

      <h2>Add Variables Together</h2>
      <p>To add a variable to another variable, you can use the <code>+</code> operator:</p>

      {codeSamples.slice(5, 6).map((sample, index) => (
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

      <h2>C++ Declare Multiple Variables</h2>
      <h3>Declare Many Variables</h3>
      <p>To declare more than one variable of the same type, use a comma-separated list:</p>

      {codeSamples.slice(6, 7).map((sample, index) => (
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

      <h3>One Value to Multiple Variables</h3>
      <p>You can also assign the same value to multiple variables in one line:</p>

      {codeSamples.slice(7, 8).map((sample, index) => (
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

      <h2>C++ Identifiers</h2>
      <p>All C++ variables must be identified with unique names.</p>
      <p>These unique names are called identifiers.</p>
      <p>Identifiers can be short names (like <code>x</code> and <code>y</code>) or more descriptive names (like <code>age</code>, <code>sum</code>, <code>totalVolume</code>).</p>
      <p><strong>Note:</strong> It is recommended to use descriptive names in order to create understandable and maintainable code:</p>

      {codeSamples.slice(8, 9).map((sample, index) => (
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

      <h2>Constants</h2>
      <p>When you do not want others (or yourself) to change existing variable values, use the <code>const</code> keyword (this will declare the variable as "constant", which means unchangeable and read-only):</p>

      {codeSamples.slice(9, 11).map((sample, index) => (
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

      <h3>Notes On Constants</h3>
      <p>When you declare a constant variable, it must be assigned with a value:</p>

      {codeSamples.slice(11, 12).map((sample, index) => (
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
    </div>
  );
};

export default Variables;