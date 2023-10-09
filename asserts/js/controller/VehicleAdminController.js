document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const category = document.getElementById("category").value;
    const password = document.getElementById("password").value;

    console.log(category);
    const pCategory="Vehicle";

    if(category==pCategory){
        // Send a POST request to the Spring Boot backend
        fetch("http://localhost:8080/api/v1/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username,category, password })
        })
            .then(response => {
                if (response.status === 200) {
                    // Successful login, redirect or perform desired action
                    alert("Welcome!");
                    $('#adminDashboard').css('display','block');
                    $('#adminAddVehicle').css('display','none');
                    $('#adminCustomerVerification').css('display','none');
                    $('#adminRentalVerification').css('display','none');
                    $('#adminDriver').css('display','none');
                    $('#adminViewAllCustomer').css('display','none');
                    $('#adminHeaderMain').css('display','block');

                    $('#spaAdminMainLogIn').css('display','none');
                } else {
                    // Handle authentication failure
                    alert("Wrong")
                }
            });
    }else{
        alert("Wrong you haven't access!!")
    }
    console.log(username+" "+category+" "+password);
});