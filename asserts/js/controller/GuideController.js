var baseurlGuide = "http://localhost:8080/";

$("#btnAdminAddGuide").click(function () {
    addGuide();
})

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
                alert(resp.message);

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

        $("#update-guide-Id").val(guideId);
        $("#update-guide-fullName").val(fullName);
        $("#update-guide-address").val(address);
        $("#update-guide-age").val(age);
        $("#update-guide-contact").val(contactNumber);
        $("#update-guide-price").val(price);

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
                let row = `<tr><td>${guide.id}</td><td>${guide.fullName}</td><td>${guide.address}</td><td>${guide.age}</td><td>${guide.contactNumber}</td><td>${guide.price}</td></tr>`;
                $("#itemTB").append(row);
            }
            bindClickEventsGuides();
        }
    })
}





















/*
function uploadCarImages(registrationNum) {
    alert("save Image ")

    let frontViewFile = $("#save-car-frontView")[0].files[0];
    let backViewFile = $("#save-car-backView")[0].files[0];
    let sideViewFile = $("#save-car-sideView")[0].files[0];
    let interiorViewFile = $("#save-car-interior")[0].files[0];

    let frontFileName = registrationNum + "-image1-" + $("#save-car-frontView")[0].files[0].name;
    let backFileName = registrationNum + "-image2-" + $("#save-car-backView")[0].files[0].name;
    let sideFileName = registrationNum + "-image3-" + $("#save-car-sideView")[0].files[0].name;
    let interiorFileName = registrationNum + "-image4-" + $("#save-car-interior")[0].files[0].name;

    console.log("save car front : " + $("#save-car-frontView")[0].files[0]);

    var data = new FormData();

    data.append("image1", frontViewFile, frontFileName);
    data.append("image2", backViewFile, backFileName);
    data.append("image3", sideViewFile, sideFileName);
    data.append("image4", interiorViewFile, interiorFileName);

    $.ajax({
        url: baseurl + "car/uploadImg/" + registrationNum,
        method: "Post",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
        }
    });
}
*/









