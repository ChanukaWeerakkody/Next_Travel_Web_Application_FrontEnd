var baseurlUser = "http://localhost:8080/";

$(document).ready(function() {
    $("#txtUserId").hide();
});

$("#btnSaveCustomer").click(function () {
    addUser();
})

function addUser() {
    var vData1 = new FormData();

    let frontViewNIC = $(".frontViewNIC")[0].files[0];
    let backViewNIC = $(".backViewNIC")[0].files[0];

    console.log(frontViewNIC)
    console.log(backViewNIC)

    let frontFileNameV = $(".frontViewNIC")[0].files[0].name;
    let backFileNameV = $(".backViewNIC")[0].files[0].name;

    let userId = $("#txtUserId").val();
    let username = $("#txtUsername").val();
    let password = $("#txtPassword").val();
    let nicNumber = $("#txtNicNumber").val();
    let age = $("#txtAge").val();
    let gender = $("#txtGender").val();
    let email = $("#txtEmailUser").val();
    let address = $("#txtaddressUser").val();
    let phoneNumber = $("#txtPhoneNumber").val();

    let imageV1 = frontFileNameV;
    let imageV2 = backFileNameV;

    var userDTO = {
        userId:userId,
        username:username,
        password:password,
        nicNumber:nicNumber,
        age:age,
        gender:gender,
        email:email,
        address:address,
        phoneNumber:phoneNumber,

        image1: "uploads/" + imageV1,
        image2: "uploads/" + imageV2,
    }

    vData1.append("userFiles", frontViewNIC)
    vData1.append("userFiles", backViewNIC)

    vData1.append("user", new Blob([JSON.stringify(userDTO)], {type: "application/json"}))

    console.log(userDTO);

    $.ajax({
        url: baseurlUser + "user",
        method: "POST",
        async: true,
        contentType: false,
        processData: false,
        data: vData1,
        success: function (resp) {
            if (resp.status === 200) {
                alert(resp.message)
            } else {
                alert('Added Successfully!');
            }
        },
        error: function (error) {
            console.log(error);
        }
    })

}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a POST request to the Spring Boot backend
    fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            if (response.status === 200) {
                // Successful login, redirect or perform desired action
                alert("Welcome!");

            } else {
                // Handle authentication failure
                alert("Wrong")
            }
        });

    console.log(username+password);
});