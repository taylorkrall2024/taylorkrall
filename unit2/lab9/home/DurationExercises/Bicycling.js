import * as React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import StopWatch from '../StopWatch';

const Bicycling = () => {

    const goHome = () => {
        navigation.navigate('HomeScreen');
      };

    return(
        <View style={styles.container}>
            <Text style = {styles.heading}>Bicycling</Text>
            <StopWatch/> {}
            <Pressable style={styles.button} onPress={goHome}>
            <Text style={styles.text}>Home</Text>
            </Pressable>
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
  });

export default Bicycling;