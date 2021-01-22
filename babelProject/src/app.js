// import Student class

import Student from './components/Student'

const student1 = new Student()

console.log(student1.students)


student1.addStudent({
    id: 1,
    name: "vivek",
    rollNumber: 1
})

student1.addStudent({
    id: 2,
    name: "aala",
    rollNumber: 2
})

console.log(student1.students)

// student1.listStudents()

// student1.getStudentById()