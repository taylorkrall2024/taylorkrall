// components/Home.js

import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  // Define your exercise data (repetition and duration exercises)
  const exercises = [
    { id: 'repetition', title: 'Repetition Exercise' },
    { id: 'duration', title: 'Duration Exercise' },
    // Add more exercises if needed
  ];

  // Function to navigate to the selected exercise screen
  const navigateToExercise = (exerciseId) => {
    navigation.navigate(exerciseId);
  };

  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.title}
            onPress={() => navigateToExercise(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Home;
