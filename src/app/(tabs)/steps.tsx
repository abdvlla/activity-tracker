import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Steps from "@/components/steps";
import StepsFormModal from "@/components/steps-form-modal";

const StepsScreen = () => {
  const [stepsGoal, setStepsGoal] = React.useState(1000);
  return (
    <View style={styles.container}>
      <Steps stepsGoal={stepsGoal} />
      <StepsFormModal stepsGoal={stepsGoal} setStepsGoal={setStepsGoal} />
    </View>
  );
};

export default StepsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
