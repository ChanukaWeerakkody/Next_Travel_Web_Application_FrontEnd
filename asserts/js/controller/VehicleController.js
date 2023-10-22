var baseurlGuide = "http://localhost:8080/";
var vNameAr = [];
var temporaryOrderStore = {};

$("#btnAdminAddVehicle").click(function () {
    addVehicle();
})

function addVehicle() {
    var vData1 = new FormData();

    let frontViewFileV = $(".frontView")[0].files[0];
    let backViewFileV = $(".backView")[0].files[0];
    let sideViewFileV = $(".sideView")[0].files[0];
    let interiorViewFileV = $(".interior")[0].files[0];


    console.log(frontViewFileV)
    console.log(backViewFileV)
    console.log(sideViewFileV)
    console.log(interiorViewFileV)

    let frontFileNameV = $(".frontView")[0].files[0].name;
    let backFileNameV = $(".backView")[0].files[0].name;
    let sideFileNameV = $(".sideView")[0].files[0].name;
    let interiorFileNameV = $(".interior")[0].files[0].name;

    let vehicleId = $("#new_vehicle_id").val();
    let brand = $("#new_vehicle_brand").val();
    let subName = $("#new_vehicle_name").val();
    let type = $("#save-vehicle-type").val();
    let pata = $("#pata").val();
    let category = $("#save-vehicle-category").val();
    let transmission = $("#save-vehicle-transmission").val();
    let seatCapacity = $("#seatCapacity").val();
    let fuelType = $("#save-vehicle-fuelType").val();
    let model = $("#save-vehicle-model").val();
    let pricePerKM = $("#pricePerKM").val();



    let imageV1 = frontFileNameV;
    let imageV2 = backFileNameV;
    let imageV3 = sideFileNameV;
    let imageV4 = interiorFileNameV;



    var vehicleDTO = {
        vehicleId:vehicleId,
        brand:brand,
        subName:subName,
        type:type,
        pata:pata,
        category:category,
        transmission:transmission,
        seatCapacity:seatCapacity,
        fuelType:fuelType,
        model:model,
        pricePerKM:pricePerKM,

        image1: "uploads/" + imageV1,
        image2: "uploads/" + imageV2,
        image3: "uploads/" + imageV3,
        image4: "uploads/" + imageV4,

    }

    vData1.append("vehicleFiles", frontViewFileV)
    vData1.append("vehicleFiles", backViewFileV)
    vData1.append("vehicleFiles", sideViewFileV)
    vData1.append("vehicleFiles", interiorViewFileV)

    vData1.append("vehicle", new Blob([JSON.stringify(vehicleDTO)], {type: "application/json"}))

    console.log(vehicleDTO);

    $.ajax({
        url: baseurlGuide + "vehicle",
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
                uploadCarImages(vehicleId);
            }
        },
        error: function (error) {
            console.log(error);
        }
    })

}
loadAllVehicles();

//Bind events
function bindClickEventsVehicles(){
    $("#vehicleTB>tr").click(function (){
        let vehicleId=$(this).children().eq(0).text();
        let brand=$(this).children().eq(1).text();
        let pata=$(this).children().eq(2).text();
        let type=$(this).children().eq(3).text();
        let category=$(this).children().eq(4).text();
        let transmission=$(this).children().eq(5).text();
        let seatCapacity=$(this).children().eq(6).text();
        let fuel=$(this).children().eq(7).text();
        let model=$(this).children().eq(8).text();
        let subName=$(this).children().eq(9).text();
        let pricePerKM=$(this).children().eq(10).text();
        let image1=$(this).children().eq(11).text();
        let image2=$(this).children().eq(12).text();
        let image3=$(this).children().eq(13).text();
        let image4=$(this).children().eq(14).text();

        $("#update-vehicle-Id").val(vehicleId);
        $("#update-vehicle-brand").val(brand);
        $("#updatePata").val(pata);
        $("#update-vehicle-type").val(type);
        $("#update-vehicle-category").val(category);
        $("#update-vehicle-transmission").val(transmission);
        $("#update-vehicle-seatCapacity").val(seatCapacity);
        $("#update-vehicle-fuel").val(fuel);
        $("#update-vehicle-model").val(model);
        $("#update-vehicle-subName").val(subName);
        $("#update-vehicle-pricePerKM").val(pricePerKM);
        $("#update-image1").val(image1);
        $("#update-image2").val(image2);
        $("#update-image3").val(image3);
        $("#update-image4").val(image4);

    });
}

//Load All Vehicles
function loadAllVehicles(){
    $("vehicleTB").empty();
    $.ajax({
        url: baseurlGuide+"vehicle",
        method: "GET",
        success:function (resp){
            for(const vehicle of resp.data){
                let row = `<tr><td>${vehicle.vehicleId}</td><td>${vehicle.brand}</td><td>${vehicle.pata}</td><td>${vehicle.type}</td>
                <td>${vehicle.category}</td><td>${vehicle.transmission}</td><td>${vehicle.seatCapacity}</td><td>${vehicle.fuelType}</td>
                <td>${vehicle.model}</td><td>${vehicle.subName}</td><td>${vehicle.pricePerKM}</td><td>${vehicle.image1}</td>
                <td>${vehicle.image2}</td><td>${vehicle.image3}</td><td>${vehicle.image4}</td></tr>`;
                $("#vehicleTB").append(row);
            }
            bindClickEventsVehicles();
        }
    })
}

