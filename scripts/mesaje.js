function loadMesaje(){

    if (typeof localStorage.getItem("contacte") !== "undefined" && localStorage.getItem("contacte") !== null && localStorage.getItem("contacte") !== ""){
        const retString = localStorage.getItem("contacte");
        const contacte = JSON.parse(retString);
        for(i = 0 ; i < contacte.length ; i++)
        {
            const c = contacte[i];
            const divEl = document.createElement("div");
            const persoanaEl = document.createElement("p");
            const persoanaTxt = document.createTextNode(c.nume + " " + c.prenume + "; " + c.email);
            persoanaEl.appendChild(persoanaTxt);
            divEl.appendChild(persoanaEl);
            const mesaj = document.createElement("p");
            const mesajTxt = document.createTextNode(c.mesaj);
            mesaj.appendChild(mesajTxt);
            divEl.appendChild(mesaj);
            document.getElementById("logat").appendChild(divEl);
        }
    }

}