
//for the Loading Window
$(window).on('load',function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#adminHeaderMain').css('display','none');

    $('#spaAdminMainLogIn').css('display','block');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminPayments').css('display','none');


    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})

/*dashboard*/
$('#adDash').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#adminHeaderMain').css('display','block');

    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminPayments').css('display','none');


    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})


/*Reservation*/
$('#adRes').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','block');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');


})



/*Guide*/
$('#adGuide').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','block');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})


$('#spaAdminPayments').css('display','none');

/*Add Car*/
$('#adViewCar').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','block');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})


/*View Car*/
$('#adViewVehicleView').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewGuide').css('display','none')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewVehicle').css('display','block')

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');

})

/*Add Hotel*/
$('#adViewHotel').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');

    $('#adminAddHotel').css('display','block');

    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none')
})


/*View Hotel*/
$('#adViewHotelView').click(function () {

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewHotel').css('display','block')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#adminAddHotel').css('display','none');
})

/*Add Package*/
/*
$('#adViewPackage').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');

    $('#adminAddHotel').css('display','block');

    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none')


})

// view package
$('#adViewPackageView').click(function () {

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewHotel').css('display','block')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#adminAddHotel').css('display','none');
})
*/

/*Add Guide*/
$('#adViewGuide').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddGuide').css('display','block');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');

    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');
})

/*View Guide*/
$('#adViewGuideView').click(function () {

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewGuide').css('display','block')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');
})

/*Add Package*/
$('#adViewPackage').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');

    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','block');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})

/*View Package*/
$('#adViewPackageView').click(function () {

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','block');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})

/*customer*/
$('#adCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','block');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
})














/*payment*/
$('#adPayment').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','block');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');
})

/*customer all view*/
$('#adViewAllCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminViewAllCustomer').css('display','block');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');
    $('#spaAdminViewGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    loadAllCustomers();
})
