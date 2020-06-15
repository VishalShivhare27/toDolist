import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo list</h1>
        <br />
        <input type = "text" placeholder= "Add a Task!"/>
        <button> + </button>

        <ol>
          <li> Buy Apples</li>
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
