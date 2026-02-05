// ===== Function ===== //

function createStudent(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };
}

function createAthlete(name, age, sport) {
  const student = createStudent(name, age); // reuse base student

  student.sport = sport;
  student.play = function () {
    console.log(`${this.name} plays ${this.sport}.`);
  };

  return student;
}

const s1 = createStudent("John", 20);
const s2 = createStudent("Alice", 22);
const a1 = createAthlete("Mike", 21, "Football");

const school = [s1, s2, a1];

school.forEach((student) => {
  student.greet();

  if (student.play) {
    // check if athlete
    student.play();
  }
});
