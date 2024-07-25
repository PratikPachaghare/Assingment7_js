const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];
  
// a. Add a new student
function addStudent(student) {
    students.push(student);
  }

// create student 
function createStudent(id1, name1,lastName1,age1,grade1){
    const obj = {id : id1,firstName : name1,lastName : lastName1,age : age1,grade : grade1}
    return obj;
}  
  
  //Update student information
function updateStudent(id, name) {
    let index;
    for(let i=0;i<students.length;i++){
        if(students[i].id===id1){
            index = i;
            students[i].name = name;
        }
    }
}
  
  //  Delete a student
function deleteStudent(id1) {
    let index;
    for(let i=0;i<students.length;i++){
        if(students[i].id===id1){
            index = i;
            students.splice(index, i);
        }
    }
}

  
  //List all students
function listAllStudents() {
    console.log(students);
  }
  
  //Find students by grade
function findStudentsByGrade(grade) {
    let index;
    for(let i=0;i<students.length;i++){
        if(students[i].grade===grade){
           return students[i];
        }
    }
}
  // Calculate average age
function calculateAverageAge() {
    let sum = 0;
    for(let i=0;i<students.length;i++){
        sum +=students[i].age;
    }
    return sum/students.length;
  }


// apply all function 

const student1 = createStudent(4,"sham","pachghare",16,"B"); 
addStudent(student1);

console.log(students)

deleteStudent(2);
console.log(students)

listAllStudents();

console.log(findStudentsByGrade("A"));


console.log(calculateAverageAge());




