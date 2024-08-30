// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
        <section>
          <h2>Experience</h2>
          <p>Details about your experience.</p>
        </section>
        <section>
          <h2>Education</h2>
          <p>Details about your education.</p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>Details about your skills.</p>
        </section>
      </header>
    </div>
  );
}

export default App;
