
var campButton = document.getElementById('camp-button')


function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return pattern.test(email);
  }

campButton.addEventListener('click', function(){

   var campEmail = document.getElementById('camp-email').value

   if(!validateEmail(campEmail)) {
alert("Digite um email válido")
let cor = document.getElementById('camp-email').classList.add("cor")
   }else {
   alert("email Valido")
    let cor = document.getElementById('camp-email').classList.add("corr")
   }
 
})



