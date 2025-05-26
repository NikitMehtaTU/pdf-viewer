import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <p>Hi</p>

      <h2>Chapter 2</h2>
      <iframe
        src="/chapter-2.pdf"
        width="100%"
        height="600px"
        title="Chapter 2"
      ></iframe>

      <h2>Chapter 3</h2>
      <iframe
        src="/chapter-3.pdf"
        width="100%"
        height="600px"
        title="Chapter 3"
      ></iframe>
    </>
  );
}

export default App;
