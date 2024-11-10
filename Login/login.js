const captarLogin = document.querySelector("#login form");

const credenciales = {
  email: "papaconjamon@gmail.com",
  password: "contraseña123",
};

const handleSumbitLogin = (ev) => {
  ev.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email === credenciales.email && password === credenciales.password) {
    iniciarSesion(email);
  } else {
    mostrarMensajeError();
    limpiarFormulario();
  }
};

captarLogin.addEventListener("submit", handleSumbitLogin);

function iniciarSesion(email) {
  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("cart", JSON.stringify([]))
  localStorage.setItem("quantity", "0");
  window.location.href = "../PaginaPrincipal/index.html";
}

function limpiarFormulario() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function mostrarMensajeError() {
  alert("Credenciales incorrectas.");
}