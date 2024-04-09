import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useState } from "react";
import { ButtonGroup, Button } from "@rneui/themed";
import dataSet from "./example.json";

const Stack = createNativeStackNavigator();
let correctAns = 0;
let maxQuestionID = dataSet.length - 1;
// const [correctAns,setCorrectAns] = useState(0)
// const [incorrectAns,setIncorrectAns] = useState(0)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={Question} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  correctAns = 0;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: "2rem",
          padding: "1rem",
        }}
      >
        Welcome to Color Quiz App!
      </Text>
      <Button
        onPress={() =>
          navigation.navigate("Questions", { questions: dataSet, idx: 0 })
        }
      >
        Go to Questions
      </Button>
    </View>
  );
}

export function Summary({ route, navigation }) {
  function displayQuestion(question) {
    let choices = [];
    let correctChoices = question.correct; // this can be a number or an array
    // if there is just one correct answer
    if (typeof correctChoices == "number") {
      for (let i = 0; i < question.choices.length; i++) {
        // for every question, we will appdend a new element to the choices arr and color green if that was the correct answer
        if (i == correctChoices) {
          choices.push(
            <p
              key={question.prompt + "-" + i}
              style={{ color: "green", padding: 0, margin: 0, fontWeight: 700 }}
            >
              {question.choices[i]}
            </p>
          );
        } else {
          choices.push(
            <p
              key={question.prompt + "-" + i}
              style={{ color: "red", padding: 0, margin: 0, fontWeight: 700 }}
            >
              {question.choices[i]}
            </p>
          );
        }
      }
    } else {
      // there may be multiple correct answers
      for (let i = 0; i < question.choices.length; i++) {
        // for every question, we will appdend a new element to the choices arr and color green if that was the correct answer
        if (correctChoices.includes(i)) {
          choices.push(
            <p
              key={i}
              style={{ color: "green", padding: 0, margin: 0, fontWeight: 700 }}
            >
              {question.choices[i]}
            </p>
          );
        } else {
          choices.push(
            <p
              key={i}
              style={{ color: "red", padding: 0, margin: 0, fontWeight: 700 }}
            >
              {question.choices[i]}
            </p>
          );
        }
      }
    }
    return (
      // display header
      <Text
        h4
        style={{
          fontSize: "2rem",
          padding: "1rem",
        }}
      >
        {question.prompt}
        <br />
        {choices.map((k, l) => {
          return k;
        })}
      </Text>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        h1
        style={{
          fontSize: "2rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        Summary
      </Text>
      <Text
        h2
        testID="total"
        style={{
          fontSize: "2rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        Score : {correctAns} / {maxQuestionID + 1}
      </Text>
      {dataSet.map((item, index) => {
        return displayQuestion(item);
      })}
    </View>
  );
}
export function Question({ route, navigation }) {
  // we will render the questions differently depending on what type the questions are
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  let questions = <></>;
  switch (route.params.questions[route.params.idx].type.toLowerCase()) {
    case "true-false":
    case "multiple-choice":
      questions = (
        <ButtonGroup
          testID="choices"
          vertical={true}
          buttons={route.params.questions[route.params.idx].choices}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{
            margin: "2rem",
            marginBottom: 20,
          }}
        />
      );
      break;
    case "multiple-answer":
      questions = (
        <ButtonGroup
          testID="choices"
          buttons={route.params.questions[route.params.idx].choices}
          vertical={true}
          selectMultiple
          selectedIndexes={selectedIndexes}
          onPress={(value) => {
            setSelectedIndexes(value);
          }}
          containerStyle={{
            margin: "2rem",
            marginBottom: 20,
          }}
        />
      );
      break;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <center
        style={{
          width: "100%",
          margin: "2rem",
        }}
      >
        <Text
          style={{
            fontSize: "2rem",
            padding: "1rem",
          }}
        >
          {route.params.questions[route.params.idx].prompt}
        </Text>
        {questions}
        <Button
          testID="next-question"
          style={{
            margin: "2rem",
          }}
          onPress={() => {
            // TODO set up a way to validate user answers and iterate to the next question
            let answer;
            switch (
              route.params.questions[route.params.idx].type.toLowerCase()
            ) {
              case "true-false":
              case "multiple-choice":
                answer = selectedIndex;
                break;

              case "multiple-answer":
                answer = selectedIndexes;
                break;
            }

            // cheeky absolute checker
            if (
              answer.toString() ==
                route.params.questions[route.params.idx].correct.toString() ||
              (typeof answer == "object" &&
                answer.sort().toString() ==
                  route.params.questions[route.params.idx].correct
                    .sort()
                    .toString())
            ) {
              // if the answer is correct
              correctAns++;
            }

            if (route.params.idx == maxQuestionID) {
              // if we are about to navigate out of bounds of the question dataset
              navigation.navigate("Summary");
            } else {
              navigation.navigate("Questions", {
                questions: route.params.questions,
                idx: ++route.params.idx,
              });
            }
          }}
        >
          Next Question{" "}
        </Button>
      </center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
