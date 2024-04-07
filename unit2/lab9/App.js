// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'; // Import your Home component
import DurationExercise from './home/DurationExercise'; // Import other exercise components
import RepetitionExercise from './home/RepetitionExercise';
import DurationExerciseScreen from './src/components/DurationExerciseScreen';
import RepetitionExerciseScreen from './src/components/RepetitionExerciseScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DurationExercise" component={DurationExerciseScreen} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExerciseScreen} />
        {/* Register other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
