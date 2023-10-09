var loggedCustomerId;

//for the Loading Window
$(window).on('load', function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');

    loadAllCars("allCarDetail");
})

$('#spaMainCustomerUpdate').css('display', 'none');
/*-----------------INDEX------------------*/

$('#navIndexHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navIndexCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navIndexLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

/*----------------CAR STORE----------------------*/

$('#navCarStoreHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCarStoreCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCarStoreLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

/*----------------CART----------------------*/

$('#navCartHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCartCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCartLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*----------------OVERVIEW----------------------*/

$('#navOverViewHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navOverViewCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navOverViewLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*----------------CAR DETAIL----------------------*/

$('#navCarDetailsHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCarDetailsCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navCarDetailsLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*----------------Sign In----------------------*/

$('#navSignInHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navSignInCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navSignInLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*----------------Log In----------------------*/
$('#navLogInHome').click(function () {
    $('#spaMainIndex').css('display', 'block');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})

$('#navLogInCarStore').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*-------------------*/
$('#navLogInLogIn').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})


/*=======================
        Car Store Type Drop Down
* =======================*/

$('#carStoreTypeLux').click(function () {

})


$('#carStoreTypePremium').click(function () {
// Get the div you want to move
    var divToMove = document.getElementById("carStoreTypePremium");

// Get the div you want to move it to
    var destinationDiv = document.getElementById("carStoreTypeLux");

// Move the div by appending it to the destination div
    destinationDiv.appendChild(divToMove);
})

$('#carStoreTypeGeneral').click(function () {

})


/*=====================*/
$('.goToCartButton').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'block');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');


})

$('#loginCreateAccount').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'block');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})
/*login button*/
$('#loginBtnLogIN').click(function () {
    /*$('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'block');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');*/


    let userName = $('#yourUsername').val();
    let password = $('#yourPassword').val();

    $.ajax({
        url: baseurl + "customer?userName=" + userName,
        method: "GET",
        success: function (resp) {
            console.log(resp.userName + "=" + resp.data.userName)
            console.log(resp.userName + "=" + userName)
            if (resp.data.userName === userName && resp.data.password === password) {
                loggedCustomerId=resp.data.customerId;
                $('#spaMainIndex').css('display', 'none');
                $('#spaMainCarStore').css('display', 'none');
                $('#spaMainCart').css('display', 'block');
                $('#spaMainOverview').css('display', 'none');
                $('#spaMainSignIn').css('display', 'none');
                $('#spaMainLogIn').css('display', 'none');
                $('#spaMainCustomerUpdate').css('display', 'none');
                $('#spaMainCarDetail').css('display', 'none');

            } else {
                alert("Username or Password Incorrect!.");
            }
        }
    });


    /*this is want to call when the login rq is success*/
    sendVehicleNameToCart();
    loadCart();
})


/*send Rental rq*/
$('#cartBtnSendRentalRq').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'none');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'block');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');

    saveRental();

})


function carStoreCarDetailsIcon() {
    /*Car Detail ICon*/
    $('.carStoreIndexCarDetailIcon').click(function () {
        $('#spaMainIndex').css('display', 'none');
        $('#spaMainCarStore').css('display', 'none');
        $('#spaMainCart').css('display', 'none');
        $('#spaMainOverview').css('display', 'none');
        $('#spaMainSignIn').css('display', 'none');
        $('#spaMainLogIn').css('display', 'none');
        $('#spaMainCustomerUpdate').css('display', 'none');
        $('#spaMainCarDetail').css('display', 'block');
    })

}


/*Book Now Btn*/
$('#btnIndexBookNow').click(function () {
    $('#spaMainIndex').css('display', 'none');
    $('#spaMainCarStore').css('display', 'block');
    $('#spaMainCart').css('display', 'none');
    $('#spaMainOverview').css('display', 'none');
    $('#spaMainSignIn').css('display', 'none');
    $('#spaMainLogIn').css('display', 'none');
    $('#spaMainCustomerUpdate').css('display', 'none');
    $('#spaMainCarDetail').css('display', 'none');
})



