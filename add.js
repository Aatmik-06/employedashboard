// try is used to write code what we have to perform 
// we will also write code in catch so if there is error in try so catch will run 

  
document.getElementById('btn').addEventListener('click',insert);

async function insert(){
  try{
    let myId =document.getElementById("id").value;
    let myName =document.getElementById("name").value;
    let myDesignation =document.getElementById("designation").value;
    let mySalary =document.getElementById("salary").value;
    let myContact =document.getElementById("contact").value;
    let myEmail =document.getElementById("email").value;
    let myAddress =document.getElementById("address").value;

    let url  = 'http://localhost:3000/employees';

    let response = await fetch(url,{
        method: "POST",
        body:JSON.stringify({
            Id:myId,
            Name:myName,
            Designation:myDesignation,
            Salary:mySalary,
            Contact:myContact,
            Email:myEmail,
            Address:myAddress
        }),
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    console.log(response);
    let data = await response.json();
    console.log(data);
    alert('Data Successfully added')

  }catch(error){
    console.error("Error:",error);
    alert('Error while adding data')
  }
}

