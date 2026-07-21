import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { colors, globalStyles } from "@/styles/global";
import HomeHeader from "@/components/home-header";

const App = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>FitnessTracker</Text>
      <HomeHeader />
      <Text style={globalStyles.sectionTitle}>Today's Activities: </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
