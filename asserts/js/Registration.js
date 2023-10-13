/*
var baseUrl= "http://localhost:8080/api/v1/customer"

//save customer
$("#btnSaveCustomer").click(function (){
    let customer={
        firstName:$("#txtFirstName").val(),
        lastName:$("#txtLastName").val(),
        email:$("#txtEmail").val(),
        username:$("#txtUsername").val(),
        password:$("#txtPassword").val(),
    }
    let jCustomer =JSON.stringify(customer);

    console.log(jCustomer);

    $.ajax({
        url: baseUrl,
        method: "POST",
        data:customer,
        success:function (res){
            if (resp.status == 200) {
                alert("Customer saved successfully!");
                /!*loadAllItems();*!/
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
*/

