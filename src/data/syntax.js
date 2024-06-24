// export const languages = [
//     // C++
  
//   // Java
   
//   // C#
  
   
//   // Godot Essentials
     
//   // Python Essentials
    
//       // Rust
   
//       // Go Lang
    
//       // JavaScript
     
//       // TypeScript
     
//         name: "TypeScript",
//         introduction: "TypeScript is a statically typed superset of JavaScript developed by Microsoft. First released in 2012, TypeScript adds optional static types to JavaScript, enabling developers to catch errors early and enhance code quality. It compiles to plain JavaScript, making it compatible with all JavaScript environments.",
//         keyFeatures: [
//           {
//             title: "Static Typing",
//             description: "TypeScript introduces static types, allowing developers to define and check variable types at compile time, reducing runtime errors."
//           },
//           {
//             title: "Enhanced IDE Support",
//             description: "TypeScript offers improved IDE support, with features like autocompletion, refactoring, and type checking, enhancing developer productivity."
//           },
//           {
//             title: "Compatibility with JavaScript",
//             description: "TypeScript is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code. This allows for gradual adoption and integration into existing projects."
//           },
//           {
//             title: "Advanced Features",
//             description: "TypeScript includes advanced features such as interfaces, generics, and decorators, providing additional tools for building robust and maintainable code."
//           },
//           {
//             title: "Strong Community and Ecosystem",
//             description: "TypeScript has a strong and growing community, with many popular libraries and frameworks, such as Angular and React, offering first-class TypeScript support."
//           }
//         ],
//         applications: "TypeScript is used for web development, particularly in large-scale applications where maintainability and scalability are crucial. It's also used in mobile app development, server-side programming, and any project where JavaScript is applicable.",
//         learningAndUsage: "TypeScript is easy to learn for developers with JavaScript experience. Its comprehensive documentation, tutorials, and community support make it accessible. TypeScript's gradual typing system allows developers to start with plain JavaScript and gradually adopt TypeScript's features.",
//         summary: "TypeScript is a powerful extension of JavaScript that adds static typing and advanced features to enhance code quality and developer productivity. Its compatibility with JavaScript and strong ecosystem make it an excellent choice for building scalable and maintainable applications.",
//         codeSnippets: [
//           {
//             title: "Hello World in TypeScript",
//             code: `console.log("Hello, World!");`
//           },
//           {
//             title: "Simple Class in TypeScript",
//             code: `class MyClass {
//       constructor() {
//           console.log("Constructor called!");
//       }
//   }
  
//   const obj = new MyClass();`
//           }
//         ]
    
//     ];
    

export const languages = [
    {
    name: 'C#',
    syntaxDescription: `In the previous chapter, we created a C# file called Program.cs, and we used the following code to print "Hello World" to the screen:`,
    codeSnippets: [
      {
        title: 'Program.cs',
        description: `using System;
  
  namespace HelloWorld
  {
    class Program
    {
      static void Main(string[] args)
      {
        Console.WriteLine("Hello World!");    
      }
    }
  }`,
        code: `using System;
  
  namespace HelloWorld
  {
    class Program
    {
      static void Main(string[] args)
      {
        Console.WriteLine("Hello World!");    
      }
    }
  }`,
        result: `Hello World!`,
        explanation: [
          `Line 1: using System means that we can use classes from the System namespace.`,
          `Line 3: namespace is used to organize your code, and it is a container for classes and other namespaces.`,
          `Line 5: class is a container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class.`,
          `Line 7: The Main method is the entry point of a C# application. Any code inside its curly brackets {} will be executed.`
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Classes and Objects',
        description: 'C# supports object-oriented programming with classes and objects.'
      },
      {
        title: 'Strong Typing',
        description: 'C# is a strongly-typed language, which means every variable and object must have a defined type.'
      },
      {
        title: 'Garbage Collection',
        description: 'C# uses automatic garbage collection to manage memory.'
      }
    ],
    applications: `C# is widely used for building Windows desktop applications, web applications, and games using frameworks like .NET and Unity.`,
    learningAndUsage: `To learn C#, start with basic syntax and gradually explore object-oriented concepts and advanced features like LINQ and async programming.`,
    summary: `C# is a versatile and powerful language for building a wide range of applications.`,
    exercises: [
      {
        description: `Insert the missing part of the code below to output "Hello World!".`,
        code: `static void Main(string[] args)
  {
    Console.WriteLine("Hello World!");    
  }`
      }
    ]
  }
];
  