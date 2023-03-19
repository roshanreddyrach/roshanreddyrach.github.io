 // send email

 function Mail(){

    let  name = document.getElementById("name").value;
    let  email = document.getElementById("email").value;
    let  contact = document.getElementById("phoneNumber").value
    let  subject = document.getElementById("subject").value;
    let  comment = document.getElementById("comment").value;

    Email.send({
    SecureToken:"47926343-4703-43c0-afad-c4fd81bbe328",
    To : 'roshanreddyrach25@gmail.com',
    From : "roshanreddyrach25@gmail.com",
    Subject : "Mail from Portfolio site",
    Body : "Name:"+ name + "<br/> User Email:" + email + "<br/> Phone number:" + contact + "<br/> Subject" + subject + "<br/> User Message" + comment
    }).then(
        message => alert(message)
    );
    }