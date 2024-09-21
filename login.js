document.getElementById("login").addEventListener("click",add);

function add(e){
    let username1 = "Aadi";
    let password1 = "Aadi@2005";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username1");
    localStorage.setItem("password1");
    let storedusername = localStorage.getItem("username1");
    let storedpassword = localStorage.getItem("password1");

    if (username === storedusername && password === storedpassword) {
        alert(`Login Successful , welcome ${storedusername}`);
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect details");
      }
}