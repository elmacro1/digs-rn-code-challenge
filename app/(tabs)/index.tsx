import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  SectionList,
} from "react-native";
import { useEffect, useState } from "react";
import type { Action, Customer } from "../models/ChallengeData";
import Item from "@/components/Item/Item";
import NoMaintenanceScheduled from "@/components/NoMaintenanceScheduled/NoMaintenanceScheduled";
import DateComponent from "@/components/DateComponent/DateComponent";
import { getCostumerCalendar } from "@/services/getCostumerCalendar";
import { formatMonth } from "@/helpers/formatDate";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Calendar() {
  const colorScheme = useColorScheme();
  const [calendarData, setCalendarData] = useState<
    {
      title: string;
      data: Action[];
    }[]
  >();
  const [customer, setCustomer] = useState<Customer>();

  const onInit = async () => {
    const data = await getCostumerCalendar();

    const dataMap = data.calendar.map((item) => ({
      title: formatMonth(item.month, item.year),
      data: item.actions.sort((a, b) => {
        const dateA = new Date(a.scheduledDate!);
        const dateB = new Date(b.scheduledDate!);

        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      }),
    }));

    setCustomer(data.customer);
    setCalendarData(dataMap);
  };

  useEffect(() => {
    onInit();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: Colors[colorScheme ?? "light"].background,
    },
    header: {
      paddingVertical: 25,
      backgroundColor: Colors[colorScheme ?? "light"].background,
      textAlign: "left",
      fontFamily: "Lato",
      fontSize: 16,
      fontWeight: "bold",
      color: Colors[colorScheme ?? "light"].text,
    },
    item_container: {
      marginVertical: 2,
      flex: 1,
      flexDirection: "row",
      gap: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {calendarData && customer && (
        <SectionList
          sections={calendarData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item_container}>
              <DateComponent
                date={item.scheduledDate || null}
                status={item.status}
              />
              <Item item={item} customer={customer!} />
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.header}>{section.title}</Text>
              {!section.data.length && <NoMaintenanceScheduled />}
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
}
