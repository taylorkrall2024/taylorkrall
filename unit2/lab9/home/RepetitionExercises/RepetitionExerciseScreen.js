// RepetitionExerciseScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const RepetitionExerciseScreen = ({ route, navigation }) => {
  const [count, setCount] = useState(0);
  const { name } = route.params;

  // Increase the count of repetitions
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Reset the count to 0
  const resetCount = () => {
    setCount(0);
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Reset" onPress={resetCount} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default RepetitionExerciseScreen;
