import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickButton() {
    setCount((a) => (a += 1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Hello World!</Text>
      <Text>
        <Greeting name="Abdallah" />
      </Text>
      <Button onPress={handleClickButton} title="Click Me"></Button>
      <Text>Count = {count}</Text>
      <StatusBar style="auto" />
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
  center: {
    alignItems: "center",
  },
  blue: {
    color: "blue",
    fontSize: 30,
  },
});
