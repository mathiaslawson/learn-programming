import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// const languages = [
//   {
//     name: 'C++',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// cout << "Hello World!";`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `cout << "Hello World!"; // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// cout << "Hello World!";`
//       }
//     ]
//   },
//   {
//     name: 'C#',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// Console.WriteLine("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `Console.WriteLine("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// Console.WriteLine("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'C',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// printf("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `printf("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// printf("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'Rust',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// println!("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `println!("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// println!("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'Go',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// fmt.Println("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `fmt.Println("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// fmt.Println("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'Python',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `# This is a comment
// print("Hello World!")`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `print("Hello World!") # This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `"""
// The code below will print the words Hello World!
// to the screen, and it is amazing
// """
// print("Hello World!")`
//       }
//     ]
//   },
//   {
//     name: 'Java',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// System.out.println("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `System.out.println("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// System.out.println("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'TypeScript',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// console.log("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `console.log("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// console.log("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'JavaScript',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `// This is a comment
// console.log("Hello World!");`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `console.log("Hello World!"); // This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `/* The code below will print the words Hello World!
// to the screen, and it is amazing */
// console.log("Hello World!");`
//       }
//     ]
//   },
//   {
//     name: 'GDScript',
//     comments: [
//       {
//         title: 'Single-line Comment Before Code',
//         code: `# This is a comment
// print("Hello World!")`
//       },
//       {
//         title: 'Single-line Comment at End of Code',
//         code: `print("Hello World!") # This is a comment`
//       },
//       {
//         title: 'Multi-line Comment',
//         code: `# The code below will print the words Hello World!
// # to the screen, and it is amazing
// print("Hello World!")`
//       }
//     ]
//   }
// ];

const Comments = ({language}) => {
  return (
    <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
      
        <div>
          <h1>{language.name} Comments</h1>
          <p>Comments can be used to explain {language.name} code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be single-lined or multi-lined.</p>

          <h2>Single-line Comments</h2>
          <p>Single-line comments start with two forward slashes (<code>//</code>).</p>
          <p>Any text between <code>//</code> and the end of the line is ignored by the compiler (will not be executed).</p>

          {language?.comments?.slice(0, 2).map((sample, index) => (
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
              <SyntaxHighlighter language={language.name.toLowerCase()} style={vscDarkPlus}>
                {sample.code}
              </SyntaxHighlighter>
            </div>
          ))}

          <h2>{language.name} Multi-line Comments</h2>
          <p>Multi-line comments start with <code>/*</code> and end with <code>*/</code>.</p>
          <p>Any text between <code>/*</code> and <code>*/</code> will be ignored by the compiler:</p>

          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <h3>{language.comments[2].title}</h3>
            <CopyToClipboard text={language.comments[2].code}>
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
            <SyntaxHighlighter language={language.name.toLowerCase()} style={vscDarkPlus}>
              {language.comments[2].code}
            </SyntaxHighlighter>
          </div>
        </div>
   

      <h2>Single or multi-line comments?</h2>
      <p>It is up to you which you want to use. Normally, we use <code>//</code> for short comments, and <code>/* */</code> for longer.</p>
    </div>
  );
};

export default Comments;
