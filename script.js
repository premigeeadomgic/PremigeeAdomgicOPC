function send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;
    if(name !== '' && email !== '' && mobile !== '' && message !== '') {
        document.getElementById("status").innerHTML = "Dear " + name + ", your query sent successfully. You will receive updates on email id " + email + " or mobile number " + mobile + ".";
    } else {
        alert("Sender details and Message can't be empty");
    }
}


function registern(){
    var emailn = document.getElementById('emailID').value;
    alert('Dear '+emailn+ ', you will now recieve all updates from us');
}