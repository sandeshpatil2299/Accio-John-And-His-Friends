/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers= arr.filter((value) => value.profession === "developer").map((value) => value);
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) => {
    if(value.profession === "developer") {
      console.log(value);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newData= {id: 4, name: "sandesh", age: "27", profession: "developer"};
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const noAdmin= arr.filter((value) => value.profession !== "admin");
  console.log(noAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newValues= [
    { id: 3, name: "karen", age: "19", profession: "admin" },
    { id: 4, name: "karen", age: "19", profession: "admin" },
    { id: 5, name: "karen", age: "19", profession: "admin" },
  ]

  arr.concat(newValues);
  console.log(arr);
}
