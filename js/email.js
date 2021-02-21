//Obtiene formulario por ID
const form = document.getElementById("contact-form");   

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
})

const sendMail = (mail) => {
    //1.
    fetch("C:/Users/Cris/Google%20Drive/Full%20Stack/Work/Repuestos-test2/send", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };
