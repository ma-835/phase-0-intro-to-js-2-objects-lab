const employee = {
name: "john",
streetAddress:"river",
}

function updateEmployeeWithKeyAndValue(employee,name,value) {
const nemployee = {...employee};
nemployee[name] =value;
return nemployee;
 }






function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,value){
employee[name] =value;
return employee;
}

function deleteFromEmployeeByKey(employee,name,value){
const nemployee = {...employee};
nemployee[name] =value;
delete nemployee.name
return nemployee;
}
 
function destructivelyDeleteFromEmployeeByKey(employee,name,value){
delete employee.name
return employee;
}