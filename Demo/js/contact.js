// ============================
//         CONTACT US
// ============================
const form = document.querySelector('form');
const email  = document.getElementById('userEmail');
const submit = document.getElementById('form-submit-btn');
const number = document.getElementById('userNumber');

form.addEventListener('submit', (event) => {
    event.preventDefault();
      const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

      if(email.value.match(mailformat))
        {
            return true;
        }
      else 
        {
        alert("You have entered an invalid email address!");
        return false;
        }
    }
  )

submit.addEventListener('click', ValidateEmail);