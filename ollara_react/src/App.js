import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState(); 

  return (
    <div className="App">
      <header>
        <h1>
          Exercise Tracker
        </h1>
        <p>
          Use this application to keep track of the exercises you perform. 
        </p>
        <p>
          You can add, edit, and delete exercises from this list. Enjoy!
        </p>
      </header>
      <main>
        <Router>
          <div className="App-header">
            <Routes>
              <Route path="/" exact element = {<HomePage setExerciseToEdit={setExerciseToEdit} />} />
              <Route path="/add-exercise" element = {<AddExercisePage  />} />
              <Route path="/edit-exercise" element = {<EditExercisePage exerciseToEdit={exerciseToEdit} />} />
            </Routes>
            </div>
        </Router>
      </main>
      <footer>
        ©2022 Adam Ollar
      </footer>
    </div>
  );
}

export default App;