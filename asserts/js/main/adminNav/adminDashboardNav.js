
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})


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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#carViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');

})


/*View Vehicle Orders*/
$('#adViewVehicleOrders').click(function () {
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

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','block');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})


/*View Hotel Orders*/
$('#adViewHotelOrders').click(function () {

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewHotel').css('display','none')

    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    $('#adminAddGuide').css('display','none');

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#adminAddHotel').css('display','none');
    $('#hotelViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','block')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#hotelViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})


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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})



/*View Guide Orders*/
$('#adViewGuideOrders').click(function () {

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

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','block')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');

    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
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
    $('#guideViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');
    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})

/*View Package Orders*/
$('#adViewPackageOrders').click(function () {

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

    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewUser').css('display','none');
    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','block');
    $('#spaAdminViewOrders').css('display','none');

})


/*Add User*/
$('#adViewUser').click(function () {
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

    $('#adminAddPackage').css('display','none');
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');

    $('#adminAddUser').css('display','block');
    $('#spaAdminViewUser').css('display','none');
    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})

/*View User*/
$('#adViewUserView').click(function () {

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
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');

    $('#spaAdminViewUser').css('display','block');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');
    $('#spaAdminViewOrders').css('display','none');
})


/*View User Orders*/
$('#adViewOrders').click(function () {

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
    $('#spaAdminViewPackage').css('display','none');

    $('#spaAdminViewHotel').css('display','none');
    $('#adminAddHotel').css('display','none');
    $('#guideViewForm2').css('display','none');

    $('#spaAdminViewUser').css('display','none');
    $('#adminAddUser').css('display','none');
    $('#spaAdminViewVehicleOrders').css('display','none');
    $('#spaAdminViewGuideOrders').css('display','none')
    $('#spaAdminViewHotelOrders').css('display','none')
    $('#spaAdminViewPackageOrders').css('display','none');

    $('#spaAdminViewOrders').css('display','block');
})