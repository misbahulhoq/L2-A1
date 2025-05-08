## What is the use of enums in TypeScript?

### Definition of enum: An enum is a special "class" that represents a group of constants (unchangeable variables).

### Types of enums: There are two types of enums:

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
  North = 1,
  East,
  South,
  West,
}
console.log(CardinalDirections.North); // logs 1
console.log(CardinalDirections.West); // logs 4
```
