async function datashow() {
  let table = `
  
  <table>
  <h1>Employees Data</h1> 
    <tr>
      <th>Id</th>
      <th class ="name">Name</th>
      <th class ="name">Designation</th>
      <th class ="name">Salary</th>
      <th class ="name">Contact</th>
      <th class ="name">Email</th>
      <th class ="name">Address</th>
    </tr>
  `;

let url ="http://localhost:3000/employees";
let myobj = await fetch(url);

// console.log(myobj);
let data = await myobj.json();// converts mydata from response object to json  
// console.log(data);
data.map((key)=>{
  table +=`
  <tr>
    <td>${key.Id}</td>
    <td>${key.Name}</td>
    <td>${key.Designation}</td>
    <td>${key.Salary}</td>
    <td>${key.Contact}</td>
    <td>${key.Email}</td>
    <td>${key.Address}</td>
  </tr>
  `;
});
table +=`</table>`;
document.getElementById("table2").innerHTML = table; 
}

datashow();








// function fun(){
//   document.getElementById("onclick").style.backgroundColor="white";  
//   document.body.style.backgroundColor="white"; 
//   document.getElementById("onclick2").style.backgroundColor="white";
   
//  //  document.getElementById("head").style.backgroundColor="red"                       
// }
// function fun1(){
// document.getElementById("onclick").style.backgroundColor="rgb(23,24,33)";  
// document.body.style.backgroundColor="rgb(23,24,33)"; 
// document.getElementById("onclick2").style.backgroundColor="rgb(23,24,33)"; 
// //  document.getElementById("head").style.backgroundColor="red"                       
// }