//Update Vehicle
$("#btnUpdateVehicle").click(function () {

    let vehicleId = $("#update-vehicle-Id").val();
    let brand = $("#update-vehicle-brand").val();
    let subName = $("#update-vehicle-subName").val();
    let type = $("#update-vehicle-type").val();
    let pata = $("#updatePata").val();
    let category = $("#update-vehicle-category").val();
    let transmission = $("#update-vehicle-transmission").val();
    let seatCapacity = $("#update-vehicle-seatCapacity").val();
    let fuelType = $("#update-vehicle-fuel").val();
    let model = $("#update-vehicle-model").val();
    let pricePerKM = $("#update-vehicle-pricePerKM").val();


    let image1=$("#update-image1").val();
    let image2=$("#update-image2").val();
    let image3=$("#update-image3").val();
    let image4=$("#update-image4").val();


    var guideView={
        vehicleId:vehicleId,
        brand:brand,
        subName:subName,
        type:type,
        pata:pata,
        category:category,
        transmission:transmission,
        seatCapacity:seatCapacity,
        fuelType:fuelType,
        model:model,
        pricePerKM:pricePerKM,

        image1:image1,
        image2:image2,
        image3:image3,
        image4:image4,
    }

    $.ajax({
        url: baseurlGuide + "vehicle",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(guideView),
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


//Delete Vehicle
$("#btnDeleteVehicle").click(function (){
    let vehicleIdNew= $("#update-vehicle-Id").val();
    console.log(vehicleIdNew);
    $.ajax({
        url:baseurlGuide+"vehicle"+"?vehicleId="+vehicleIdNew,
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



loadAllVehiclesToUser();
function loadAllVehiclesToUser() {
    $("#cusLuxCarContainer").empty();

    $.ajax({
        url: baseurlGuide + "vehicle",
        method: "GET",
        success: function (resp) {
            for (const vehicle of resp.data) {
                let div = `<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=${"http://localhost:8080/" + vehicle.image1}
                                                         style="width: 250px;height: 175px"></i></div>                     
                                </div>
                            </div>
                            <br>
                            
                            <!--Title/V Name-->
                            <div class="row"style="color: black">
                                <div class="d-flex justify-content-center">
                                    <h4 style="font-weight: 600">${vehicle.subName}</h4>
                                </div>
                            </div>
                            <br>

                            <!--Type-->
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${vehicle.fuelType}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${vehicle.pricePerKM}</h6>
                            </div>
                            <br>
                            
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${vehicle.model}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${vehicle.brand}</h6>
                            </div>
                            
                            <!--Button-->
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-type="${vehicle.subName}" data-pata="${vehicle.pata}" data-pricePerKM="${vehicle.pricePerKM}" data-btnRentIt="${vehicle.model}" data-vehicleId="${vehicle.vehicleId}"  class="btn_RentIt">RENT IT</button>
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>                         
                        </div>
                    </div>`;

                if (vehicle.category === "Luxury") {
                    $("#cusLuxCarContainer").append(div);
                } else if (vehicle.category === "Economic") {
                    $("#cusCarEconomicContainer").append(div);
                } else if (vehicle.category === "Mid Range") {
                    $("#cusCarMidRangeContainer").append(div);
                } else if (vehicle.category === "Super Luxury") {
                    $("#cusSupLuxCarContainer").append(div);
                }
            }
            rentItClick();
        }
    });
}

function rentItClick() {
    const buttons = document.querySelectorAll('.btn_RentIt');

    $(".btn_RentIt").click(function () {
        alert("Works")

        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        let attrType = $(this).attr("data-type");
        let attrPata = $(this).attr("data-pata");
        let attrPricePerKM = $(this).attr("data-pricePerKM");
        let attrModel = $(this).attr("data-btnRentIt");
        let attrVehicleId = $(this).attr("data-vehicleId");

        console.log(attrType,attrPricePerKM,attrPata,attrModel,attrVehicleId);

        setBrandToArray(this);

        if (colorsAreEqual(bgColor, "rgb(68, 68, 68)")) { //firstTime With hover
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        } else if (colorsAreEqual(bgColor, "rgb(213, 1, 55)")) { //red
            $(this).text("Rent It");
            $(this).css({
                "background": "#F7F7F7",
                "color": "#444444",
            });
        } else if (colorsAreEqual(bgColor, "rgb(247, 247, 247)")) { //red turn to past value
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        }

    })


}

function colorsAreEqual(color1, color2) {
    var rgb1 = color1.match(/\d+/g);  // Get the RGB values of color1
    var rgb2 = color2.match(/\d+/g);  // Get the RGB values of color2
    if (rgb1.length !== 3 || rgb2.length !== 3) {
        return false;  // Invalid input - not a valid color
    }
    for (var i = 0; i < 3; i++) {
        if (parseInt(rgb1[i]) !== parseInt(rgb2[i])) {
            return false;  // The colors are not equal
        }
    }
    return true;  // The colors are equal
}
function setBrandToArray(param) {
    let bool = true;

    var cus = {
        model: $(param).attr("data-btnRentIt"),
        type: $(param).attr("data-type"),
        newPata: $(param).attr("data-pata"),
        priceKM: $(param).attr("data-pricePerKM"),
        btnR: param,
        vehicleId: $(param).attr("data-vehicleId")
    }
    console.log(cus);

    temporaryOrderStore={cus};

    if (bool) {;
        vNameAr.push(cus);
    } else {
        for (var i = 0; i < vNameAr.length; i++) {
            if (vNameAr[i].model === $(param).attr("data-btnRentIt")) {
                vNameAr.splice(i, 1);
                break;
            }
        }
    }

}
function sendVehicleNameToCart() {
    return vNameAr;
}



