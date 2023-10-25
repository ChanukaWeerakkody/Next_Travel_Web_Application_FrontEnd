var baseurlHotel = "http://localhost:8080/";
var vNameArHotel = [];
var temporaryHotelStore = {};

//save Hotel
$("#btnAdminAddHotel").click(function (){
    let hotel={
        hotelId:$("#save-hotel-id").val(),
        hotelName:$("#save-hotel-name").val(),
        category:$("#save-hotel-category").val(),
        address:$("#new_hotel_address").val(),
        location:$("#save-hotel-location").val(),
        email:$("#save-hotel-email").val(),
        contactNumber1:$("#save-hotel-contactNumber1").val(),
        contactNumber2:$("#save-hotel-contactNumber2").val(),
        pet:$("#save-hotel-pet").val(),
        priceHotel:$("#save-hotel-priceHotel").val(),
    }
    let jHotel =JSON.stringify(hotel);

    console.log(jHotel);

    $.ajax({
        url: baseurlHotel + "hotel",
        method: "POST",
        data:hotel,
        success:function (res){
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert('Added Successfully!');
                //uploadCarImages(vehicleId);
            }
        },

        error: function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }

    })
});

//Bind events
function bindClickEventsHotel(){
    $("#hotelTB>tr").click(function (){
        let hotelId=$(this).children().eq(0).text();
        let hotelName=$(this).children().eq(1).text();
        let category=$(this).children().eq(2).text();
        let email=$(this).children().eq(3).text();
        let contactNumber1=$(this).children().eq(4).text();
        let hotelPrice=$(this).children().eq(5).text();
        let location=$(this).children().eq(6).text();
        let address=$(this).children().eq(7).text();
        let contact2=$(this).children().eq(8).text();
        let pet=$(this).children().eq(9).text();


        $("#update-hotel-Id").val(hotelId);
        $("#update-hotel-hotelName").val(hotelName);
        $("#update-vehicle-category").val(category);
        $("#update-hotel-email").val(email);
        $("#update-hotel-contact").val(contactNumber1);
        $("#update-hotel-price").val(hotelPrice);
        $("#update-hotel-locationView").val(location);
        $("#update-hotel-addressView").val(address);
        $("#update-hotel-contact2View").val(contact2);
        $("#update-hotel-petView").val(pet);

    });
}

loadAllVHotels();
//Load All Vehicles
function loadAllVHotels(){
    $("hotelTB").empty();
    $.ajax({
        url: baseurlHotel+"hotel",
        method: "GET",
        success:function (resp){
            for(const hotel of resp.data){
                let row = `<tr><td>${hotel.hotelId}</td><td>${hotel.hotelName}</td><td>${hotel.category}</td><td>${hotel.email}</td>
                            <td>${hotel.contactNumber1}</td><td>${hotel.priceHotel}</td><td>${hotel.location}</td><td>${hotel.address}</td>
                            <td>${hotel.contactNumber2}</td><td>${hotel.pet}</td></tr>`;
                $("#hotelTB").append(row);
            }
            bindClickEventsHotel();
        }
    })
}

