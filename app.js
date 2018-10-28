const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
];

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');
if (command === "add" ) {
  var patientName = prompt("Please enter the new patient name");
  //user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list.
  var newpatientName = patientName;
  patientList.push(newpatientName);
  console.log(patientList);
}

 else if (command === "delete") {
 console.log (patientList);
 var deletepatientName = prompt("To delete from list: Please enter the patient name");
 //user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.
 var index = patientList.indexOf(deletepatientName)
 patientList.splice(index, 1);
 console.log(patientList);

 } else if (command === "update") {
   console.log (patientList);
   var updatepatientName = prompt("Please enter the patient name that you want to update", patientList);
   var index = patientList.indexOf(updatepatientName);
   console.log (index);
   var newpatientName = prompt("Please update the patient name");
   //user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list.
   patientList[index] = newpatientName;
   console.log (patientList);

 } else if (command === "reorder") {
   console.log (patientList);
   const swap1 = prompt('In the list, who is the first patient that should be swapped?');
   const swap2 = prompt('In the list, who is the second patient that should be swapped?');

  alert(swap1 + ' and ' + swap2 + ' are to be swapped');
  for (let i = 0; i < patientList.length; i++) {
  if (patientList[i] === swap1) {position1 = i;}
  if (patientList[i] === swap2) {position2 = i;}
  }
  //user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, switch the two entered patients, and display the list.

  patientList.splice(position1,1, swap2);
  patientList.splice(position2,1, swap1);
  console.log (patientList);

} else if (command != "update", "delete", "add", "reorder") {
  var mistype = prompt("Please re-enter what would you like to do");
}
