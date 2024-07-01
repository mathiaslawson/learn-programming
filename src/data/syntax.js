// export const languages = [
//     // C++
  
//   
   
//   // C#
  
   // Java
//   // Godot Essentials
     
//   // Python 
    
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
    

const Syn = [
  // 
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
  , 
// C++
{
  name: 'C++',
  syntaxDescription: `In C++, we typically use a file named main.cpp to write our code. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'main.cpp',
      description: `#include <iostream>
  
int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}`,
      code: `#include <iostream>
  
int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}`,
      result: `Hello World!`,
      explanation: [
        `Line 1: #include <iostream> allows us to use input and output streams.`,
        `Line 3: int main() is the main function where program execution begins. The return 0; statement indicates successful execution.`,
        `Line 4: std::cout is used to print output to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Classes and Objects',
      description: 'C++ supports object-oriented programming with classes and objects.'
    },
    {
      title: 'Strong Typing',
      description: 'C++ is a statically-typed language, where types are checked at compile-time.'
    },
    {
      title: 'Manual Memory Management',
      description: 'C++ allows for manual memory management through pointers, unlike languages with automatic garbage collection.'
    }
  ],
  applications: `C++ is used for systems/software development, game development, embedded systems, and performance-critical applications.`,
  learningAndUsage: `To learn C++, start with understanding basic syntax, data types, and control structures. Progress to mastering concepts like classes, pointers, and memory management.`,
  summary: `C++ is a powerful language known for its efficiency, flexibility, and performance.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello World!" using std::cout.`,
      code: `int main() {
    // Your code here
}`
    }
  ]
},

