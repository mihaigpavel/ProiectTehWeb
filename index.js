function getDataUltimaActualizare() {
    const d = new Date();
    let dif = d.getMinutes() - 30;
    d.setMinutes(dif);
    const zi = String(d.getDate()).padStart(2, '0');
    const luna = String(d.getMonth() + 1).padStart(2, '0');
    const an = String(d.getFullYear());
    const ora = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    const format = zi + '.' + luna + '.' + an + ' ' + ora + ':' + minute;
    return format;
}
function getAnCurent() {
    const dataCurenta = new Date();
    const an = String(dataCurenta.getFullYear());
    return an;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}