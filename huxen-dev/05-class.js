// ===== Class ===== //

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Athlete extends Student {
  constructor(name, age, sport) {
    super(name, age);
    this.sport = sport;
  }

  play() {
    console.log(`${this.name} plays ${this.sport}.`);
  }
}

const s1 = new Student("John", 20);
const s2 = new Student("Alice", 22);
const a1 = new Athlete("Mike", 21, "Football");

const school = [s1, s2, a1];

school.forEach((student) => {
  student.greet(); // all can greet

  // If the student is an Athlete, let them play
  if (student instanceof Athlete) {
    student.play();
  }
});
