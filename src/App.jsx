import ListComponent from './components/ListComponent';
import ConditionalComponent from './components/ConditionalComponent';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [formType, setType] = useState(true);

  return ( 
    <div className='app-container'>

      <button onClick={() => setType(!formType)}>
          {formType ? 'Switch to List' : 'Switch to Authentication'}
      </button>

      {formType ? <ConditionalComponent/> : <ListComponent/>}
    </div>
  );

}