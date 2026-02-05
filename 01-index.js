// Data structure
const studentsDatabase = ["jordan", "erick", "john", "michel"];

// Algorithm
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    // for() loop -> Linear search algorithm -> performance -> time complexity -> O(n)
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

// Invocation / Function Call
findStudent(studentsDatabase, "john");
