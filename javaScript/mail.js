document.querySelector(".contact-form").addEventListener("submit",submitForm);
function submitForm(e) {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    document.querySelector(".contact-form").reset();
    sendEmail();
  }

  

  function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "enviocorreoprta@gmail.com",
        Password : "envioporta",
        To : 'enviocorreoprta@gmail.com',
        From : "enviocorreoprta@gmail.com",
        Subject : "Test email",
        Body : "enviocorreoprta@gmail.com"
    }).then(
      message => alert("message")
    );
    }