// DurationExerciseScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const DurationExerciseScreen = ({ route, navigation }) => {
  const [duration, setDuration] = useState(0); // Track duration in seconds
  const { name } = route.params;

  // Example function to start a timer - implement as needed
  const startTimer = () => {
    // Start timing here
  };

  // Reset the duration to 0
  const resetTimer = () => {
    setDuration(0);
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>Duration: {duration} seconds</Text>
      <Button title="Start" onPress={startTimer} />
      <Button title="Reset" onPress={resetTimer} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default DurationExerciseScreen;
