import { colors } from "@/styles/global";
import React from "react";
import {
  Alert,
  Keyboard,
  Modal,
  Pressable,
  View,
  Text,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";

type StepsFormModalProps = {
  stepsGoal: number;
  setStepsGoal: (goal: number) => void;
};

const StepsFormModal = ({ stepsGoal, setStepsGoal }: StepsFormModalProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [goalInput, setGoalInput] = React.useState("");

  function handleSubmit() {
    const parsed = parseInt(goalInput, 10);
    if (!parsed || parsed <= 0) {
      Alert.alert("Enter a valid number of steps.");
      return;
    }
    setStepsGoal(parsed);
    setGoalInput("");
    Keyboard.dismiss();
    setModalVisible(false);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              Set your step goal (current: {stepsGoal.toLocaleString()})
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setGoalInput}
              value={goalInput}
              placeholderTextColor={colors.muted}
              keyboardType="numeric"
              autoFocus
            />
            <Pressable style={styles.confirmButton} onPress={handleSubmit}>
              <Text style={styles.confirmButtonText}>Save goal</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.setGoalButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.setGoalButtonText}>Set steps goal</Text>
      </Pressable>
    </View>
  );
};

export default StepsFormModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setGoalButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  setGoalButtonText: {
    color: "#0a0a0a",
    fontWeight: "600",
    fontSize: 15,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "space-between",
  },
  modalCard: {
    margin: 40,
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 16,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  confirmButtonText: {
    color: colors.header,
    fontWeight: "600",
    fontSize: 16,
  },
  cancelText: {
    textAlign: "center",
    color: colors.muted,
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.border,
    color: "white",
  },
});
