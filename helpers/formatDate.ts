export const formatMonth = (month: number, year: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const parsedMonth = months[month];
  return `${parsedMonth} ${year}`;
};

export const formatDay = (day: string) => {
  const date = new Date(day);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = days[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();

  return {
    dayOfWeek,
    dayOfMonth,
  };
};
