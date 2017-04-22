export default class person{
  constructor(firstName, lastName){
    this.firstName=firstName || 'not set'
    this.lastName=lastName || 'not set'
  }

getfirstName(){
  return this.firstName
}
getlastName(){
  return this.lastName
}
}
