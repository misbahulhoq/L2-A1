function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// console.log(formatString("Hello, World!"));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.map((array) => result.push(...array));
  return result;
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

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
