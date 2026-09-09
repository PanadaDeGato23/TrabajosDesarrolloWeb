let ContadorClick = 0;
const clicks_n = 5;

function interactuarImg(n_img) {
    const mensaje = document.getElementById("mensaje-estado")

    if (n_img === 2) {
        ContadorClick++;
        if (ContadorClick < clicks_n) {
            const restantes = clicks_n - ContadorClick;
            mensaje.innerText = "Clickea la imagen unas " + restantes + " veces mas";
        } else {
            const img_e = document.getElementById("img_e");
            img_e.src = "assets/img/gato.jpeg";
            mensaje.innerText = "!!Gato Pendejo Detected!!";
        }
    } else if (n_img === 1) {
        mensaje.innerText = "Gato normal"
    } else if (n_img === 3) {
        mensaje.innerText = "Gato normal"
    }
}