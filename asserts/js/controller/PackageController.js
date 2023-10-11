var baseurlPackage = "http://localhost:8080/";


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
            if (resp.status == 200) {
                alert("Saved successfully!");
            } else {
                alert(res.data)
            }
        },

        error: function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }

    })
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

        $("#update-package-Id").val(packageId);
        $("#update-package-hotelNameView").val(hotelName1);
        $("#update-package-emailView").val(email);
        $("#update-package-categoryView").val(category);
        $("#update-package-contactView").val(contact);
        $("#update-package-priceView").val(price);
        $("#update-package-adultView").val(noOfAdults);
        $("#update-package-childView").val(noOfChild);
        $("#update-package-totalView").val(totalCount);

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
                <td>${package.contactNumber}</td><td>${package.packagePrice}</td><td>${package.noOfAdults}</td><td>${package.noOfChild}</td><td>${package.totalCount}</td></tr>`;
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












