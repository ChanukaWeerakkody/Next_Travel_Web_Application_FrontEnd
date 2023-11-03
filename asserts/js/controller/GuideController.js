var baseurlGuide = "http://localhost:8082/";
var vNameArGuide = [];
var temporaryGuideStore = {};

$("#btnAdminAddGuide").click(function () {
    addGuide();
})

//Save Guide
function addGuide() {
    var vData = new FormData();

    let frontViewFile = $(".frontViewNic")[0].files[0];
    let backViewFile = $(".backViewNic")[0].files[0];
    let sideViewFile = $(".frontViewGuideId")[0].files[0];
    let interiorViewFile = $(".BackViewGuideId")[0].files[0];
    let guideViewFile = $(".guideImage")[0].files[0];

    console.log(frontViewFile)
    console.log(backViewFile)
    console.log(sideViewFile)
    console.log(interiorViewFile)
    console.log(guideViewFile)

    let frontFileName = $(".frontViewNic")[0].files[0].name;
    let backFileName = $(".backViewNic")[0].files[0].name;
    let sideFileName = $(".frontViewGuideId")[0].files[0].name;
    let interiorFileName = $(".BackViewGuideId")[0].files[0].name;
    let guideImageFileName = $(".guideImage")[0].files[0].name;

    let guideId=$("save-guide-id").val();
    let name = $("#save-guide-name").val();
    let address = $("#new_guide_address").val();
    let age = $("#save-guide-age").val();
    let contactNumber = $("#save-guide-contactNumber").val();
    let gender = $("#save-guide-gender").val();
    let experience = $("#save-guide-Experience").val();
    let price = $("#save-guide-price").val();


    let image1 = frontFileName;
    let image2 = backFileName;
    let image3 = sideFileName;
    let image4 = interiorFileName;
    let image5 = guideImageFileName;


    var carDTO = {
        guideId:guideId,
        fullName:name,
        address:address,
        age:age,
        contactNumber:contactNumber,
        gender:gender,
        experience:experience,
        price:price,

        image1: "uploads/" + image1,
        image2: "uploads/" + image2,
        image3: "uploads/" + image3,
        image4: "uploads/" + image4,
        image5: "uploads/" + image5,
    }

    vData.append("guideFiles", frontViewFile)
    vData.append("guideFiles", backViewFile)
    vData.append("guideFiles", sideViewFile)
    vData.append("guideFiles", interiorViewFile)
    vData.append("guideFiles", guideViewFile)
    vData.append("guide", new Blob([JSON.stringify(carDTO)], {type: "application/json"}))

    console.log(carDTO);

    $.ajax({
        url: baseurlGuide + "guide",
        method: "POST",
        async: true,
        contentType: false,
        processData: false,
        data: vData,
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

//Bind events
function bindClickEventsGuides(){
    $("#itemTB>tr").click(function (){
        let guideId=$(this).children().eq(0).text();
        let fullName=$(this).children().eq(1).text();
        let address=$(this).children().eq(2).text();
        let age=$(this).children().eq(3).text();
        let contactNumber=$(this).children().eq(4).text();
        let price=$(this).children().eq(5).text();
        let experience=$(this).children().eq(6).text();
        let gender=$(this).children().eq(7).text();
        let image1=$(this).children().eq(8).text();
        let image2=$(this).children().eq(9).text();
        let image3=$(this).children().eq(10).text();
        let image4=$(this).children().eq(11).text();
        let image5=$(this).children().eq(12).text();

        $("#update-guide-Id").val(guideId);
        $("#update-guide-fullName").val(fullName);
        $("#update-guide-address").val(address);
        $("#update-guide-age").val(age);
        $("#update-guide-contact").val(contactNumber);
        $("#update-guide-price").val(price);
        $("#update-guide-experience").val(experience);
        $("#update-guide-gender").val(gender);
        $("#guideImageUpdate").val(image1);
        $("#frontViewNicUpdate").val(image2);
        $("#backViewNicUpdate").val(image3);
        $("#frontViewGuideIdUpdate").val(image4);
        $("#BackViewGuideIdUpdate").val(image5);

    });
}

//Load All Guides
loadAllGuides();
function loadAllGuides(){
    $("itemTB").empty();
    $.ajax({
        url: baseurlGuide+"guide",
        method: "GET",
        success:function (resp){
            for(const guide of resp.data){
                let row = `<tr><td>${guide.guideId}</td><td>${guide.fullName}</td><td>${guide.address}</td><td>${guide.age}</td><td>${guide.contactNumber}</td><td>${guide.price}</td><td>${guide.experience}</td><td>${guide.gender}</td><td>${guide.image1}</td><td>${guide.image2}</td><td>${guide.image3}</td><td>${guide.image4}</td><td>${guide.image5}</td></tr>`;
                $("#itemTB").append(row);
            }
            bindClickEventsGuides();
        }
    })
}

//Update Guide
$("#btnUpdateGuide").click(function () {
    let guideId=$("#update-guide-Id").val();
    let name=$("#update-guide-fullName").val();
    let address=$("#update-guide-address").val();
    let age=$("#update-guide-age").val();
    let contact=$("#update-guide-contact").val();
    let price=$("#update-guide-price").val();
    let experience=$("#update-guide-experience").val();
    let gender=$("#update-guide-gender").val();
    let image1=$("#guideImageUpdate").val();
    let image2=$("#frontViewNicUpdate").val();
    let image3=$("#backViewNicUpdate").val();
    let image4=$("#frontViewGuideIdUpdate").val();
    let image5=$("#BackViewGuideIdUpdate").val();

    var guideView={
        guideId:guideId,
        fullName: name,
        address:address,
        age:age,
        contactNumber: contact,
        price:price,
        experience:experience,
        gender:gender,

        image1:image1,
        image2:image2,
        image3:image3,
        image4:image4,
        image5:image5,
    }

    $.ajax({
        url: baseurlGuide + "guide",
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

//Delete Guide
$("#btnDeleteGuide").click(function (){
    let guideIdNew= $("#update-guide-Id").val();
    console.log(guideIdNew);
    $.ajax({
        url:baseurlGuide+"guide"+"?guideId="+guideIdNew,
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





loadAllGuidesToUser();
function loadAllGuidesToUser() {
    $("#cusGuideContainer").empty();

    $.ajax({
        url: baseurlGuide + "guide",
        method: "GET",
        success: function (resp) {
            for (const guide of resp.data) {
                let div = `<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=${"http://localhost:8080/" + guide.image5}
                                                         style="width: 250px;height: 175px"></i></div>
                                                          
                                </div>
                            </div>
                            <br>
                            
                            <!--Title/V Name-->
                            <div class="row"style="color: black">
                                <div class="d-flex justify-content-center">
                                    <h4 style="font-weight: 600">${guide.fullName}</h4>
                                </div>
                            </div>
                            <br>

                            <!--Type-->
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${guide.age}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${guide.contactNumber}</h6>
                            </div>
                            <br>
                            
                            <div class="row" style="color: black">
                            <br>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline" >
                                    ${guide.gender}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${guide.price}</h6>
                            </div>
                            
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaImg="${guide.image3}"  data-fullName="${guide.fullName}" data-age="${guide.age}" data-contact="${guide.contactNumber}" data-priceDay="${guide.price}" data-guideId="${guide.guideId}"  class="btn_RentItGuide">RENT IT</button>
                                </div> 
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>  
                        </div>
                    </div>`;
                $("#cusGuideContainer").append(div);
            }
            rentItGuideClick();
        }
    });
}

function rentItGuideClick() {
    const buttons = document.querySelectorAll('.btn_RentItGuide');

    $(".btn_RentItGuide").click(function () {
        alert("Added to Cart")

        var bgColorGuide = $(this).css("background-color");
        console.log(bgColorGuide)

        let attrFullName = $(this).attr("data-fullName");
        let attrAge = $(this).attr("data-age");
        let attrContact = $(this).attr("data-contact");
        let attrPrice = $(this).attr("data-priceDay");
        let attrGuideId = $(this).attr("data-guideId");

        console.log(attrFullName,attrAge,attrContact,attrPrice,attrGuideId);

        setBrandToArrayGuide(this);

        if (colorsAreEqualGuide(bgColorGuide, bgColorGuide)) { //firstTime With hover
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "border-radius": 5,
                "color": "#ffffff"
            });
        } else if (colorsAreEqualGuide(bgColorGuide, "rgb(213, 1, 55)")) { //red
            $(this).text("Rent It");
            $(this).css({
                "background": "#F7F7F7",
                "color": "#444444",
            });
        } else if (colorsAreEqualGuide(bgColorGuide, "rgb(247, 247, 247)")) { //red turn to past value
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        }
    })
}
function colorsAreEqualGuide(color1, color2) {
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

function setBrandToArrayGuide(param) {
    let bool = true;

    var guide = {
        fullName: $(param).attr("data-fullName"),
        age: $(param).attr("data-age"),
        contactNumber: $(param).attr("data-contact"),
        price: $(param).attr("data-priceDay"),
        btnR: param,
        guideId: $(param).attr("data-guideId")
    }
    console.log(guide);

    temporaryGuideStore={guide};

    $('#save-guideRental-guideId').val(temporaryGuideStore.guide.guideId);
    $('#save-guideRental-name').val(temporaryGuideStore.guide.fullName);
    $('#save-guideRental-age').val(temporaryGuideStore.guide.age);
    $('#save-guideRental-contact').val(temporaryGuideStore.guide.contactNumber);
    $('#save-guideRental-price').val(temporaryGuideStore.guide.price);

    if (bool) {;
        vNameArGuide.push(guide);
    } else {
        for (var i = 0; i < vNameArGuide.length; i++) {
            if (vNameArGuide[i].model === $(param).attr("data-fullName")) {
                vNameArGuide.splice(i, 1);
                break;
            }
        }
    }

}

function sendVehicleNameToCart() {
    return vNameArGuide;
}

loadAllGuidesOrders();
//Load All Guides Orders
function loadAllGuidesOrders(){
    $("guideOrdersTB").empty();
    $.ajax({
        url: baseurlGuide+"purchaseGuide",
        method: "GET",
        success:function (resp){
            for(const guideOrder of resp.data){
                let row = `<tr><td>${guideOrder.guideOid}</td><td>${guideOrder.guideId}</td><td>${guideOrder.pricePerDay}</td><td>${guideOrder.days}</td>
                <td>${guideOrder.fullPrice}</td><td>${guideOrder.userId}</td></tr>`;
                $("#guideOrdersTB").append(row);
            }
        }
    })
}








