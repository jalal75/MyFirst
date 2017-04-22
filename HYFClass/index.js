import HYFClass from './HYFClass';
var JS = new HYFClass([])
var jsmemberss = [
  {firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher'},
    {firstName: 'David', lastName: 'Furlong', type: 'teacher'},
    {firstName: 'Ali', lastName: 'Barakat', type: 'teacher'},
    {firstName: 'Jad', lastName: 'Kadour', type: 'Student'}
]
jsmemberss.forEach(( members )=>{
  if(members.type === 'teacher'){
    JS.addTeacher( members )
  }else {
    JS.addStudent( members )

  }
})
console.log('All Teachers ', JS.getAllTeacher())
console.log('All Students ', JS.getAllStudents())
