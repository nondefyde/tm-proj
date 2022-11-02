import React, { useState } from 'react';
import './App.css';
import { PersonalityTest } from './features/personality-test';

function App() {
  const [showTest, setShowTest] = useState(false);
  return (
    <div className="App">
      <main className={'App-main'}>
        {!showTest ? <button className='take-test' onClick={() => setShowTest(true)}>Start Personality Test</button> : <PersonalityTest/>}
      </main>
    </div>
  );
}

export default App;
