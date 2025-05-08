## What is the use of enums in TypeScript?

### Definition of enum: An enum is a special "class" that represents a group of constants (unchangeable variables).

### Types of enums: There are two types of enums:

- string
- numeric

## Numeric Enums - Default

By default typescript will initialize the first item's value 0 and then it will increment one after each one.

Example:

````ts
enum CardinalDirections {
North,
East,
South,
West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
```

````
