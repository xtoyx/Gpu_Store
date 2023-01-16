function FormFunction() {
    let FirstName = document.getElementById("firstname");
    let LastName = document.getElementById("lastname");
    let Question = document.getElementById("Question");
    let Email = document.getElementById("email");
    function ValidateEmail(mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return true
        } else {
            alert("You have entered an invalid Email address!");
            return false;
        }
    }
    let EmailChecker = ValidateEmail(Email.value);
    if (FirstName.value.length > 0 && LastName.value.length > 0 && Question.value.length > 0
        && EmailChecker)
        alert("Have Been Submited");
    else {
        console.log("Not Good")
    }

}