import { StyleSheet } from "react-native";

export const colors = {
  background: "#0a0a0a",
  header: "#242444",
  surface: "#2a2a4a",
  card: "#272727",
  border: "rgba(255, 255, 255, 0.10)",
  track: "#34344a",
  primary: "#e5e5e5",
  accent: "#4fc3f7",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  muted: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginVertical: 15,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
  },
});
