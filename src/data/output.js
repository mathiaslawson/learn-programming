const Out = [
    {
    name: "C++",
    introduction: "The cout object, together with the << operator, is used to output values/print text.",
    examples: [
      {
        title: "Example 1",
        description: "Basic output with cout:",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World!";
    return 0;
  }`
      },
      {
        title: "Example 2",
        description: "Output multiple lines with cout:",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World!";
    cout << "I am learning C++";
    return 0;
  }`
      }
    ],
    newLines: {
      title: "New Lines",
      description: "To insert a new line, you can use the \\n character:",
      code: `#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World! \\n";
    cout << "I am learning C++";
    return 0;
  }`
    },
    escapeSequences: {
      title: "Escape Sequences",
      description: "Escape sequences allow you to insert special characters:",
      code: `#include <iostream>
  using namespace std;
  
  int main() {
    cout << "\\tCreates a horizontal tab" << endl;
    cout << "\\\\Inserts a backslash character (\\"\\")" << endl;
    cout << "\\"Inserts a double quote character (\\"")" << endl;
    return 0;
  }`
    }
  }
  
]


export default Out;