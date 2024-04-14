//importing
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const data = [
        { key: 'Duration', title: 'Duration Exercises' },
        { key: 'Repetition', title: 'Repetition Exercises' },
      ]

    const renderItem = ({ item }) => (
        <Pressable style={styles.button} onPress={() => navigation.navigate(item.key)}>
          <Text style={styles.text}>{item.title}</Text>
          </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

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

export default HomeScreen;