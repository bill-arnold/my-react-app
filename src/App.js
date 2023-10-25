// import logo from './logo.svg';
import './App.css';

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
//}


import React, { useState, useEffect } from "react";


function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
        
      });
  }, []);

   // if the data hasn't been loaded, show a loading indicator
  
  // if (!isLoaded) return <h3>Loading...</h3>;
  return <div>
    
    {peopleInSpace.map((person) => person.name)}
    </div>;
}




export default App;
