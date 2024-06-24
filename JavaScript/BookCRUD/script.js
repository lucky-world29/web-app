let arrBook =  [];
function click(){
    alert("hi");

    let BName = document.getElementById("bname").value;
    let BAuthor = document.getElementById("bauthor").value;
    let BPrice = document.getElementById("bprice").value;
    let BImage = document.getElementById("bimage").value;

    let book = {
        BookName: BName,
        BookAuthor: BAuthor,
        BookPrice: BPrice,
        BookImage: BImage,
    };

        localStorage.setItem("BookName",BName);
        localStorage.setItem("BookAuthor",BAuthor);

        arrBook = JSON.parse(localStorage.getItem("books"));
        arrEmployees = arrEmployees == null ? [] : arrEmployees;
        arrEmployees.push(employee);
        localStorage.setItem("employees", JSON.stringify(arrEmployees));

        
        BindTable();
}

function BindTable() {
    let books = JSON.parse(localStorage.getItem("books"));
    let data = "";
    if (books != null && books.length > 0) {
        for (let i = 0; i < books.length; i++) {
            data += "<tr>";
            data += `<td>${i + 1}</td>`;
            data += `<td>${books[i].Name}</td>`;
            data += `<td>${books[i].Email}</td>`;
            data += `<td>${books[i].Phone}</td>`;
            data += `<td>${books[i].Job}</td>`;
            //data += `<td><button onclick=editEmloyee(${i})>Edit</button>`;
            //data += `<td><button onclick=deleteEmployee(${i})>Delete</button></td>`;
            data += "</tr>";
        }
    } else {
        data +=
            "<tr><td colspan='6'><h4 style='text-align:center'>No Record Found</h4></td></tr>";
    }

    document.getElementById("tabledata").innerHTML = data;
}

function editEmloyee(index) {
    alert(index);
    let books = JSON.parse(localStorage.getItem("employees"));
    let book = books[index];
    // console.log(employees);
    // console.log(employee);
    document.getElementById("txtName").value = book.Name;
    document.getElementById("txtEmail").value = book.Email;
    document.getElementById("txtPhone").value = book.Phone;
    document.getElementById("txtJob").value = book.Job;
    document.getElementById("hdnIndex").value = index;
    document.getElementById("btnAdd").setAttribute("style", "display:none");
    document.getElementById("btnUpdate").setAttribute("style", "display:block");
}


