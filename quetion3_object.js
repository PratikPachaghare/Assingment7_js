
const student = {
    name: 'pratik pachghare',
    age: 21,
    grade: 'A'
  };
  
  Object.preventExtensions(student);
  

  const extensibleStatus = Object.isExtensible(student);
  

  const teacher = {
    subject: 'Math'
  };
  

  Object.seal(teacher);
  

  const sealedStatus = Object.isSealed(teacher);
  

  console.log('Student object is extensible:', extensibleStatus); 
  console.log('Teacher object is sealed:', sealedStatus)