// Godot
{
  name: 'Godot Engine',
  syntaxDescription: `In GDScript, we typically use .gd files to write our code. Here's an example of how to print 'Hello World' to the console:`,
  codeSnippets: [
    {
      title: 'hello_world.gd',
      description: `extends Node

func _ready():
  print("Hello World!")`,
      code: `extends Node

func _ready():
  print("Hello World!")`,
      result: `Hello World!`,
      explanation: [
        `Line 1: 'extends Node' indicates that this script is attached to a Node in the scene tree.`,
        `Line 3: '_ready()' is a built-in function that's called when the node and its children enter the scene tree.`,
        `Line 4: 'print()' is used to output text to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Simple Syntax',
      description: 'GDScript has a Python-like syntax, making it easy to read and write.'
    },
    {
      title: 'Integration with Godot',
      description: 'GDScript is designed specifically for the Godot game engine, providing seamless integration with its nodes and scenes.'
    },
    {
      title: 'Dynamic Typing',
      description: 'GDScript uses dynamic typing, allowing for flexible variable declarations.'
    }
  ],
  applications: `GDScript is primarily used for game development within the Godot game engine, allowing for scripting of game logic, UI, and more.`,
  learningAndUsage: `To learn GDScript, start with understanding basic syntax, built-in types, and functions. Then progress to working with Godot's nodes, scenes, and signals.`,
  summary: `GDScript is a high-level, dynamically typed programming language designed for the Godot game engine.`,
  exercises: [
    {
      description: `Complete the code below to print 'Hello World!' using the print() function.`,
      code: `extends Node

func _ready():
  # Your code here
`
    }
  ]
},
// Java
{
  name: 'Java',
  syntaxDescription: `In Java, we typically use a file named Main.java to write our code. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'Main.java',
      description: `public class Main {
  
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}`,
      code: `public class Main {
  
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}`,
      result: `Hello World!`,
      explanation: [
        `Line 1: 'public class Main' declares a public class named Main.`,
        `Line 3: 'public static void main(String[] args)' is the main method where program execution begins.`,
        `Line 4: 'System.out.println()' is used to print output to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Object-Oriented',
      description: 'Java supports object-oriented programming with classes and objects.'
    },
    {
      title: 'Platform Independence',
      description: 'Java code is compiled into bytecode that can run on any machine with a Java Virtual Machine (JVM).'
    },
    {
      title: 'Automatic Memory Management',
      description: 'Java provides garbage collection, which automatically manages memory allocation and deallocation.'
    }
  ],
  applications: `Java is used for web development, enterprise applications, mobile apps (Android), and large systems development.`,
  learningAndUsage: `To learn Java, start with understanding basic syntax, data types, and control structures. Progress to mastering concepts like classes, inheritance, polymorphism, and interfaces.`,
  summary: `Java is a versatile, platform-independent programming language known for its portability, performance, and scalability.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello World!" using System.out.println().`,
      code: `public class Main {

  public static void main(String[] args) {
    // Your code here
  }
}`
    }
  ]
}
,
// Python
{
  name: 'Python Essentials',
  syntaxDescription: `In Python, we typically use a file with a .py extension to write our code. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'hello_world.py',
      description: `print("Hello World!")`,
      code: `print("Hello World!")`,
      result: `Hello World!`,
      explanation: [
        `The 'print()' function is used to output text to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Simple and Readable Syntax',
      description: 'Python has a clean and easy-to-read syntax, making it accessible for beginners.'
    },
    {
      title: 'Dynamic Typing',
      description: 'Python uses dynamic typing, allowing for flexible variable declarations.'
    },
    {
      title: 'Extensive Libraries',
      description: 'Python has a vast standard library and numerous third-party libraries for various applications.'
    }
  ],
  applications: `Python is used for web development, data science, machine learning, automation, and more.`,
  learningAndUsage: `To learn Python, start with understanding basic syntax, data types, and control structures. Progress to working with libraries and frameworks.`,
  summary: `Python is a versatile, high-level programming language known for its simplicity and wide range of applications.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello World!" using the print() function.`,
      code: `print("")
      `
    }
  ]
},
// Rust
{
  name: 'Rust',
  syntaxDescription: `In Rust, we typically use a file named main.rs to write our code. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'main.rs',
      description: `fn main() {
    println!("Hello, world!");
}`,
      code: `fn main() {
    println!("Hello, world!");
}`,
      result: `Hello, world!`,
      explanation: [
        `Line 1: 'fn main()' defines the main function where program execution begins.`,
        `Line 2: 'println!' is a macro used to print output to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Memory Safety',
      description: 'Rust ensures memory safety without needing a garbage collector.'
    },
    {
      title: 'Performance',
      description: 'Rust offers performance comparable to C and C++.'
    },
    {
      title: 'Concurrency',
      description: 'Rust provides powerful concurrency mechanisms, making it easier to write safe concurrent code.'
    }
  ],
  applications: `Rust is used for systems programming, web development, game development, and performance-critical applications.`,
  learningAndUsage: `To learn Rust, start with understanding basic syntax, ownership, and borrowing. Progress to mastering concurrency and advanced features.`,
  summary: `Rust is a systems programming language focused on safety, speed, and concurrency.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello, world!" using the println! macro.`,
      code: `fn main() {
    // Your code here
}`
    }
  ]
},
// Go Lang
{
  name: 'Go',
  syntaxDescription: `In Go, we typically use a file named main.go to write our code. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'main.go',
      description: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
      result: `Hello, World!`,
      explanation: [
        `Line 1: 'package main' defines the package for this file.`,
        `Line 3: 'import "fmt"' imports the fmt package for formatted I/O.`,
        `Line 5: 'func main()' defines the main function where program execution begins.`,
        `Line 6: 'fmt.Println()' is used to print output to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Simplicity',
      description: 'Go has a simple syntax and a small standard library, making it easy to learn.'
    },
    {
      title: 'Concurrency',
      description: 'Go provides built-in support for concurrent programming with goroutines and channels.'
    },
    {
      title: 'Performance',
      description: 'Go is a statically typed, compiled language that offers near-C performance.'
    }
  ],
  applications: `Go is used for web development, cloud services, DevOps tools, and system programming.`,
  learningAndUsage: `To learn Go, start with understanding basic syntax, data types, and control structures. Progress to working with goroutines, channels, and the standard library.`,
  summary: `Go is a statically typed, compiled programming language designed for simplicity, concurrency, and performance.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello, World!" using fmt.Println().`,
      code: `package main

import "fmt"

func main() {
    // Your code here
}`
    }
  ]
},
// JS
{
  name: 'JavaScript',
  syntaxDescription: `In JavaScript, we typically write our code in .js files. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'hello_world.js',
      description: `console.log("Hello World!");`,
      code: `console.log("Hello World!");`,
      result: `Hello World!`,
      explanation: [
        `The 'console.log()' function is used to print output to the console.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Interpreted Language',
      description: 'JavaScript is an interpreted language, which means it is executed line by line.'
    },
    {
      title: 'Event-Driven',
      description: 'JavaScript is often used in event-driven programming, especially in web development.'
    },
    {
      title: 'Dynamic Typing',
      description: 'JavaScript uses dynamic typing, allowing for flexible variable declarations.'
    }
  ],
  applications: `JavaScript is used for web development, server-side development (Node.js), mobile app development, and more.`,
  learningAndUsage: `To learn JavaScript, start with understanding basic syntax, data types, and control structures. Progress to working with DOM manipulation, events, and modern frameworks.`,
  summary: `JavaScript is a versatile, high-level programming language primarily used for web development.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello World!" using console.log().`,
      code: `console.log("");
      `
    }
  ]
},
// TS
{
  name: 'TypeScript',
  syntaxDescription: `In TypeScript, we typically write our code in .ts files. Here's an example of how to print "Hello World" to the console:`,
  codeSnippets: [
    {
      title: 'hello_world.ts',
      description: `console.log("Hello World!");`,
      code: `console.log("Hello World!");`,
      result: `Hello World!`,
      explanation: [
        `The 'console.log()' function is used to print output to the console.`,
        `TypeScript code is transpiled to JavaScript before execution.`
      ]
    }
  ],
  keyFeatures: [
    {
      title: 'Static Typing',
      description: 'TypeScript introduces static typing to JavaScript, allowing for type checking at compile time.'
    },
    {
      title: 'Object-Oriented Programming',
      description: 'TypeScript supports object-oriented programming features like classes, interfaces, and inheritance.'
    },
    {
      title: 'Compatibility with JavaScript',
      description: 'TypeScript is a superset of JavaScript, so any valid JavaScript code is also valid TypeScript code.'
    }
  ],
  applications: `TypeScript is used for web development, particularly in large-scale applications where type safety can help prevent bugs.`,
  learningAndUsage: `To learn TypeScript, start with understanding basic syntax, type annotations, and interfaces. Progress to working with advanced types, classes, and modules.`,
  summary: `TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, offering additional features for large-scale application development.`,
  exercises: [
    {
      description: `Complete the code below to print "Hello World!" using console.log().`,
      code: `console.log("");`

    }
  ]
}

];


export default Syn;
  