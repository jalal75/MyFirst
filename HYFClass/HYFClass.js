// import Student from './Student'
// import Teacher from './Teacher'
// export default class HYFClass {
//   constructor(members){
//     this.members= members || []
//     let membersIsArray = this.members instanceof Array
//     if (!membersIsArray){
//       throw new Error ('members should be an array')
//     }
//   }
// addTeacher(members) {
//   this.members.push(new Teacher(members.firstName, members.lastName))
// }
// addStudent(members){
//   this.members.push(new Student(members))
// }
// getAllTeacher(){
// return  this.members.filter(member => member instanceof Teacher)
// }
// getAllStudents(){
// return  this.members.filter(member => member instanceof Student)
//
// }
// }
 function cube(x) {
  return x * x * x;
}
export default cube;
