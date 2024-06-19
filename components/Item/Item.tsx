import { View, Text, StyleSheet } from "react-native";
import type { Action, Customer } from "@/app/models/ChallengeData";
import { MapPinIcon } from "react-native-heroicons/solid";

interface Props {
  item: Action;
  customer: Customer;
}

const STATUS_COLOR = {
  Completed: "#00B47D",
  Scheduled: "#006A4B",
  Unscheduled: "#011638",
};

const STATUS = {
  COMPLETED: "Completed",
  SCHEDULED: "Scheduled",
  UNSCHEDULED: "Unscheduled",
};

const Item = ({ item, customer }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: STATUS_COLOR[item.status],
      paddingHorizontal: 16,
      paddingVertical: 9,
      borderRadius: 4,
    },
    name: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 16,
      fontFamily: "Lato",
    },
    vendorName: {
      fontSize: 12,
      color: "#fff",
      fontFamily: "Lato",
    },
    street_container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
    street: {
      fontSize: 12,
      color: "#fff",
      fontFamily: "Lato",
    },
    vendor_phoneNumber: {
      fontSize: 12,
      color: "#fff",
      fontFamily: "Lato",
    },
    status: {
      fontSize: 12,
      color: "#fff",
      fontFamily: "Lato",
    },
    start_end: {
      fontSize: 12,
      color: "#fff",
      fontFamily: "Lato",
    },
    status_container: {
      flex: 1,
      flexDirection: "row",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      {item.vendor && (
        <>
          <Text style={styles.vendorName}>{item.vendor?.vendorName}</Text>
          <Text style={styles.vendor_phoneNumber}>
            {item.vendor?.phoneNumber}
          </Text>
        </>
      )}
      <View style={styles.street_container}>
        <MapPinIcon color={"white"} width={12} />
        <Text style={styles.street}>{customer.street}</Text>
      </View>
      <View style={styles.status_container}>
        {item.status !== STATUS.UNSCHEDULED && (
          <Text style={styles.status}>{item.status}</Text>
        )}
        {item.status === STATUS.SCHEDULED && (
          <>
            <Text style={styles.start_end}> {item.arrivalStartWindow} -</Text>
            <Text style={styles.start_end}> {item.arrivalEndWindow}</Text>
          </>
        )}
        {item.status === STATUS.UNSCHEDULED && (
          <Text style={styles.start_end}>Schedule date & time TBD</Text>
        )}
      </View>
    </View>
  );
};

export default Item;
