/*validation

collect data 

store into the local storage

Bind data from 

 */

function add() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let job = document.getElementById("job").value;


    if (validate(name, email, phone, job)) {
    alert("validation ok");
    }


    let employee = {
        Name : name,
        Email : email,
        Phone : phone,
        Job : job,
    }
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Job", job);
}
function BindTable() {
    let name = localStorage.getItem("Name");
    let email = localStorage.getItem("Email");
    let phone = localStorage.getItem("Phone");
    let job = localStorage.getItem("Job");
    alert(name);

    let data = '<tr>';
    data +=`<td>1</td>`;
    data +=`<td>${name}</td>`;
    data +=`<td>${email}</td>`;
    data +=`<td>${phone}</td>`;
    data +=`<td>${job}</td>`;
    data +=`<td>`;
    data +="<button >Edit</button>";
    data +="<button>Delete</button>";
    data +="</td>";
    data +="</tr>;";
    document.getElementById('tabledata').innerHTML=data;
}

function validate(name, email, phone, job) {
    let flag = true;
    if (name == "") {
    alert("please enter a name");
    document.getElementById("name").focus();
    flag = false;
    }

    if (email == "") {
    alert("please enter your email");
    document.getElementById("email").focus();
    flag = false;
    }

    if (phone == "") {
    alert("please enter a phone number");
    document.getElementById("phone").focus();
    flag = false;
    }

    if (job == "") {
    alert("please enter your job");
    document.getElementById("job").focus();
    flag = false;
    }

    return flag;
}
