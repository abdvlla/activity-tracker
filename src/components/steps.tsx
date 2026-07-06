import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pedometer } from "expo-sensors";
import { colors } from "@/app/theme";

type StepsProps = {
  stepsGoal: number;
};

const Steps = ({ stepsGoal }: StepsProps) => {
  const [isPedometerAvailable, setIsPedometerAvailable] =
    React.useState("checking");
  const [pastStepCount, setPastStepCount] = React.useState(0);
  const [currentStepCount, setCurrentStepCount] = React.useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));
    if (isPedometerAvailable) console.log("Pedometer available");

    if (isAvailable) {
      const end = new Date();
      const start = new Date();

      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  React.useEffect(() => {
    let subscription: any;
    subscribe().then((sub) => {
      subscription = sub;
    });
    return () => subscription && subscription.remove();
  }, []);

  const progress = Math.min(currentStepCount / stepsGoal, 1);

  return (
    <View style={styles.screen}>
      <Text style={styles.headerLabel}>Today</Text>

      <View style={styles.card}>
        <Text style={styles.bigNumber}>
          {currentStepCount.toLocaleString()}
        </Text>
        <Text style={styles.subLabel}>
          of {stepsGoal.toLocaleString()} steps
        </Text>

        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progress * 100}%` }]} />
        </View>

        <Text style={styles.metaText}>
          Last 24h: {pastStepCount.toLocaleString()} steps
        </Text>
      </View>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  headerLabel: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: "500",
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
  },
  bigNumber: {
    fontSize: 48,
    fontWeight: "700",
    color: colors.text,
  },
  subLabel: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
    marginBottom: 20,
  },
  track: {
    width: "100%",
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.track,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: colors.accent,
    borderRadius: 5,
  },
  metaText: {
    marginTop: 16,
    fontSize: 13,
    color: colors.textMuted,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
