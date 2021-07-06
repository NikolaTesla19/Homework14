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
  let arr1 = [];
  let arr2 = [];
  for(let key in obj1){
    arr1.push([key, obj1[key]]);
  }
  for(let key in obj2){
    arr2.push([key, obj2[key]]);
  }
  if ((arr1.length - arr2.length) > 0) {
    comparisonOfArr(arr1, arr2);
  }else{
    comparisonOfArr(arr2, arr1);
  }
}
function comparisonOfArr(arr1, arr2){
  let statusOfArr = true;
  for (let i = 0; i < (arr1.length - arr2.length); i++) {
    arr2.push([undefined, undefined]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let n = 0; n < arr1[i].length; n++){
      if (arr1[i][n] !== arr2[i][n]) {
        statusOfArr = false;
      }
    }
  }
}
comparison(objFirst1, objFirst2);
comparison(objSecond1, objSecond2);
//-----------------------------------------------2задание---------------------------------------------------------
function expandedForm(number){
  let arr = [];
  let i = 1;
  while ((number * 10) >= Math.pow(10, i)) {
    arr.unshift(number % Math.pow(10, i));
    number = number - (number % Math.pow(10, i));
    i++;
  }
  let quantity = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    }
    if (i == (arr.length - 1)) {
      quantity =  quantity + arr[i];
    }else {
      quantity =  quantity + arr[i] + ' + ';
    }
  }
  console.log(quantity);
}
expandedForm(70304);
expandedForm(1037903);
expandedForm(802539);
