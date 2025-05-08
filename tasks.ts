function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

console.log(formatString("Hello, World!"));

enum Day {
  Monday = "Weekday",
  Tuesday = "Weekday",
  Wednesday = "Weekday",
  Thursday = "Weekday",
  Friday = "Weekday",
  Saturday = "Weekend",
  Sunday = "Weekend",
}

function getDayType(day: Day): string {
  return day;
}