//Update Hotel
$("#btnUpdateHotel").click(function () {
        let hotelId=$("#update-hotel-Id").val();
        let hotelName=$("#update-hotel-hotelName").val();
        let category=$("#update-hotel-category").val();
        let email=$("#update-hotel-email").val();
        let contactNumber1=$("#update-hotel-contact").val();
        let priceHotel=$("#update-hotel-price").val();
        let location=$("#update-hotel-locationView").val();
        let address=$("#update-hotel-addressView").val();
        let contactNumber2=$("#update-hotel-contact2View").val();
        let pet=$("#update-hotel-petView").val();

    let hotelView={
        hotelId:hotelId,
        hotelName:hotelName,
        category:category,
        email:email,
        contactNumber1:contactNumber1,
        priceHotel:priceHotel,
        location:location,
        address:address,
        contactNumber2:contactNumber2,
        pet:pet,
    }


    let jHotel =JSON.stringify(hotelView);

    console.log(jHotel);

    $.ajax({
        url: baseurlHotel + "hotel",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(hotelView),
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

//Delete Hotel
$("#btnDeleteHotel").click(function (){
    let hotelIdNew= $("#update-hotel-Id").val();
    console.log(hotelIdNew);
    $.ajax({
        url:baseurlHotel+"hotel"+"?hotelId="+hotelIdNew,
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











loadAllHotelToUser();
function loadAllHotelToUser() {
    $("#cusSupLuxHotelContainer").empty();

    $.ajax({
        url: baseurlHotel + "hotel",
        method: "GET",
        success: function (resp) {
            for (const hotel of resp.data) {
                let div = `<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=${"http://localhost:8080/" + hotel.image5}
                                                         style="width: 250px;height: 175px"></i></div>
                                                          
                                </div>
                            </div>
                            <br>
                            
                            <!--Title/V Name-->
                            <div class="row"style="color: black">
                                <div class="d-flex justify-content-center">
                                    <h4 style="font-weight: 600">${hotel.hotelName}</h4>
                                </div>
                            </div>
                            <br>

                            <!--Type-->
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${hotel.category}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${hotel.address}</h6>
                            </div>
                            <br>
                            
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${hotel.contactNumber1}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${hotel.priceHotel}</h6>
                            </div>
                            
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaHotelName="${hotel.hotelName}"  data-hotelCategory="${hotel.category}" data-hotelAddress="${hotel.address}" data-hotelContact="${hotel.contactNumber1}" data-hotelPriceDay="${hotel.priceHotel}" data-hotelId="${hotel.hotelId}"  class="btn_RentItHotel">RENT IT</button>
                                </div> 
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>  
                        </div>
                    </div>`;

                if (hotel.category === "5 Star") {
                    $("#cusSupLuxHotelContainer").append(div);
                } else if (hotel.category === "4 Star and 5 Star") {
                    $("#cusLuxHotelContainer").append(div);
                } else if (hotel.category === "3 Star and 4 Star") {
                    $("#cusHotelMidRangeContainer").append(div);
                } else if (hotel.category === "2 Star and 3 Star") {
                    $("#cusHotelEconomicContainer").append(div);
                }
            }
            rentItHotelClick();
        }
    });
}

function rentItHotelClick() {
    const buttons = document.querySelectorAll('.btn_RentItHotel');

    $(".btn_RentItHotel").click(function () {
        alert("Works")

        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        let attrHotelName = $(this).attr("data-dtaHotelName");
        let attrCategory = $(this).attr("data-hotelCategory");
        let attrContact = $(this).attr("data-hotelContact");
        let attrPackagePrice = $(this).attr("data-hotelPriceDay");
        let attrHotelId = $(this).attr("data-hotelId");

        console.log(attrHotelName,attrCategory,attrContact,attrPackagePrice,attrHotelId);

        setBrandToArrayHotel(this);

        if (colorsAreEqual(bgColor, "rgb(239, 239, 239)")) { //firstTime With hover
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

function setBrandToArrayHotel(param) {
    let bool = true;

    var hotel = {
        hotelName: $(param).attr("data-dtaHotelName"),
        category: $(param).attr("data-hotelCategory"),
        contactNumber1: $(param).attr("data-hotelContact"),
        priceHotel: $(param).attr("data-hotelPriceDay"),
        btnR: param,
        hotelId: $(param).attr("data-hotelId")
    }
    console.log(hotel);

    temporaryHotelStore={hotel};

    $('#save-hotelRental-hotelId').val(temporaryHotelStore.hotel.hotelId);
    $('#save-hotelRental-hotelName').val(temporaryHotelStore.hotel.hotelName);
    $('#save-hotelRental-category').val(temporaryHotelStore.hotel.category);
    $('#save-hotelRental-contact').val(temporaryHotelStore.hotel.contactNumber1);
    $('#save-hotelRental-price').val(temporaryHotelStore.hotel.priceHotel);

    if (bool) {;
        vNameArHotel.push(hotelPackage);
    } else {
        for (var i = 0; i < vNameArHotel.length; i++) {
            if (vNameArHotel[i].model === $(param).attr("data-dtaHotelName")) {
                vNameArHotel.splice(i, 1);
                break;
            }
        }
    }

}

function sendVehicleNameToCart() {
    return vNameArHotel;
}