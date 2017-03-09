var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || 'Full Time';
    this.printEmployeeForm = function (){
      return ('Name:'+ this.name +  ',  '  +'Job Title:'+ this.jobTitle +  ',  ' +'Salary:'+ this.salary+  ',  '  +'Status:'+ this.status);
    }

}
var employee1 = new Employee('Parker', 'Dog Trainer', '$500,000', 'Contract')
employee1.printEmployeeForm()
var employee2 = new Employee('Eric', 'Developer', '$600,000', 'Full Time')
employee2.printEmployeeForm();
var employee3 = new Employee('Jimmy', 'Developer', '$500,000,000', 'Part Time')
employee3.printEmployeeForm();

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
for (var i=0; i < employees.length; i++){
  console.log(employees[i].printEmployeeForm());
}

//EX 2
//
// var characterArray = [];
//
// function Character(characterClass, gender, strength){
//   this.characterClass = characterClass;
//   this.gender = gender;
//   this.strength = strength;
//   this.fight = function(){
//     console.log('You are fighting with a strength of ' + this.strength)
//   }
// }
//
// for(var i=0; i< 5; i++){
//   characterArray.push(new Character('Cleric', 'Eunich', 9000));
// }
