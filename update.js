  // // function myrecordRemove(id){
  // //   let url = `http://localhost:3000/employees/${id}`;
  // //   fetch(url,{
  // //     method:"DELETE",
  // //   }).then((data) => {
  // //     console.log(data);
  // //     alert("record deleted");
      
  // //   }).catch((err) => {
  // //     alert("Error while deleting")
  // //   });
  // // }

  // function editRow(id) {
  //   document.getElementById(`id-${id}`).removeAttribute("readonly");
  //   document.getElementById(`name-${id}`).removeAttribute("readonly");
  //   document.getElementById(`designation-${id}`).removeAttribute("readonly");
  //   document.getElementById(`salary-${id}`).removeAttribute("readonly");
  //   document.getElementById(`contact-${id}`).removeAttribute("readonly");
  //   document.getElementById(`email-${id}`).removeAttribute("readonly");
  //   document.getElementById(`address-${id}`).removeAttribute("readonly");
  //   document.getElementById(`edit-${id}`).style.display = "none";
  //   document.getElementById(`save-${id}`).style.display = "inline";
  // }
  
  // function saveRow(id) {
  // let myid = document.getElementById(`id-${id}`).value;
  // let myname = document.getElementById(`name-${id}`).value;
  // let mydesignation = document.getElementById(`designation-${id}`).value;
  // let mysalary = document.getElementById(`salary-${id}`).value;
  // let mycontact = document.getElementById(`contact-${id}`).value;
  // let myemail = document.getElementById(`email-${id}`).value;
  // let myaddress = document.getElementById(`address-${id}`).value;

  
  //   let url = `http://localhost:3000/employees/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       Id: myid,
  //       Name: myname,
  //       Designation: mydesignation,
  //       Salary: mysalary,
  //       Contact: mycontact,
  //       Email: myemail,
  //       Address: myaddress,
  //     }),
  //     headers: {
  //       "Content-type": "application/json;charset=utf-8",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.ok);
  //       if (response.ok) {
  //         alert("Data updated successfully");
  //         dataShow();
  //       } else {
  //         throw new Error("Error while updating");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  
  // function myrecordRemove(id) {
  //   let url = `http://localhost:3000/employees/${id}`;
  
  //   fetch(url, {
  //     method: "DELETE",
  //   });
  //   alert("record deleted");
  //   // .then((data) => {
  //   //   console.log(data);
  //   //   return data.json();
  //   // })
  //   // .then((y) => {
  //   //   console.log(y);
  //   //   alert("Record deleted successfully");
  //   // });
  // }

  // async function dataShow() {
  //   let mytable = `
  //      <table>
  //        <tr>
  //     <th id="srno">Id</th>
  //     <th>Name</th>
  //     <th>Designation</th>
  //     <th>Salary</th>
  //     <th>Contact</th>
  //     <th>Email</th>
  //     <th>Address</th>
  //     <th>Action</th>
  //       </tr>
  //     `;
  
  //   let url = "http://localhost:3000/employees";
  
  //   let myobj = await fetch(url);
  //   console.log(myobj);
  
  //   let mydata = await myobj.json();
  //   console.log(mydata);
  

  //   mydata.map((key) => {
  //     mytable += `
  //      <tr>
  //      <td><input id="srno" type="text" value="${key.Id}" id="id-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Name}" id="name-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Designation}" id="designation-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Salary}" id="salary-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Contact}" id="contact-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Email}" id="email-${key.id}" readonly></td>
  //      <td><input id="data2"type="text" value="${key.Address}" id="address-${key.id}" readonly></td>
  //      <td>
  
  //      <a href="#" onclick="myrecordRemove('${key.id}')" class="button button-delete">Delete</a>
  //      <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
  //      <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" style="display:none">Save</a>
  //      </td>
  //      </tr>
  //     `;
  //   });
  
  //   mytable += `</table>`;
  //   document.getElementById("update").innerHTML = mytable;
  // }
  // dataShow();


  

  function editRow(id) {
    document.getElementById(`empid-${id}`).removeAttribute("readonly");
    document.getElementById(`name-${id}`).removeAttribute("readonly");
    document.getElementById(`designation-${id}`).removeAttribute("readonly");
    document.getElementById(`salary-${id}`).removeAttribute("readonly");
    document.getElementById(`contact-${id}`).removeAttribute("readonly");
    document.getElementById(`email-${id}`).removeAttribute("readonly");
    document.getElementById(`address-${id}`).removeAttribute("readonly");
    
    // document.getElementById(`save-${id}`).style.display = "inline";
  }
  

  function saveRow(id) {
  let myid = document.getElementById(`empid-${id}`).value;
  let myname = document.getElementById(`name-${id}`).value;
  let mydesignation = document.getElementById(`designation-${id}`).value;
  let mysalary = document.getElementById(`salary-${id}`).value;
  let mycontact = document.getElementById(`contact-${id}`).value;
  let myemail = document.getElementById(`email-${id}`).value;
  let myaddress = document.getElementById(`address-${id}`).value;

  
    let url = `http://localhost:3000/employees/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({

       Id: myid,
       Name: myname,
       Designation: mydesignation,
       Salary: mysalary,
       Contact: mycontact,
       Email: myemail,
       Address: myaddress,
      
      }),
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    })
      .then((response) => {
        console.log(response.ok);
        if (response.ok) {
          alert("Data updated successfully");
          dataShow();
        } else {
          throw new Error("Error while updating");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  function myrecordRemove(id) {
    let url = `http://localhost:3000/employees/${id}`;
  
    fetch(url, {
      method: "DELETE",
    });
    alert("record deleted");
    // .then((data) => {
    //   console.log(data);
    //   return data.json();
    // })
    // .then((y) => {
    //   console.log(y);
    //   alert("Record deleted successfully");
    // });
  }
  
  async function dataShow() {
    let mytable = `
       <table>
         <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Designation</th>
      <th>Salary</th>
      <th>Contact</th>
      <th>Email</th>
      <th>Address</th>
      <th>Action</th>
         </tr>
      `;
  
    let url = "http://localhost:3000/employees";
  
    let myobj = await fetch(url);
    console.log(myobj);
  
    let mydata = await myobj.json();
    console.log(mydata);
  
    mydata.map((key) => {
      // eno-c291 , nm-8ae6, city-8ae6,salary-8ae6 ,  myrecremove(8ae6)
  
      mytable += `
       <tr>

       <td><input class="srno" type="text" value="${key.Id}" id="empid-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Name}" id="name-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Designation}" id="designation-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Salary}" id="salary-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Contact}" id="contact-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Email}" id="email-${key.id}" readonly></td>
       <td><input class="data2" type="text" value="${key.Address}" id="address-${key.id}" readonly></td>

       <td>
       <a href="#" onclick="myrecordRemove('${key.id}')" class="button button-delete">Delete</a>
       <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
       <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" >Save</a>
       </td>
       </tr>
      `;
    });
    
    mytable += `</table>`;
    document.getElementById("update").innerHTML = mytable;
  }
  dataShow();
  