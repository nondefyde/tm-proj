import React, { useState } from 'react';
import './App.css';
import { QuestionSet } from './features/question-set/QuestionSet';

function App() {
  const [showTest, setShowTest] = useState(false);
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*</header>*/}
  
      <main className={'App-main'}>
        {!showTest ? <button onClick={() => setShowTest(true)}>Start Personality Test</button> : <QuestionSet/>}
      </main>
    </div>
  );
}

export default App;
