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
                if (!$.isEmptyObject(temporaryOrderStore)) {
                    /*$("#vehicleRentalViewForm").css("display", "block");
                    $("#hotelRentalViewForm").css("display", "none");
                    $("#hotelPackageRentalViewForm").css("display", "none");*/
                    //$("#guideRentalViewForm").css("display", "none");
                    $("#userCart").css("display", "block");

                }else if($.isEmptyObject(temporaryGuideStore)){
                    /*$("#vehicleRentalViewForm").css("display", "none");
                    $("#hotelRentalViewForm").css("display", "none");
                    $("#hotelPackageRentalViewForm").css("display", "none");*/
                    $("#guideRentalViewForm").css("display", "none");
                    $("#userCart").css("display", "block");

                }else if(!$.isEmptyObject(temporaryHotelStore)){
                    /*$("#hotelRentalViewForm").css("display", "block");
                    $("#vehicleRentalViewForm").css("display", "none");*/
                    //$("#guideRentalViewForm").css("display", "none");
                    //$("#hotelPackageRentalViewForm").css("display", "none");
                    $("#userCart").css("display", "block");

                } else if(!$.isEmptyObject(temporaryPackageStore)){
                    /*$("#hotelPackageRentalViewForm").css("display", "block");
                    $("#hotelRentalViewForm").css("display", "none");
                    $("#vehicleRentalViewForm").css("display", "none");*/
                    //$("#guideRentalViewForm").css("display", "none");
                    $("#userCart").css("display", "block");

                }else {
                    // Array is not null or empty
                    alert("Array is not null or empty");
                    $("#userCart").css("display", "block");
                }

                $("#logIn").css("display","none");
            } else {
                // Handle authentication failure
                alert("Wrong")
            }
        });

    console.log(username+password);
});


$("#btnAdminAddUser").click(function () {
    addUserAdmin();
})

function addUserAdmin() {
    var vData1 = new FormData();

    let frontViewFileV = $(".frontViewNic")[0].files[0];
    let backViewFileV = $(".backViewNic")[0].files[0];


    console.log(frontViewFileV)
    console.log(backViewFileV)


    let frontFileNameV = $(".frontViewNic")[0].files[0].name;
    let backFileNameV = $(".backViewNic")[0].files[0].name;


    let userId = $("#save-user-id").val();
    let username = $("#save-user-username").val();
    let password = $("#new_user_password").val();
    let age = $("#save-user-age").val();
    let contact = $("#save-user-contactNumber").val();
    let gender = $("#save-user-gender").val();
    let nic = $("#save-user-nic").val();
    let email = $("#save-user-email").val();
    let address = $("#save-user-address").val();



    let imageV1 = frontFileNameV;
    let imageV2 = backFileNameV;


    var userDTO = {
        userId:userId,
        username:username,
        password:password,
        age:age,
        phoneNumber:contact,
        gender:gender,
        nicNumber:nic,
        email:email,
        address:address,

        image1: "uploads/" + imageV1,
        image2: "uploads/" + imageV2,
    }

    vData1.append("userFiles", frontViewFileV)
    vData1.append("userFiles", backViewFileV)

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
//Bind events
function bindClickEventsUsers(){
    $("#userTB>tr").click(function (){
        let userId=$(this).children().eq(0).text();
        let username=$(this).children().eq(1).text();
        let password=$(this).children().eq(2).text();
        let age=$(this).children().eq(3).text();
        let contact=$(this).children().eq(4).text();
        let email=$(this).children().eq(5).text();
        let nic=$(this).children().eq(6).text();
        let gender=$(this).children().eq(7).text();
        let address=$(this).children().eq(8).text();
        let image1=$(this).children().eq(9).text();
        let image2=$(this).children().eq(10).text();


        $("#update-user-Id").val(userId);
        $("#update-user-username").val(username);
        $("#update-user-password").val(password);
        $("#update-user-age").val(age);
        $("#update-user-contact").val(contact);
        $("#update-user-email").val(email);
        $("#update-user-nic").val(nic);
        $("#update-user-gender").val(gender);
        $("#update-user-address").val(address);
        $("#user-frontViewNicUpdate").val(image1);
        $("#user-backViewNicUpdate").val(image2);

    });
}

loadAllUsers();
//Load All Users
function loadAllUsers(){
    $("userTB").empty();
    $.ajax({
        url: baseurlUser+"user",
        method: "GET",
        success:function (resp){
            for(const user of resp.data){
                let row = `<tr><td>${user.userId}</td><td>${user.username}</td><td>${user.password}</td><td>${user.age}</td>
                <td>${user.phoneNumber}</td><td>${user.gender}</td><td>${user.nicNumber}</td><td>${user.email}</td>
                <td>${user.address}</td><td>${user.image1}</td>
                <td>${user.image2}</td></tr>`;
                $("#userTB").append(row);
            }
            bindClickEventsUsers();
        }
    })
}


//Update User
$("#btnUpdateUser").click(function () {

    let userId = $("#update-user-Id").val();
    let username = $("#update-user-username").val();
    let password = $("#update-user-password").val();
    let age = $("#update-user-age").val();
    let contact = $("#update-user-contact").val();
    let email = $("#update-user-email").val();
    let nic = $("#update-user-nic").val();
    let gender = $("#update-user-gender").val();
    let address = $("#update-user-address").val();


    let image1=$("#user-frontViewNicUpdate").val();
    let image2=$("#user-backViewNicUpdate").val();



    var userView={
        userId:userId,
        username:username,
        password:password,
        age:age,
        phoneNumber:contact,
        email:email,
        nicNumber:nic,
        gender:gender,
        address:address,

        image1:image1,
        image2:image2,
    }

    $.ajax({
        url: baseurlUser + "user",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(userView),
        success: function (res) {
            // viewCars();
            /*loadCars("allCarDetail");*/
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert('Updated!');
                /*clearCarTextUpdate();*/
            }
        }

    });
});


//Delete User
$("#btnDeleteUser").click(function (){
    let userIdNew= $("#update-user-Id").val();
    console.log(userIdNew);
    $.ajax({
        url:baseurlUser+"user"+"?userId="+userIdNew,
        method:"DELETE",

        success:function (res){
            console.log(res);

            if (res.status === 200) {
                alert(res.message)
            } else {
                alert('Deleted!');

            }

        },
        error:function (ob,status,t){
            console.log(ob);
            console.log(status);
            console.log(t);
        }
    })
});






loadAllOrders();
//Load All Hotel Orders
function loadAllOrders(){
    $("ordersTB").empty();
    $.ajax({
        url: baseurlUser+"purchaseOrder",
        method: "GET",
        success:function (resp){
            for(const purchase of resp.data){
                let row = `<tr><td>${purchase.orderId}</td><td>${purchase.vehicleId}</td><td>${purchase.hotelId}</td><td>${purchase.packageId}</td>
                <td>${purchase.guideId}</td><td>${purchase.userId}</td><td>${purchase.finalPrice}</td></tr>`;
                $("#ordersTB").append(row);
            }
        }
    })
}












