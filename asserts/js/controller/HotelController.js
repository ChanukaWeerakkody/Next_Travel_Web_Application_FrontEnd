var baseurlHotel = "http://localhost:8080/";

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
            if (resp.status == 200) {
                alert("Item saved successfully!");
                loadAllItems();
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

//Bind events
function bindClickEventsHotel(){
    $("#hotelTB>tr").click(function (){
        let hotelId=$(this).children().eq(0).text();
        let hotelName=$(this).children().eq(1).text();
        let category=$(this).children().eq(2).text();
        let email=$(this).children().eq(3).text();
        let contactNumber1=$(this).children().eq(4).text();
        let hotelPrice=$(this).children().eq(5).text();


        $("#update-hotel-Id").val(hotelId);
        $("#update-hotel-hotelName").val(hotelName);
        $("#update-vehicle-category").val(category);
        $("#update-hotel-email").val(email);
        $("#update-hotel-contact").val(contactNumber1);
        $("#update-hotel-price").val(hotelPrice);

    });
}

loadAllVehicles();
//Load All Vehicles
function loadAllVehicles(){
    $("hotelTB").empty();
    $.ajax({
        url: baseurlHotel+"hotel",
        method: "GET",
        success:function (resp){
            for(const hotel of resp.data){
                let row = `<tr><td>${hotel.hotelId}</td><td>${hotel.hotelName}</td><td>${hotel.category}</td><td>${hotel.email}</td><td>${hotel.contactNumber1}</td><td>${hotel.priceHotel}</td></tr>`;
                $("#hotelTB").append(row);
            }
            bindClickEventsHotel();
        }
    })
}

