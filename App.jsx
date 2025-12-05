import ListComponent from './components/ListComponent';
import ConditionalComponent from './components/ConditionalComponent';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Registration() {
  return <ConditionalComponent />;
}

function List() {
  return <ListComponent />;
}

export default function App() {
  const [formType, setType] = useState(true);

  return ( 
     <BrowserRouter>

     <div className='app-container'>


      {/* Navigation */}
      <nav>
        <Link to="/">Register</Link> |{" "}
        <Link to="/list">List</Link> 
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/list" element={<List />} />
      </Routes>

      {/*<button onClick={() => setType(!formType)}>
          {formType ? 'Switch to List' : 'Switch to Authentication'}
      </button>

      {formType ? <ConditionalComponent/> : <ListComponent/>} */}
      
    </div>
     </BrowserRouter>
  );

}