import * as React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const SitUps = () => {
  const [repetitions, setRepetitions] = useState(0);

  const addToCount = () => {
      setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };
  const goHome = () => {
    navigation.navigate('HomeScreen');
  };

  return(
    <View style={styles.container}>
      <Text style= {styles.heading}>Sit Ups</Text>
      <View>
        <Text style={styles.repetitions}>{repetitions}</Text>
            <Pressable style={styles.button} onPress={resetRepetitions}>
                <Text style={styles.text}>Reset</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={addToCount}>
                <Text style={styles.text}>Complete Rep</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goHome}>
              <Text style={styles.text}>Home</Text>
            </Pressable>
    </View>
</View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: 'orange',
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    repetitions: {
      fontSize: 24,
      fontWeight: 'bold',
  },
});

export default SitUps;