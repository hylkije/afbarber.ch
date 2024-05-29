const fname=document.getElementById('fname');
const email=document.getElementById('email');
const tel=document.getElementById('tel');
const address=document.getElementById('address');
const date=document.getElementById('date');
const experience =document.getElementById('experience');
const message=document.getElementById('message');
const submit=document.getElementsByClassName('bf-body-box')[0];


submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    //html mail
    let ebody = `
    <b>Name: </b>${fname.value} 
    <br>  
    <b>Email: </b>${email.value}
    <br> 
    <b>Phone: </b>${tel.value}
    <br> 
    <b>Current Address: </b>${address.value}
    <br> 
    <b>Start date available: </b>${date.value}
    <br> 
    <b>Experience: </b>${experience.value}
    <br> 
    <b>Message: </b>${message.value} 
    <br> 

    `

    

    // Email Code Here...
    Email.send({
        SecureToken : "bbb332d7-f8c6-4151-adbd-2bcc6073ca58",
        To : 'info@afbarber.ch',
        From : "info@afbarber.ch",
        Subject : "New application job form is entered from " + email.value,
        Body : ebody
    }).then(
      message => {
        if(message=='OK'){
            swal("Merci!", "Merci d'avoir postulé", "success");

        }
        else {
            swal("Error!", "Quelque chose ne va pas, réessayez!", "error")
        }

      }
    );
    
});
