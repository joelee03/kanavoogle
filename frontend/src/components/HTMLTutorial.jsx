import React, { useRef, useState, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HtmlTutorial = () => {
  const iframeRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [editorContent, setEditorContent] = useState('');


  const renderTutorialContent = (step) => {
    switch (step) {
      case 1:
        return {
          title: 'Tutorial 1: Making a website',
          text: `
All HTML documents must start with a document type declaration: '<!DOCTYPE html>'.
The HTML document itself begins with <html> and ends with </html>.
The visible part of the HTML document is between <body> and </body>.
`,
          code: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`
        };
      case 2:
        return {
          title: 'Tutorial 2: Adding a Navigation Bar',
          text: `
A navigation bar (or navbar) helps users navigate between pages of the website.
The <nav> element is used to define navigation links.
`,
          code: `<!DOCTYPE html>
<html>
<head>
<title>Website with Navbar</title>
</head>
<body>

<!-- Navigation Bar -->
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>

<h1>Welcome to Our Website</h1>
<p>This is a basic website with a navigation bar.</p>

</body>
</html>
`
        };
      case 3:
        return {
          title: 'Tutorial 3: Adding a Footer',
          text: `The <footer> element is used to define the footer section of a webpage.
Typically, a footer contains copyright information, links, or other meta information.`,
          code: `<!DOCTYPE html>
<html>
<head>
<title>Website with Footer</title>
</head>
<body>

<!-- Navigation Bar -->
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>

<h1>Welcome to Our Website</h1>
<p>This is a basic website with a footer.</p>

<!-- Footer Section -->
<footer>
<p>© 2024 My Website. All rights reserved.</p>
<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</footer>

</body>
</html>
`
        };
      case 4:
        return {
          title: 'Tutorial 4: Creating a Services Section',
          text: `Adding a services section helps display what your website or business offers.
You can structure this using headings and paragraphs or lists.`,
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Website with Services Section</title>
</head>
<body>

<!-- Navigation Bar -->
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<h1>Welcome to Our Website</h1>

<!-- Services Section -->
<section>
  <h2>Our Services</h2>
  <ul>
    <li>Web Development</li>
    <li>Mobile App Development</li>
    <li>SEO Optimization</li>
  </ul>
</section>

<!-- Footer Section -->
<footer>
  <p>© 2024 My Website. All rights reserved.</p>
  <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</footer>

</body>
</html>

`
        };
      case 5:
        return {
          title: 'Tutorial 5: Adding a Contact Form',
          text: `A contact form allows users to get in touch with the website owner.
You can use a simple form with input fields for name, email, and message.`,
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Website with Contact Form</title>
</head>
<body>

<!-- Navigation Bar -->
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<h1>Welcome to Our Website</h1>

<!-- Contact Form -->
<section>
  <h2>Contact Us</h2>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" cols="40"></textarea><br><br>

    <input type="submit" value="Submit">
  </form>
</section>

<!-- Footer Section -->
<footer>
  <p>© 2024 My Website. All rights reserved.</p>
  <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</footer>

</body>
</html>

`
        };
      case 6:
        return {
          title: 'Tutorial 6: Adding Some Basic Styling with CSS',
          text: `CSS (Cascading Style Sheets) is used to style HTML elements.
You can use an internal stylesheet to style the website.`,
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Website with Basic Styling</title>
    <style>
        /* Styling the navigation bar */
        nav ul {
            list-style-type: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin-right: 15px;
        }

        nav ul li a {
            text-decoration: none;
            color: blue;
        }

        /* Styling the footer */
        footer {
            margin-top: 20px;
            padding: 10px;
            background-color: #f1f1f1;
            text-align: center;
        }
    </style>
</head>
<body>

<!-- Navigation Bar -->
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<h1>Welcome to Our Website</h1>

<!-- Services Section -->
<section>
  <h2>Our Services</h2>
  <ul>
    <li>Web Development</li>
    <li>Mobile App Development</li>
    <li>SEO Optimization</li>
  </ul>
</section>

<!-- Footer Section -->
<footer>
  <p>© 2024 My Website. All rights reserved.</p>
  <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</footer>

</body>
</html>
`
        };
      case 7:
        return {
          title: 'Tutorial 7: Adding an Image Gallery',
          text: `An image gallery can be created using the <img> tag to showcase multiple images on your website.`,
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Website with Image Gallery</title>
</head>
<body>

<!-- Navigation Bar -->
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<h1>Welcome to Our Website</h1>

<!-- Image Gallery -->
<section>
  <h2>Image Gallery</h2>
  <img src="https://via.placeholder.com/150" alt="Image 1">
  <img src="https://via.placeholder.com/150" alt="Image 2">
  <img src="https://via.placeholder.com/150" alt="Image 3">
</section>

<!-- Footer Section -->
<footer>
  <p>© 2024 My Website. All rights reserved.</p>
  <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</footer>

</body>
</html>
`
        };
      default:
        return {};
    }
  };

  const { title, text, code } = renderTutorialContent(currentStep);

  const runCode = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = editorContent;
    }
  };

  const resetCode = () => {
    setEditorContent(code);
  };
  
  useEffect(() => {
    setEditorContent(code);
  }, [currentStep, code]);

 
  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto space-y-6">
      {/* Tutorial Header Section */}
      <div className="flex flex-row items-center w-full justify-between border border-black rounded-lg px-4 py-2 shadow-lg">
        <span className="font-bold">HTML Tutorial</span>
        <div className="flex items-center space-x-4">
          <button onClick={handleBack} disabled={currentStep === 1} className="flex items-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} disabled={currentStep === 7} className="flex items-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
            <FaArrowRight />
          </button>
        </div>
        <span>Step {currentStep}/7</span>
      </div>

      {/* Tutorial Content Section */}
      <div className="flex flex-row justify-between w-full space-x-6">
        {/* Left section: Text content */}
        <div className="w-2/5 border border-black rounded-lg p-4 shadow-lg">
          <h1 className="font-bold text-lg border-b border-black pb-2">{title}</h1>
          <p className="mt-4">{text}</p>
        </div>

        {/* Right section: Code editor and output */}
        <div className="w-2/5 flex flex-col items-center space-y-4">
          <h1 className="text-lg font-bold">Try it yourself</h1>
          <CodeMirror
            value={editorContent}
            options={{
              mode: 'htmlmixed',
              lineNumbers: true,
              tabSize: 2,
            }}
            onChange={(editor, data, value) => setEditorContent(value)}
            className="w-full"
          />
          <div className="flex items-center justify-between w-3/4 space-x-4">
            <button className="px-4 py-2 border border-black rounded-lg shadow-lg hover:bg-gray-300" onClick={runCode}>Run</button>
            <button className="px-4 py-2 border border-black rounded-lg shadow-lg hover:bg-gray-300" onClick={resetCode}>Reset</button>
          </div>
          <iframe ref={iframeRef} className="w-full h-72 border border-black rounded-lg shadow-lg" title="Output"></iframe>
        </div>
      </div>
    </div>
  );
};

export default HtmlTutorial;