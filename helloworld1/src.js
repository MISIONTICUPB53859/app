
const obtenerStudents=(name, score)=>{
    return STUDENTS.filter(student=> {
        return student.score >= 11
    });
}
module.exports.obtenerStudents=obtenerStudents;