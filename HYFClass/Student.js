import person from './person'
export default class Student extends person{
  constructor(member){
    super(member.firstName, member.lastName)
  }
}
