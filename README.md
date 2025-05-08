# What is the use of enums in TypeScript?

### Definition of enum: An enum is a special "class" that represents a group of constants (unchangeable variables).

### There are two types of enums:

- string
- numeric

## Numeric Enums - Default

By default typescript will initialize the first item's value 0 and then it will increment one after each one.
The values of each item in the enum will act like an array's index by default. So the first item's value will be 1 and the second will hold 2 , so on and so forth.

Example:

```ts
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let northDirection = CardinalDirections.North;
console.log(northDirection); // logs 0
let eastDirection = CardinalDirections.East;
console.log(eastDirection); //logs 1
```

## Numeric Enums - Initialized

You can set the value of the first numeric enum and have it auto increment from that.
Example:

```ts
enum CardinalDirections {
  North = 2,
  East,
  South,
  West,
}
console.log(CardinalDirections.North); // logs 2
console.log(CardinalDirections.West); // logs 5
```

## Numeric Enums - Fully Initialized

You can assign unique numbers for each item in the enum.
Example:

```ts
enum PhoneBook {
  FriendOne = 1234,
  FriendTwo = 2345,
  FriendThree = 4567,
  FriendFour = 5678,
}
console.log(PhoneBook.FriendTwo); // logs 2345
```

## String Enums

```ts
enum Details {
  Name = "Smith",
  Profession = "Cricketer",
  Country = "Australia",
}
// logs "Smith"
console.log(Details.Name);
// logs "Australia"
console.log(Details.Country);
```

# What are some differences between interfaces and types in TypeScript?

### type can be used for both primitives and non-primitives.

```ts
// used for primitive data types.
type str = string;
const name: str = "Nobel";

// used for an object type.
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Steve Smith",
  age: 35,
};
```

### interface can only be used to define the shape of non primitive data types.

```ts
// valid
interface Person {
  name: string;
  age: number;
}
const person: Person = {name: "Glenn Maxwell", age: 35}

// not valid
interface PersonOne = string; //gives error
```

### type can not be declared twice but interface can be declared twice.

Double type declaration will give error but double interface declaration will merge them both.

```ts
// Person is declared once.
type Person = {};

// The following delcaration will give error.
type Person = {}; //gives error.

interface IPerson {
  name: string;
}
interface IPerson {
  age: number;
}
// The two interfaces will get merged and act like as:
interface IPerson {
  name: string;
  age: number;
}
```

### type supports union and intersections whereas interface doesn't

Example:

```ts
type User = { name: string };
// intersection types
type Admin = User & { role: "admin" };
// union types
type Guest = User | { role: "guest" };

//But intersection doesn't support this two features.
```
