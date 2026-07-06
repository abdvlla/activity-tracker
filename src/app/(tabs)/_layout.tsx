import { Tabs } from "expo-router";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="steps"
        options={{
          title: "Steps",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="arrow-up" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
