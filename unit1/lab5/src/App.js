import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './RunningExercise';


function App() {
  const [activeScreen, setActiveScreen] = useState('');

  return (
    <div>
      <button onClick={() => setActiveScreen('RepetitionExercise')}>Repetition Exercise</button>
      <button onClick={() => setActiveScreen('DurationExercise')}>Duration Exercise</button>

      {activeScreen === 'RepetitionExercise' && <RepetitionExercise name="Push Ups" />}
      {activeScreen === 'DurationExercise' && <DurationExercise name="Running" />}
    </div>
  );
}

export default App;

