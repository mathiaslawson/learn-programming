import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Output = ({language}) => {
//   const languages =
//    [
//     {
//       name: 'C++',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `#include <iostream>
// using namespace std;

// int main() {
//   cout << "Hello World!";
//   return 0;
// }`
//         },
//         {
//           title: 'Multiple cout',
//           code: `#include <iostream>
// using namespace std;

// int main() {
//   cout << "Hello World!";
//   cout << "I am learning C++";
//   return 0;
// }`
//         },
//       ]
//     },
//     {
//       name: 'C#',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `using System;

// class Program
// {
//     static void Main()
//     {
//         Console.WriteLine("Hello World!");
//     }
// }`
//         },
//         {
//           title: 'Multiple Console.WriteLine',
//           code: `using System;

// class Program
// {
//     static void Main()
//     {
//         Console.WriteLine("Hello World!");
//         Console.WriteLine("I am learning C#");
//     }
// }`
//         },
//       ]
//     },
//     {
//       name: 'C',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `#include <stdio.h>

// int main() {
//   printf("Hello World!");
//   return 0;
// }`
//         },
//         {
//           title: 'Multiple printf',
//           code: `#include <stdio.h>

// int main() {
//   printf("Hello World!");
//   printf("I am learning C");
//   return 0;
// }`
//         },
//       ]
//     },
//     {
//       name: 'Rust',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `fn main() {
//   println!("Hello World!");
// }`
//         },
//         {
//           title: 'Multiple println!',
//           code: `fn main() {
//   println!("Hello World!");
//   println!("I am learning Rust");
// }`
//         },
//       ]
//     },
//     {
//       name: 'Go',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `package main

// import "fmt"

// func main() {
//   fmt.Println("Hello World!")
// }`
//         },
//         {
//           title: 'Multiple fmt.Println',
//           code: `package main

// import "fmt"

// func main() {
//   fmt.Println("Hello World!")
//   fmt.Println("I am learning Go")
// }`
//         },
//       ]
//     },
//     {
//       name: 'Python',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `print("Hello World!")`
//         },
//         {
//           title: 'Multiple print',
//           code: `print("Hello World!")
// print("I am learning Python")`
//         },
//       ]
//     },
//     {
//       name: 'Java',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello World!");
//     }
// }`
//         },
//         {
//           title: 'Multiple System.out.println',
//           code: `public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello World!");
//         System.out.println("I am learning Java");
//     }
// }`
//         },
//       ]
//     },
//     {
//       name: 'TypeScript',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `console.log("Hello World!");`
//         },
//         {
//           title: 'Multiple console.log',
//           code: `console.log("Hello World!");
// console.log("I am learning TypeScript");`
//         },
//       ]
//     },
//     {
//       name: 'JavaScript',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `console.log("Hello World!");`
//         },
//         {
//           title: 'Multiple console.log',
//           code: `console.log("Hello World!");
// console.log("I am learning JavaScript");`
//         },
//       ]
//     },
//     {
//       name: 'GDScript',
//       codeSamples: [
//         {
//           title: 'Basic Output',
//           code: `func _ready():
//     print("Hello World!")`
//         },
//         {
//           title: 'Multiple print',
//           code: `func _ready():
//     print("Hello World!")
//     print("I am learning GDScript")`
//         },
//       ]
//     },
//   ];

  return (
    <div className="container mt-5" style={{ lineHeight: '2.4rem' }}>
    
        <div>
          <h1>{language?.name} Output (Print Text)</h1>
          <p>Examples of output in {language.name}:</p>

          {language?.codeSamples?.map((sample, index) => (
            <div key={index} style={{ position: 'relative', marginBottom: '1rem' }}>
              <h2>{sample.title}</h2>
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

        </div>
    

      <h2>Escape Sequences</h2>
      <p>Many programming languages use escape sequences for special characters. Common ones include:</p>
      <table>
        <thead>
          <tr>
            <th>Escape Sequence</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>\n</code></td>
            <td>Newline</td>
          </tr>
          <tr>
            <td><code>\t</code></td>
            <td>Tab</td>
          </tr>
          <tr>
            <td><code>\\</code></td>
            <td>Backslash</td>
          </tr>
          <tr>
            <td><code>\"</code></td>
            <td>Double quote</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Output;
