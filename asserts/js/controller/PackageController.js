var baseurlPackage = "http://localhost:8080/";
var vNameArPackage = [];
var temporaryPackageStore = {};

//Add Package
$("#btnAdminAddPackage").click(function (){

    let packageId=$("#new_package_id").val();
    let hotelName=$("#update-package-hotelName").val();
        let hotelEmail=$("#update-package-email").val();

        let contactNumber=$("#update-package-contact").val();
        let price=$("#update-package-price").val();
        let pet=$("#update-package-pet").val();
        let location=$("#update-package-location").val();
        let category=$("#save-hotel-category").val();
        let travelArea=$("#save-hotel-ares").val();
        let noOfAdults=$("#new_package_adults").val();
        let noOfChild=$("#save-package-childs").val();
        let totalCount=$("#save-package-totalCount").val();
        let packagePrice=$("#save-package-packagePrice").val();


    let package={
        packageId:packageId,
        hotelName:hotelName,
        email:hotelEmail,
        contactNumber:contactNumber,
        price:price,
        pet:pet,
        location:location,
        category:category,
        travelArea:travelArea,
        noOfAdults:noOfAdults,
        noOfChild:noOfChild,
        totalCount:totalCount,
        packagePrice:packagePrice,
    }

    let jPackage =JSON.stringify(package);

    console.log(jPackage);

    $.ajax({
        url: baseurlPackage + "package",
        method: "POST",
        contentType: "application/json",
        data:jPackage,
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
});

//Update Package
$("#btnUpdatePackage").click(function () {
    let packageId=$("#update-package-Id").val();

    let hotelName=$("#update-package-hotelNameView").val();
    let hotelEmail=$("#update-package-emailView").val();
    let contactNumber=$("#update-package-contactView").val();
    let price=$("#update-package-priceView").val();
    let pet=$("#update-package-petUpdate").val();

    let location=$("#update-package-locationUpdate").val();
    let category=$("#update-package-categoryView").val();
    let travelArea=$("#update-package-travelAreaUpdate").val();
    let noOfAdults=$("#update-package-adultView").val();
    let noOfChild=$("#update-package-childView").val();
    let totalCount=$("#update-package-totalView").val();
    let packagePrice=$("#update-package-priceUpdate").val();

    var packageView={
        packageId:packageId,
        hotelName:hotelName,
        email:hotelEmail,
        contactNumber:contactNumber,
        price:price,
        pet:pet,
        location:location,
        category:category,
        travelArea:travelArea,
        noOfAdults:noOfAdults,
        noOfChild:noOfChild,
        totalCount:totalCount,
        packagePrice:packagePrice,
    }

    $.ajax({
        url: baseurlPackage + "package",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(packageView),
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

function bindClickEventsChooseHotel(){
    $("#chooseHotelTB>tr").click(function (){

        let hotelName=$(this).children().eq(0).text();
        let email=$(this).children().eq(1).text();
        let contactNumber1=$(this).children().eq(2).text();
        let hotelPrice=$(this).children().eq(3).text();
        let pet=$(this).children().eq(4).text();
        let location=$(this).children().eq(5).text();


        $("#update-package-hotelName").val(hotelName);
        $("#update-package-email").val(email);
        $("#update-package-contact").val(contactNumber1);
        $("#update-package-price").val(hotelPrice);
        $("#update-package-pet").val(pet);
        $("#update-package-location").val(location);

    });
}


function bindClickEventsViewHotel(){
    $("#hotelViewTB>tr").click(function (){

        let packageId=$(this).children().eq(0).text();
        let hotelName1=$(this).children().eq(1).text();
        let email=$(this).children().eq(2).text();
        let category=$(this).children().eq(3).text();
        let contact=$(this).children().eq(4).text();
        let price=$(this).children().eq(5).text();
        let noOfAdults=$(this).children().eq(6).text();
        let noOfChild=$(this).children().eq(7).text();
        let totalCount=$(this).children().eq(8).text();
        let location=$(this).children().eq(9).text();
        let fullPrice=$(this).children().eq(10).text();
        let pet=$(this).children().eq(11).text();
        let travelArea=$(this).children().eq(12).text();

        $("#update-package-Id").val(packageId);
        $("#update-package-hotelNameView").val(hotelName1);
        $("#update-package-emailView").val(email);
        $("#update-package-categoryView").val(category);
        $("#update-package-contactView").val(contact);
        $("#update-package-priceView").val(price);
        $("#update-package-adultView").val(noOfAdults);
        $("#update-package-childView").val(noOfChild);
        $("#update-package-totalView").val(totalCount);
        $("#update-package-locationUpdate").val(location);
        $("#update-package-priceUpdate").val(fullPrice);
        $("#update-package-petUpdate").val(pet);
        $("#update-package-travelAreaUpdate").val(travelArea);

    });
}


loadAllHotels();

function loadAllHotels(){
    $("hotelViewTB").empty();
    $.ajax({
        url: baseurlPackage+"package",
        method: "GET",
        success:function (resp){
            for(const package of resp.data){
                let row = `<tr><td>${package.packageId}</td><td>${package.hotelName}</td><td>${package.email}</td><td>${package.category}</td>
                <td>${package.contactNumber}</td><td>${package.packagePrice}</td><td>${package.noOfAdults}</td><td>${package.noOfChild}</td>
                <td>${package.totalCount}</td><td>${package.location}</td><td>${package.price}</td><td>${package.pet}</td><td>${package.travelArea}</td></tr>`;
                $("#hotelViewTB").append(row);
            }
            bindClickEventsViewHotel();
        }
    })
}

loadAllHotelsView();

function loadAllHotelsView(){
    $("chooseHotelTB").empty();
    $.ajax({
        url: baseurlPackage+"hotel",
        method: "GET",
        success:function (resp){
            for(const hotel of resp.data){
                let row = `<tr><td>${hotel.hotelName}</td><td>${hotel.email}</td><td>${hotel.contactNumber1}</td><td>${hotel.priceHotel}</td><td>${hotel.pet}</td><td>${hotel.address}</td></tr>`;
                $("#chooseHotelTB").append(row);
            }
            bindClickEventsChooseHotel();
        }
    })
}

//Delete Package
$("#btnDeletePackage").click(function (){
    let packageIdNew= $("#update-package-Id").val();
    console.log(packageIdNew);
    $.ajax({
        url:baseurlPackage+"package"+"?packageId="+packageIdNew,
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











loadAllPackagesToUser();
function loadAllPackagesToUser() {
    $("#cusSupLuxPackageContainer").empty();

    $.ajax({
        url: baseurlPackage + "package",
        method: "GET",
        success: function (resp) {
            for (const hotelPackage of resp.data) {
                let div = `<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=${"http://localhost:8080/" + hotelPackage.image5}
                                                         style="width: 250px;height: 175px"></i></div>
                                                          
                                </div>
                            </div>
                            <br>
                            
                            <!--Title/V Name-->
                            <div class="row"style="color: black">
                                <div class="d-flex justify-content-center">
                                    <h4 style="font-weight: 600">${hotelPackage.hotelName}</h4>
                                </div>
                            </div>
                            <br>

                            <!--Type-->
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${hotelPackage.travelArea}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${hotelPackage.contactNumber}</h6>
                            </div>
                            <br>
                            
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${hotelPackage.totalCount}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${hotelPackage.packagePrice}</h6>
                            </div>
                            
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaName="${hotelPackage.hotelName}"  data-category="${hotelPackage.category}" data-address="${hotelPackage.address}" data-contact="${hotelPackage.contactNumber}" data-priceDay="${hotelPackage.packagePrice}" data-packageId="${hotelPackage.packageId}"  class="btn_RentItPackage">RENT IT</button>
                                </div> 
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>  
                        </div>
                    </div>`;

                if (hotelPackage.category === "Super Luxury") {
                    $("#cusSupLuxPackageContainer").append(div);
                } else if (hotelPackage.category === "Luxury") {
                    $("#cusLuxPackageContainer").append(div);
                } else if (hotelPackage.category === "Mid-Level") {
                    $("#cusPackageMidRangeContainer").append(div);
                } else if (hotelPackage.category === "Regular") {
                    $("#cusPackageEconomicContainer").append(div);
                }
            }
            rentItPackageClick();
        }
    });
}

function rentItPackageClick() {
    const buttons = document.querySelectorAll('.btn_RentItPackage');

    $(".btn_RentItPackage").click(function () {
        alert("Works")

        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        let attrHotelName = $(this).attr("data-dtaName");
        let attrCategory = $(this).attr("data-category");
        let attrContact = $(this).attr("data-contact");
        let attrPackagePrice = $(this).attr("data-priceDay");
        let attrPackageId = $(this).attr("data-packageId");

        console.log(attrHotelName,attrCategory,attrContact,attrPackagePrice,attrPackageId);

        setBrandToArrayPackage(this);

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

function setBrandToArrayPackage(param) {
    let bool = true;

    var hotelPackage = {
        hotelName: $(param).attr("data-dtaName"),
        category: $(param).attr("data-category"),
        contactNumber1: $(param).attr("data-contact"),
        packagePrice: $(param).attr("data-priceDay"),
        btnR: param,
        packageId: $(param).attr("data-packageId")
    }
    console.log(hotelPackage);

    temporaryPackageStore={hotelPackage};

    if (bool) {;
        vNameArPackage.push(hotelPackage);
    } else {
        for (var i = 0; i < vNameArPackage.length; i++) {
            if (vNameArPackage[i].model === $(param).attr("data-dtaName")) {
                vNameArPackage.splice(i, 1);
                break;
            }
        }
    }

}

function sendVehicleNameToCart() {
    return vNameArPackage;
}











