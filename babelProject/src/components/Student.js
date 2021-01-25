class Student
{

    constructor(){
        
        this.students = []
        
    }

    // class functions/methods
    addStudent(student)
    {
        this.students.push(student)
    }

    getStudents()
    {
        return this.students
    }

    getStudentById(id)
    {
        let filterStudent = this.students.filter((student)=>{
           return student.id === id
        })

        if(filterStudent.length>0){
            return filterStudent[0]
        }else{
            return false
        }
    }

    deleteStudentById(id)
    {
        let filterStudents = this.students.filter((student)=>{
           return student.id !== id
        })

        this.students = filterStudents
    }
}


export default Student