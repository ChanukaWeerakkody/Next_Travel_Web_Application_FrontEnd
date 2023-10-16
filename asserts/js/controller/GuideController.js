var baseurlGuide = "http://localhost:8080/";

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
                alert(res.message)
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
                            
                            <!--Button-->
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaImg="${guide.image3}"  data-subName="${guide.subName}" data-fuelType="${guide.fuelType}" data-transmission="${guide.transmission}" data-btnRentIt="${guide.model}" data-registrationId="${guide.vehicleId}"  class="btn_RentIt">RENT IT</button>
                                </div> 
                            </div>
                        </div>
                    </div>`;
                $("#cusGuideContainer").append(div);
            }
        }
    });
}













