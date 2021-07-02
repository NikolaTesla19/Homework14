const objFirst1 = {
name: "Benny",
phone: "3325558745",
email: "benny@edabit.com"
}
// Второй аргумент
const objFirst2 = {
name: "Jason",
phone: "9853759720",
email: "jason@edabit.com"
}


// Первый аргумент
const objSecond1 = {
name: "Jason",
phone: "9853759720",
email: "jason@edabit.com"
}
// Второй аргумент
const objSecond2 = {
name: "Jason",
phone: "9853759720",
email: "jason@edabit.com"
}



function comparison (obj1, obj2){
  let  comparison= true;
  if (obj1.name !== obj2.name) {
    comparison = false;
  }
  if (obj1.phone !== obj2.phone) {
    comparison = false;
  }
  if (obj1.name !== obj2.name) {
    comparison = false;
  }
  console.log(comparison);
}
comparison(objFirst1, objFirst2);
comparison(objSecond1, objSecond2);
