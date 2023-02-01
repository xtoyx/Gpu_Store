function FormFunction() {
    let fullname = document.getElementById("fullname");
    let message=document.getElementById("res").value;
    let Email = document.getElementById("email");
    function ValidateEmail(mail) {
        if(mail.indexOf("@") != -1) return true;
        else if (mail.indexOf(".") != -1) return true;
        else return false;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (mail.match(mailformat)) {
        //     return true
        // } else {
        //     alert("You have entered an invalid Email address!");
        //     return false;
        // }
    }
    function onlyEnglish(str){
        let counter=0;
        for(let i=0;i<str.length;i++){
            if((str.charAt(i)>='a'&&str.charAt(i)<='z')||(str.charAt(i)>='A'&&str.charAt(i)<='Z')) counter++;
            else return false;
        }
        return counter==str.length ;
        // var letters = /^[A-Za-z]+$/;
        // return str.match(letters);
    }
    let EmailChecker = ValidateEmail(Email.value);
    let fullnamechecker= onlyEnglish(fullname.value);
    if (Email.value.length >0 && fullname.value.length>0 && EmailChecker  && fullnamechecker && message.length >0){
            alert("We Will Review it");
            location.replace("index.html");
        }
    else {
       if(!fullnamechecker){
        alert('Please input your FullName in english');
       }
       if(!EmailChecker){
        alert('Please input your email in english correctly');
       }
       if(!message.length >0)
            alert("type your message")
    }

}