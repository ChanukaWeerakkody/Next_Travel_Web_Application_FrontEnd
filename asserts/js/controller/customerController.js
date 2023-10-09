/**@author : Hasitha Lakshan
Project :CarRentalSystem
Date :2/23/2023
Time :9:05 PM
*/

var customer;
var baseurl="http://localhost:8080/";

// Initialize the counter
var counter = 2;
var customerIds="C001";


/*register Button*/
$('#signInRegister').click(function () {
       registerCustomer();
})


// Function to generate the next id
function generateId() {
    var id = "C" + ("000" + counter).slice(-3); // add leading zeroes
    counter++; // increment the counter for the next id
    return id;
}


function registerCustomer() {
    let nicFileName = $("#nicImageSignInForm")[0].files[0].name;

    // let id =  $("").val();

    // let id =  customerIds;
    let name= $("#nameSignInForm").val();
    let email= $("#emailSignInForm").val();
    let nic= $("#nicSignInForm").val();
    let address = $("#addressSignInForm").val();
    let contact =$("#contactSignInForm").val();
    let drivingLicenseNo= $("#drivingLicenseSignInForm").val();
    let userName= $("#userNameSignInForm").val();
    let password =$("#passwordSignInForm").val();


    var newDetails = {
        customerId: customerIds,
        name: name,
        address: address,
        nic:nic,
        drivingLicenseNumber: drivingLicenseNo,
        contactNumber: contact,
        email: email,
        userName:userName,
        password:password,
        imageLocation: nicFileName
    }

    $.ajax({
        url: baseurl+"customer",
        method :"post",
        data : JSON.stringify(newDetails),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            customerIds=generateId();
            alert(resp.message);
            navToLogIn(resp.data);
            // loadImage();
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);
        }
    });
}

function navToLogIn(data) {
    $('#spaMainIndex').css('display','none');
    $('#spaMainCarStore').css('display','none');
    $('#spaMainCart').css('display','none');
    $('#spaMainOverview').css('display','none');
    $('#spaMainSignIn').css('display','none');
    $('#spaMainLogIn').css('display','block');
    $('#spaMainCarDetail').css('display','none');
    $('#spaMainCustomerUpdate').css('display','none');

    console.log(data.name,data.id,data.userName);
}


/*UPDATE*/

/*Customer Update*/
$('.btnCustomerUpdate').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaMainCarStore').css('display','none');
    $('#spaMainCart').css('display','none');
    $('#spaMainOverview').css('display','none');
    $('#spaMainSignIn').css('display','none');
    $('#spaMainLogIn').css('display','none');
    $('#spaMainCustomerUpdate').css('display','block');
    $('#spaMainCarDetail').css('display','none');

})

$('#btnUpdate').click(function () {
    updateCustomer();
})


function updateCustomer(){
    let upImg = $("#cusUpNicImage")[0].files[0].name;

    var upDetails = {
        customerId: "C001",
        name: $("#cusUpName").val(),
        address: $("#cusUpAddress").val(),
        nic:$("#cusUpNic").val(),
        drivingLicenseNumber: $("#cusUpDrivingLicence").val(),
        contactNumber: $("#cusUpContact").val(),
        email: $("#cusUpEmail").val(),
        userName:$("#cusUpUserName").val(),
        password:$("#cusUpPassword").val(),
        imageLocation: upImg
    }

    $.ajax({
        url: baseurl + "customer",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(upDetails),
        success: function (res) {
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert("Cant update your Details in this moment")
            }
        }
    });
}


/*load All*/
function loadAllCustomers(){
    // $("#admin-customer-table").empty();
    $("#adminSeeAllCustomer").empty();

    $.ajax({
        url: baseurl + "customer",
        method: "GET",
        success: function (resp){
            for (const customer of resp.data){
                let im=customer.imageLocation;

               let row= `<tr style="border-bottom: 1px solid #d9d9d9"><th scope="row">${customer.customerId}</th><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contactNumber}</td> <td>${customer.nic}</td><td>${customer.email}</td><td><a style="cursor: pointer" class="text-primary fw-bold">View Image</a></td></tr>>`;

                $("#adminSeeAllCustomer").append(row);


                $("#adminSeeAllCustomer>tr").off("click");
                $("#adminSeeAllCustomer>tr").click(function (){

                    $("#adViewAllCustomer").prop('disabled',false);
                });
            }
        }
    })
}


