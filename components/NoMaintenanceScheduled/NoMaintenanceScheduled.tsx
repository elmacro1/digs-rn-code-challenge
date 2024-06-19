import { View, Text, StyleSheet } from "react-native";

const NoMaintenanceScheduled = () => (
  <View style={styles.container}>
    <Text style={styles.name}>No Maintenance Scheduled</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#848FA5",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginLeft: 32,
  },
  name: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Lato",
  },
});

export default NoMaintenanceScheduled;
