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

class Vehicle {
  private _make: string;
  private _year: number;
  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo() {
    return `Make: ${this._make}, Year ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }

  getModel() {
    return `Model: ${this._model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
//console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
//console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  return value * 2;
}
//console.log(processValue("hello")); // Output: 5
//console.log(processValue(10)); // Output: 20

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  products.sort((a, b) => a.price - b.price);
  return products[products.length - 1];
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Negative number not allowed"));
    }
  });
}

squareAsync(4).then(console.log); // Output after 1s: 16
//squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed

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
