const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
  };
  
  for (const property of Object.keys(student)) {
    console.log(`${property}: ${student[property]}`);
  }

// second taks 


  function displayStudentInfo(student) {
    console.log("Student Information:");
    for (const property in student) {
      console.log(`${property}: ${student[property]}`);
    }
  }
  displayStudentInfo(student);
  
  