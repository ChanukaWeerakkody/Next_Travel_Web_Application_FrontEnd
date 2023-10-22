var baseUrlRental = "http://localhost:8080/";
var carNames = sendVehicleNameToCart();
var rentalAr = [];
var amount=0;
var cusId;

$("#setPackageButton").click(function (){
    let packageId = temporaryPackageStore.hotelPackage.packageId;
    let category = temporaryPackageStore.hotelPackage.category;
    let hotelName = temporaryPackageStore.hotelPackage.hotelName;
    let packagePrice = temporaryPackageStore.hotelPackage.packagePrice;
    let contactNumber1 = temporaryPackageStore.hotelPackage.contactNumber1;

    console.log(packageId);
    console.log(category);
    console.log(hotelName);
    console.log(packagePrice);
    console.log(contactNumber1);

});

$("#setHotelButton").click(function (){
    let hotelId = temporaryHotelStore.hotel.hotelId;
    let hotelName1 = temporaryHotelStore.hotel.hotelName;
    let category1 = temporaryHotelStore.hotel.category;
    let contactNumber2 = temporaryHotelStore.hotel.contactNumber1;
    let priceHotel = temporaryHotelStore.hotel.priceHotel;

    console.log(hotelId);
    console.log(hotelName1);
    console.log(category1);
    console.log(contactNumber2);
    console.log(priceHotel);

});

$("#setGuideButton").click(function (){
    let guideId = temporaryGuideStore.guide.guideId;
    let fullName = temporaryGuideStore.guide.fullName;
    let age = temporaryGuideStore.guide.age;
    let contactNumber = temporaryGuideStore.guide.contactNumber;
    let price = temporaryGuideStore.guide.price;

    console.log(guideId);
    console.log(fullName);
    console.log(age);
    console.log(contactNumber);
    console.log(price);

});

$("#setConsoleButton").click(function (){
    let model = temporaryOrderStore.cus.model;
    let vehicleId = temporaryOrderStore.cus.vehicleId;
    let type = temporaryOrderStore.cus.type;
    let newPata = temporaryOrderStore.cus.newPata;
    let priceKM = temporaryOrderStore.cus.priceKM;


    let guideId = temporaryGuideStore.guide.guideId;
    console.log(guideId);

    $("#save-vehicleRental-vehicleId").val(vehicleId);
    $("#save-vehicleRental-model").val(model);
    $("#save-vehicleRental-colour").val(newPata);
    $("#save-vehicleRental-pricePerKM").val(priceKM);
    $("#save-vehicleRental-type").val(type);
});

$("#addRental").click(function (){
    alert("Works button")
    var data = new FormData();
    let vehicleId = temporaryOrderStore.cus.vehicleId;
    let priceKM = temporaryOrderStore.cus.priceKM;
    let rentalDate=$("#rentalDate").val();
    let userId=$("#userId").val();
    let oId=$("#oid").val();

    let rental={
        oId:oId,
        date:rentalDate,

        priceKM: priceKM,
        user:{
            user:userId,
        },
        vehicle:{
            vehicleId: vehicleId,
        },

    }
    data.append("vehicleOrder", new Blob([JSON.stringify(rental)], {type: "application/json"}));
    console.log(data);
    $.ajax({
        url: baseUrlRental + "vehicleOrder",
        method: "POST",
        async: true,
        contentType:  "application/json",
        processData: false,
        data: data,
        success:function (res){
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert('Added Successfully!');
            }
        },

        error: function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }

    })

    /*let rental={
        oid:$("#save-rental-id").val(),
        date:$("#save-rental-date").val(),
        user:{
            userId:$("#save-rental-userId").val(),
        },
        orderDetails:{
            oid:$("#save-rental-id2").val(),
            vehicleId:$("#save-rental-vehicleId").val(),
            amount:$("#save-rental-amount").val(),
        }
    }



    console.log("Print "+rental);

    $.ajax({
        url: baseUrlRental + "order",
        method: "POST",
        contentType: false,
        processData:false,
        data:JSON.stringify(rental),
        success:function (res){
            if (res.status == 200) {
                alert("Item saved successfully!");
            } else {
                alert(res.data)
            }
        },

        error: function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }

    })*/

});



