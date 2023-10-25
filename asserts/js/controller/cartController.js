var baseUrlRental = "http://localhost:8080/";
var carNames = sendVehicleNameToCart();
var rentalAr = [];
var amount=0;
var cusId;


//calculate Price
$("#checkPackagePrice").click(function () {
   /* vehicle final price*/
    var pricePerKM = $("#save-vehicleRental-pricePerKM").val();
    var finalPrice = $("#save-vehicleRental-km").val();

    var fullPriceVehicle=pricePerKM*finalPrice;
    $("#save-vehicleRental-finalPrice").val(fullPriceVehicle);

    /* guide final price*/
    var val = $("#save-guideRental-price").val();
    var val1 = $("#save-guideRental-days").val();

    var fullPriceGuide=val*val1;
    $("#save-guideRental-finalPrice").val(fullPriceGuide);

    /* hotel final price*/
    var val2 = $("#save-hotelRental-price").val();
    var val3 = $("#save-hotelRental-days").val();

    var fullPriceHotel=val2*val3;
    $("#save-hotelRental-finalPrice").val(fullPriceHotel);


    /* package final price*/
    var val4 = $("#save-packageRental-price").val();
    var val5 = $("#save-packageRental-days").val();

    var fullPricePackage=val4*val5;
    $("#save-packageRental-finalPrice").val(fullPricePackage);

    $("#sumLabelVehicle").text("Sum of vehicle : " + fullPriceVehicle);
    $("#sumLabelGuide").text("Sum of Guide : " + fullPriceGuide);
    $("#sumLabelHotel").text("Sum of Price : " + fullPriceHotel);
    $("#sumLabelPackage").text("Sum of Package : " + fullPricePackage);

    var totalPrice=fullPriceVehicle+fullPriceGuide+fullPriceHotel+fullPricePackage;

    $("#sumLabelTotalPrice").text("Total is : " + totalPrice);
})





$("#purchaseOrder").click(function () {
    addPurchaseVehicle();
})
//purchase Vehicle
function addPurchaseVehicle() {
    var vData2 = new FormData();

    let frontViewFileV = $(".frontViewOfLicense")[0].files[0];
    let backViewFileV = $(".backViewOfLicense")[0].files[0];

    console.log(frontViewFileV)
    console.log(backViewFileV)

    let frontFileNameV = $(".frontViewOfLicense")[0].files[0].name;
    let backFileNameV = $(".backViewOfLicense")[0].files[0].name;


    let vehicleOId = $("#save-vehicleRental-vehicleOid").val();
    let vehicleId = $("#save-vehicleRental-vehicleId").val();
    let driverName = $("#save-vehicleRental-driverName").val();
    let driverContact = $("#save-vehicleRental-driverContact").val();
    let pricePerKM = $("#save-vehicleRental-pricePerKM").val();
    let km = $("#save-vehicleRental-km").val();
    let finalPrice = $("#save-vehicleRental-finalPrice").val();
    let userId = 1;


    let imageV1 = frontFileNameV;
    let imageV2 = backFileNameV;


    var vehicleOrderDTO = {
        vehicleOId:vehicleOId,
        vehicleId:vehicleId,
        driverName:driverName,
        driverContact:driverContact,
        pricePerKm:pricePerKM,
        km:km,
        fullPrice:finalPrice,
        userId:userId,
        image1: "uploads/" + imageV1,
        image2: "uploads/" + imageV2,


    }

    vData2.append("vehicleFiles", frontViewFileV)
    vData2.append("vehicleFiles", backViewFileV)

    vData2.append("vehicle", new Blob([JSON.stringify(vehicleOrderDTO)], {type: "application/json"}))

    console.log(vehicleOrderDTO);

    $.ajax({
        url: baseUrlRental + "purchaseVehicle",
        method: "POST",
        async: true,
        contentType: false,
        processData: false,
        data: vData2,
        success: function (resp) {
            if (resp.status === 200) {
                alert(resp.message)
            } else {
                alert('Added Successfully!');
                //uploadCarImages(vehicleId);
            }
        },
        error: function (error) {
            console.log(error);
        }
    })

}































