
const fname=document.getElementById('fname');
const email=document.getElementById('email');
const tel=document.getElementById('tel');
const message=document.getElementById('message');
const submit=document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    //html mail
    let ebody = `
    <b>Name: </b>${fname.value} 
    <br>  
    <b>Email: </b>${email.value}
    <br> 
    <b>Date: </b>${tel.value}
    <br> 
    <b>Message: </b>${message.value} 
    <br> 
    `

    

    // Email Code Here...
    Email.send({
        SecureToken : "bbb4e00d-399d-4656-b90b-f76ca229c8c6",
        To : 'b77udev@gmail.com',
        From : "b77udev@gmail.com",
        Subject : "New message-Contact Forms from  " + email.value,
        Body : ebody
    }).then(
      message => {
        if(message=='OK'){
            swal("Merci!", "Votre message a été envoyé avec succès", "success");
           

        }
        else {
            swal("Error!", "Quelque chose ne va pas, réessayez!", "error")
        }

      }
    );
    
});


