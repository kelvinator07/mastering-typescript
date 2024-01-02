// Array of numbers
const oddNumbers: number[] = [1, 3, 5, 7, 9]; 

// Array of strings
const cities: string[] = ["Amsterdam", "London", "Istanbul"];

// Generic array type
const names: Array<string> = ["Hermione", "Ron", "Harry"];

// Mixed typed array
const mixedArray: (string | number)[] = ["Dumbledore", 3, "Severus Snape", 7];

// Access the first element
const firstNumber: number = oddNumbers[0];

// Access the second element
const secondCity: string = cities[1];

cities[0] = "Edinburgh"; // Change the first element to "Edinburgh"

// Tuple representing (x, y) coordinates
const coordinates: [number, number] = [5.2, 6.9];
