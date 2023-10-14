var baseurlGuide = "http://localhost:8080/";

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
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=${"http://localhost:8080/" + vehicle.image3}
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
                                    <button data-dtaImg="${vehicle.image3}"  data-subName="${vehicle.subName}" data-fuelType="${vehicle.fuelType}" data-transmission="${vehicle.transmission}" data-btnRentIt="${vehicle.model}" data-registrationId="${vehicle.vehicleId}"  class="btn_RentIt">RENT IT</button>
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
        }
    });
}








