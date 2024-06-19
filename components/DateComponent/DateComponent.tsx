import { View, Text, StyleSheet } from "react-native";
import { formatDay } from "@/helpers/formatDate";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/outline";

interface Props {
  date: string | null;
  status: string;
}

const STATUS = {
  COMPLETED: "Completed",
  SCHEDULED: "Scheduled",
  UNSCHEDULED: "Unscheduled",
};

const DateComponent = ({ date, status }: Props) => {
  const colorScheme = useColorScheme();
  const formattedDay = date ? formatDay(date) : null;

  const styles = StyleSheet.create({
    container: {
      width: 22,
      gap: 8,
      alignItems: "center",
    },
    dayOfWeek: {
      color: Colors[colorScheme ?? "light"].text,
      fontFamily: "Lato",
      fontSize: 9,
    },
    dayOfMonth: {
      color: Colors[colorScheme ?? "light"].text,
      fontFamily: "Lato",
      fontSize: 20,
      fontWeight: "bold",
    },
    tbd: {
      color: Colors[colorScheme ?? "light"].text,
      fontFamily: "Lato",
      fontSize: 9,
    },
  });

  return (
    <View style={styles.container}>
      {formattedDay ? (
        <>
          <Text style={styles.dayOfWeek}>{formattedDay.dayOfWeek}</Text>
          <Text style={styles.dayOfMonth}>{formattedDay.dayOfMonth}</Text>
          {status === STATUS.COMPLETED ? (
            <CheckCircleIcon color="#00B47D" />
          ) : (
            <ClockIcon color="#00B47D" />
          )}
        </>
      ) : (
        <Text style={styles.tbd}>TBD</Text>
      )}
    </View>
  );
};

export default DateComponent;
