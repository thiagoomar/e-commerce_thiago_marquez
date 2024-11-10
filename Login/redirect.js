const redireccion = () => {
    if (localStorage.getItem("usuarioEmail")) {
        window.location.href = "../PaginaPrincipal/index.html";
    }
};

redireccion()