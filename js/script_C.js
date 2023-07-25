var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "¡Gracias por tu mensaje!";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwnProperty.call(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! Hubo un problema al enviar el formulario.";
            }
          });
        }
      }).catch(error => {
        status.innerHTML = "Oops! Hubo un problema al enviar el formulario.";
      });
    }
    form.addEventListener("submit", handleSubmit);