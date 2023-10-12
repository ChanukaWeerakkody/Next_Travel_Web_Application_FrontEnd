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