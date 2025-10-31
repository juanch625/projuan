document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;

      if (nombre && correo && mensaje) {
        alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
        form.reset();
      } else {
        alert("Por favor completa todos los campos.");
      }
    });
  }
});