function FormFunction() {
    let FirstName = document.getElementById("fname");
    let LastName = document.getElementById("lname");
    let Question = document.getElementById("mes");
    let phoneNumber=document.getElementById("tel");
    let Email = document.getElementById("email");
    function ValidateEmail(mail) {
        if(mail.indexOf("@") == -1) return true;
        else if (mail.indexOf(".") == -1) return true;
        else return false;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (mail.match(mailformat)) {
        //     return true
        // } else {
        //     alert("You have entered an invalid Email address!");
        //     return false;
        // }
    }
    function containsOnlyNumbers(str) {
        let counter=0;
        for(let i=0;i<str.length;i++){
            if(!(str.charAt(i)>='0'&&str.charAt(i)<='9')) break;
            counter++;
        }
        return counter==str.length ;
        // return /^[0-9]+$/.test(str);
    }
    function onlyEnglish(str){
        let counter=0;
        for(let i=0;i<str.length;i++){
            if((str.charAt(i)>='a'&&str.charAt(i)<='z')||(str.charAt(i)>='A'&&str.charAt(i)<='Z')) counter++;
            else break;
        }
        return counter==str.length ;
        // var letters = /^[A-Za-z]+$/;
        // return str.match(letters);
    }
    
    let EmailChecker = ValidateEmail(Email.value);
    let PhoneChecker = containsOnlyNumbers(phoneNumber.value) && phoneNumber.value.length == 10;
    let FirstChecker= onlyEnglish(FirstName.value);
    let LastChecker=onlyEnglish(LastName.value);
    if (FirstName.value.length > 0 && LastName.value.length > 0 && Question.value.length > 0
        && EmailChecker && PhoneChecker){
            alert("Have Been Submited");
            location.replace("index.html");
        }
    else {
       if(!PhoneChecker){
        alert("Phone Number is 10 Digits And Numbers Only");
       }
       if(!FirstChecker || !LastChecker){
        alert('Please input your First/Last Name in english');
       }
       if(!EmailChecker)
        alert("Please Type Email Address Correct");
    }

}