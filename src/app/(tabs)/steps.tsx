import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Steps from "@/components/steps";
import StepsFormModal from "@/components/steps-form-modal";
import { globalStyles } from "@/styles/global";

const StepsScreen = () => {
  const [stepsGoal, setStepsGoal] = React.useState(1000);
  return (
    <View style={globalStyles.container}>
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
