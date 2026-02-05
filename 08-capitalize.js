const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalize("Hello there everybody."));
console.log(capitalize("isaac newton"));

// isaac newton -> isaac newton -> ['isaac', 'newton'] -> 'I' + 'saac' -> ['Isaac' + 'Newton'] -> Isaac Newton
