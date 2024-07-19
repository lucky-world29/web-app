/*validation

collect data 

store into the local storage

Bind data from 

 */

/*
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

*/

let arrEmployees = [];
function add() {
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let phone = document.getElementById("txtPhone").value;
    let job = document.getElementById("txtJob").value;
    if (validate(name, email, phone, job)) {
        alert("Validation ok");
        /*
            - localstorage
            - Save Data to Local Storage
                localStorage.setItem(key, value);
            - Read Data from Local Storage
                let data = localStorage.getItem(key);
            - Remove Data from Local Storage
                localStorage.removeItem(key);
            - Remove All (Clear Local Storage)
                localStorage.clear();
            
        */

                
        let employee = {
            Name: name,
            Email: email,
            Phone: phone,
            Job: job,
        };
        arrEmployees = JSON.parse(localStorage.getItem("employees"));
        arrEmployees = arrEmployees == null ? [] : arrEmployees;
        arrEmployees.push(employee);
        localStorage.setItem("employees", JSON.stringify(arrEmployees));

        BindTable();
    }
}
function BindTable() {
    let employees = JSON.parse(localStorage.getItem("employees"));
    let data = "";
    if (employees != null && employees.length > 0) {
        for (let i = 0; i < employees.length; i++) {
            data += "<tr>";
            data += `<td>${i + 1}</td>`;
            data += `<td>${employees[i].Name}</td>`;
            data += `<td>${employees[i].Email}</td>`;
            data += `<td>${employees[i].Phone}</td>`;
            data += `<td>${employees[i].Job}</td>`;
            data += `<td><button onclick=editEmloyee(${i})>Edit</button>`;
            data += `<td><button onclick=deleteEmployee(${i})>Delete</button></td>`;
            data += "</tr>";
        }
    } else {
        data +=
            "<tr><td colspan='6'><h4 style='text-align:center'>No Record Found</h4></td></tr>";
    }

    document.getElementById("tabledata").innerHTML = data;
}
function validate(name, email, phone, job) {
    let flag = true;
    if (name == "") {
        alert("Please Enter Name");
        document.getElementById("txtName").focus();
        flag = false;
    } else if (email == "") {
        alert("Please Enter Email");
        document.getElementById("txtEmail").focus();
        flag = false;
    } else if (phone == "") {
        alert("Please Enter Phone");
        document.getElementById("txtPhone").focus();
        flag = false;
    } else if (job == "") {
        alert("Please Enter Job");
        document.getElementById("txtJob").focus();
        flag = false;
    }

    return flag;
}

function editEmloyee(index) {
    alert(index);
    let employees = JSON.parse(localStorage.getItem("employees"));
    let employee = employees[index];
    // console.log(employees);
    // console.log(employee);
    document.getElementById("txtName").value = employee.Name;
    document.getElementById("txtEmail").value = employee.Email;
    document.getElementById("txtPhone").value = employee.Phone;
    document.getElementById("txtJob").value = employee.Job;
    document.getElementById("hdnIndex").value = index;
    document.getElementById("btnAdd").setAttribute("style", "display:none");
    document.getElementById("btnUpdate").setAttribute("style", "display:block");
}

function update() {
    alert("Update button clicked");

    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let phone = document.getElementById("txtPhone").value;
    let job = document.getElementById("txtJob").value;
    let index = document.getElementById("hdnIndex").value;
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees[index].Name = name;
    employees[index].Email = email;
    employees[index].Phone = phone;
    employees[index].Job = job;

    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Record Updated Successfully !!");

    BindTable();
}
function deleteEmployee(index) {
    let response = confirm("Are you sure you want to delete record?");
    if (response) {
        let employees = JSON.parse(localStorage.getItem("employees"));
        let newEmplooyees = [];
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                newEmplooyees.push(employees[i]);
            }
        }
        localStorage.setItem("employees", JSON.stringify(newEmplooyees));
        BindTable();
    }
}
